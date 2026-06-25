import { serverEnv } from "@/lib/env";

type RecaptchaVerifyResponse = {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
};

export type RecaptchaResult = {
  ok: boolean;
  skipped: boolean;
  errorCodes?: string[];
};

/**
 * Verifies a Google reCAPTCHA v2 token against Google's siteverify API.
 *
 * The secret key is read server-side only. If no secret is configured the
 * verification is skipped (useful for local development) but this is logged so
 * it is never silently disabled in production.
 */
export async function verifyRecaptcha(
  token: string | undefined,
  remoteIp?: string,
): Promise<RecaptchaResult> {
  const secret = serverEnv.recaptcha.secretKey;

  if (!secret) {
    console.warn(
      "[recaptcha] RECAPTCHA_SECRET_KEY is not set — skipping verification.",
    );
    return { ok: true, skipped: true };
  }

  if (!token) {
    return { ok: false, skipped: false, errorCodes: ["missing-input-response"] };
  }

  const params = new URLSearchParams({ secret, response: token });
  if (remoteIp && remoteIp !== "unknown") {
    params.set("remoteip", remoteIp);
  }

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
    cache: "no-store",
  });

  if (!res.ok) {
    return { ok: false, skipped: false, errorCodes: ["verification-request-failed"] };
  }

  const data = (await res.json()) as RecaptchaVerifyResponse;
  return {
    ok: data.success === true,
    skipped: false,
    errorCodes: data["error-codes"],
  };
}
