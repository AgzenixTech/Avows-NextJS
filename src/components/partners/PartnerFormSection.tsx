"use client";

import Image from "next/image";
import { partnerFormSection } from "@/content/partners";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import RecaptchaField from "@/components/ui/RecaptchaField";
import { useFormSubmission } from "@/hooks/useFormSubmission";

export default function PartnerFormSection() {
  const { status, feedback, handleSubmit, isSubmitting } = useFormSubmission({
    formType: "partner",
    successMessage:
      "Thank you! Your partner enquiry has been submitted. We'll be in touch shortly.",
  });

  return (
    <section
      id={partnerFormSection.id}
      className="partners-form-section"
      aria-label="Partner with us form"
    >
      <Container>
        <div className="partners-form-section__card">
          <h2 className="partners-form-section__title">{partnerFormSection.title}</h2>
          <div className="partners-form-section__grid">
            <Image
              src={partnerFormSection.image}
              alt=""
              width={400}
              height={500}
              className="partners-form-section__image"
            />
            <form className="partner-form" onSubmit={handleSubmit} aria-label="Partner inquiry form">
              {partnerFormSection.fields.map((field) => (
                <div key={field.name} className="partner-form__field">
                  {field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      placeholder={field.placeholder}
                      aria-label={field.label}
                      rows={4}
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      aria-label={field.label}
                      required={field.name === "company" || field.name === "email" || field.name === "name"}
                    />
                  )}
                </div>
              ))}
              <RecaptchaField className="contact-form__recaptcha" />
              {feedback ? (
                <p
                  className={`contact-form__feedback contact-form__feedback--${status}`}
                  role="status"
                  aria-live="polite"
                >
                  {feedback}
                </p>
              ) : null}
              <Button type="submit" variant="primary" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : partnerFormSection.submitLabel}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
