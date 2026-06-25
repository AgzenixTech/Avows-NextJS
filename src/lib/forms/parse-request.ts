import { isFormType, type FormType, type ParsedFormInput } from "@/lib/forms/types";
import {
  clean,
  FIELD_MAX,
  isAllowedResumeType,
} from "@/lib/forms/validate";

function careerMessage(position: string, residency: string): string {
  return `Position: ${position}\nResidency: ${residency}`;
}

async function parseJsonBody(request: Request): Promise<ParsedFormInput | null> {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return null;
  }

  const formTypeRaw = clean(body.formType, 40);
  if (!isFormType(formTypeRaw)) return null;

  return buildParsedInput(formTypeRaw, body, null, null);
}

async function parseMultipartBody(request: Request): Promise<ParsedFormInput | null> {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return null;
  }

  const formTypeRaw = clean(formData.get("formType"), 40);
  if (!isFormType(formTypeRaw)) return null;

  const body: Record<string, unknown> = {};
  for (const [key, value] of formData.entries()) {
    if (typeof value === "string") body[key] = value;
  }

  const resumeEntry = formData.get("resume");
  let resumeFilename: string | null = null;
  let resumeData: Buffer | null = null;

  if (resumeEntry instanceof File && resumeEntry.size > 0) {
    if (!isAllowedResumeType(resumeEntry.type)) {
      throw new Error("Resume must be a .pdf, .doc, or .docx file.");
    }
    resumeFilename = resumeEntry.name.slice(0, 255);
    resumeData = Buffer.from(await resumeEntry.arrayBuffer());
  }

  return buildParsedInput(formTypeRaw, body, resumeFilename, resumeData);
}

function buildParsedInput(
  formType: FormType,
  body: Record<string, unknown>,
  resumeFilename: string | null,
  resumeData: Buffer | null,
): ParsedFormInput {
  const name = clean(body.name, FIELD_MAX.name);
  const email = clean(body.email, FIELD_MAX.email);
  const phone = clean(body.phone, FIELD_MAX.phone) || null;
  const company = clean(body.company, FIELD_MAX.company) || null;
  const message = clean(body.message, FIELD_MAX.message);
  const recaptchaToken =
    clean(body.recaptchaToken, 4000) || clean(body["g-recaptcha-response"], 4000);

  const metadata: Record<string, string> = {};

  if (formType === "career") {
    const position = clean(body.position, FIELD_MAX.position);
    const residency = clean(body.residency, FIELD_MAX.residency);
    metadata.position = position;
    metadata.residency = residency;

    return {
      formType,
      name,
      email,
      phone,
      message: message || careerMessage(position, residency),
      company: null,
      metadata,
      resumeFilename,
      resumeData,
      recaptchaToken,
    };
  }

  return {
    formType,
    name,
    email,
    phone,
    message,
    company,
    metadata,
    resumeFilename: null,
    resumeData: null,
    recaptchaToken,
  };
}

export async function parseFormRequest(request: Request): Promise<ParsedFormInput | null> {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("multipart/form-data")) {
    try {
      return await parseMultipartBody(request);
    } catch (error) {
      if (error instanceof Error && error.message.includes("Resume must be")) {
        throw error;
      }
      return null;
    }
  }

  return parseJsonBody(request);
}
