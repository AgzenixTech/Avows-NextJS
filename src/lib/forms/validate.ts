import type { ParsedFormInput } from "@/lib/forms/types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const FIELD_MAX = {
  name: 120,
  email: 200,
  phone: 40,
  message: 5000,
  company: 200,
  position: 80,
  residency: 80,
} as const;

const RESUME_MAX_BYTES = 25 * 1024 * 1024;
const RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

export function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export function validateFormInput(input: ParsedFormInput): string[] {
  const errors: string[] = [];

  if (!input.name) errors.push("Name is required.");
  if (!input.email || !EMAIL_RE.test(input.email)) {
    errors.push("A valid email is required.");
  }

  switch (input.formType) {
    case "contact":
    case "home-contact":
      if (!input.message) errors.push("Message is required.");
      break;
    case "partner":
      if (!input.company) errors.push("Company name is required.");
      break;
    case "career":
      if (!input.phone) errors.push("Phone is required.");
      if (!input.metadata.position) errors.push("Position is required.");
      if (!input.metadata.residency) errors.push("Residency is required.");
      break;
  }

  if (input.resumeData) {
    if (input.resumeData.length > RESUME_MAX_BYTES) {
      errors.push("Resume must be 25 MB or smaller.");
    }
    // MIME type is validated at parse time when the file is read.
  }

  return errors;
}

export function isAllowedResumeType(mimeType: string): boolean {
  return RESUME_TYPES.has(mimeType);
}
