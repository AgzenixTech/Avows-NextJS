"use client";

import { contactFormSection } from "@/content/contact";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import RecaptchaField from "@/components/ui/RecaptchaField";
import { useFormSubmission } from "@/hooks/useFormSubmission";

export default function ContactFormSection() {
  const { status, feedback, handleSubmit, isSubmitting } = useFormSubmission({
    formType: "contact",
    successMessage:
      "Thank you! Your message has been sent. We'll be in touch shortly.",
  });

  return (
    <section className="contact-form-section" aria-label="Contact form">
      <Container>
        <div className="contact-form-section__grid">
          <div className="contact-form-section__info">
            <h2 className="contact-form-section__heading">{contactFormSection.heading}</h2>
            <div className="contact-form-section__divider" />
            <p className="contact-form-section__detail">
              <a href={`tel:${contactFormSection.phone.replace(/\s/g, "")}`}>
                {contactFormSection.phone}
              </a>
            </p>
            <p className="contact-form-section__detail">
              <a href={`mailto:${contactFormSection.email}`}>{contactFormSection.email}</a>
            </p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact inquiry form">
            {contactFormSection.fields.map((field) => (
              <div key={field.name} className="contact-form__field">
                {field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    placeholder={field.placeholder}
                    aria-label={field.label}
                    rows={4}
                    required
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    aria-label={field.label}
                    required={field.type === "email" || field.name === "name"}
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
            <Button
              type="submit"
              variant="primary"
              className="contact-form__submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : contactFormSection.submitLabel}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
