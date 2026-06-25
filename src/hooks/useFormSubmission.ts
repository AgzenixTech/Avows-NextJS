"use client";

import { FormEvent, useState } from "react";
import type { FormType } from "@/lib/forms/types";

type Status = "idle" | "submitting" | "success" | "error";

type UseFormSubmissionOptions = {
  formType: FormType;
  successMessage?: string;
  /** Use multipart FormData (required for file uploads, e.g. career resume). */
  multipart?: boolean;
};

type ApiResult = { ok?: boolean; error?: string };

export function useFormSubmission({
  formType,
  successMessage = "Thank you! Your submission has been received. We'll be in touch shortly.",
  multipart = false,
}: UseFormSubmissionOptions) {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    setStatus("submitting");
    setFeedback("");

    try {
      let res: Response;

      if (multipart) {
        const data = new FormData(form);
        data.set("formType", formType);
        res = await fetch("/api/forms", { method: "POST", body: data });
      } else {
        const data = new FormData(form);
        const payload: Record<string, string> = { formType };
        for (const [key, value] of data.entries()) {
          if (typeof value === "string") payload[key] = value;
        }
        payload.recaptchaToken = payload["g-recaptcha-response"] ?? "";
        res = await fetch("/api/forms", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      const result = (await res.json().catch(() => ({}))) as ApiResult;

      if (!res.ok || !result.ok) {
        setStatus("error");
        setFeedback(result.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setFeedback(successMessage);
      form.reset();
      window.grecaptcha?.reset();
    } catch {
      setStatus("error");
      setFeedback("Network error. Please check your connection and try again.");
    }
  }

  return {
    status,
    feedback,
    handleSubmit,
    isSubmitting: status === "submitting",
  };
}
