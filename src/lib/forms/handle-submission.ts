import { NextResponse } from "next/server";
import { insertFormSubmission, markSubmissionEmailStatus } from "@/lib/db";
import { parseFormRequest } from "@/lib/forms/parse-request";
import { validateFormInput } from "@/lib/forms/validate";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { isSesConfigured, sendFormEmail } from "@/lib/ses";

export async function handleFormSubmission(request: Request): Promise<NextResponse> {
  const ip = getClientIp(request.headers);

  const limit = checkRateLimit(`forms:${ip}`);
  if (!limit.allowed) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
    );
  }

  let parsed;
  try {
    parsed = await parseFormRequest(request);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Invalid request.";
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }

  if (!parsed) {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const validationErrors = validateFormInput(parsed);
  if (validationErrors.length) {
    return NextResponse.json(
      { ok: false, error: validationErrors.join(" ") },
      { status: 400 },
    );
  }

  const captcha = await verifyRecaptcha(parsed.recaptchaToken, ip);
  if (!captcha.ok) {
    return NextResponse.json(
      { ok: false, error: "Captcha verification failed. Please try again." },
      { status: 400 },
    );
  }

  let submissionId: number;
  try {
    submissionId = await insertFormSubmission({
      formType: parsed.formType,
      name: parsed.name,
      email: parsed.email,
      phone: parsed.phone,
      message: parsed.message,
      company: parsed.company,
      metadata: parsed.metadata,
      resumeFilename: parsed.resumeFilename,
      resumeData: parsed.resumeData,
      ipAddress: ip,
      userAgent: request.headers.get("user-agent"),
    });
  } catch (error) {
    console.error(`[forms:${parsed.formType}] DB insert failed:`, error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }

  if (!isSesConfigured()) {
    console.warn(
      `[forms:${parsed.formType}] SES not configured — submission stored but email skipped.`,
    );
    return NextResponse.json({ ok: true, id: submissionId, emailed: false });
  }

  try {
    await sendFormEmail({
      formType: parsed.formType,
      name: parsed.name,
      email: parsed.email,
      phone: parsed.phone,
      message: parsed.message,
      company: parsed.company,
      metadata: parsed.metadata,
      submissionId,
      resumeFilename: parsed.resumeFilename,
      resumeData: parsed.resumeData,
    });
    await markSubmissionEmailStatus(submissionId, "sent");
    return NextResponse.json({ ok: true, id: submissionId, emailed: true });
  } catch (error) {
    console.error(`[forms:${parsed.formType}] SES send failed:`, error);
    await markSubmissionEmailStatus(submissionId, "failed").catch(() => undefined);
    return NextResponse.json({ ok: true, id: submissionId, emailed: false });
  }
}
