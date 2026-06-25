export const FORM_TYPES = ["contact", "home-contact", "partner", "career"] as const;

export type FormType = (typeof FORM_TYPES)[number];

export function isFormType(value: string): value is FormType {
  return (FORM_TYPES as readonly string[]).includes(value);
}

export type ParsedFormInput = {
  formType: FormType;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  company: string | null;
  metadata: Record<string, string>;
  resumeFilename: string | null;
  resumeData: Buffer | null;
  recaptchaToken: string;
};

export type FormSubmissionRecord = {
  formType: FormType;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  company: string | null;
  metadata: Record<string, string>;
  resumeFilename: string | null;
  resumeData: Buffer | null;
  ipAddress: string | null;
  userAgent: string | null;
};

export type FormEmailPayload = {
  formType: FormType;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  company: string | null;
  metadata: Record<string, string>;
  submissionId: number;
  resumeFilename: string | null;
  resumeData: Buffer | null;
};
