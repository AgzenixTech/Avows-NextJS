"use client";

import { contactStrip } from "@/content/home";
import RecaptchaField from "@/components/ui/RecaptchaField";
import Container from "@/components/layout/Container";
import SectionBackground from "@/components/ui/SectionBackground";
import { useFormSubmission } from "@/hooks/useFormSubmission";

export default function ContactStrip() {
  const { status, feedback, handleSubmit, isSubmitting } = useFormSubmission({
    formType: "home-contact",
    successMessage:
      "Thank you! Your message has been sent. We'll be in touch shortly.",
  });

  return (
    <section id={contactStrip.id} className="contact-strip" aria-label="Contact">
      <SectionBackground
        src={contactStrip.backgroundImage}
        variant="contact"
      />
      <Container>
        <div className="contact-strip__grid">
          <div>
            <p className="contact-strip__lead">{contactStrip.line1}</p>
            <p className="contact-strip__heading">{contactStrip.line2}</p>
            <div className="contact-strip__divider" aria-hidden="true" />
            <p className="contact-strip__phone">{contactStrip.phone}</p>
            <p className="contact-strip__email">
              <a href={`mailto:${contactStrip.email}`}>{contactStrip.email}</a>
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
            <div className="contact-form__field">
              <input
                type="text"
                name="name"
                placeholder="Name..."
                aria-label="Name"
                required
              />
            </div>
            <div className="contact-form__field">
              <input
                type="email"
                name="email"
                placeholder="Email..."
                required
                aria-label="Email"
              />
            </div>
            <div className="contact-form__field">
              <input type="tel" name="phone" placeholder="Phone ..." aria-label="Phone" />
            </div>
            <div className="contact-form__field">
              <textarea
                name="message"
                rows={4}
                placeholder="Message..."
                aria-label="Message"
                required
              />
            </div>
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
            <button type="submit" className="contact-form__submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
