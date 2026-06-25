"use client";

import Image from "next/image";
import { careerApplyForm } from "@/content/career";
import Container from "@/components/layout/Container";
import RecaptchaField from "@/components/ui/RecaptchaField";
import { useFormSubmission } from "@/hooks/useFormSubmission";

export default function CareerApplyFormSection() {
  const { status, feedback, handleSubmit, isSubmitting } = useFormSubmission({
    formType: "career",
    multipart: true,
    successMessage:
      "Thank you! Your application has been submitted. Our team will review it shortly.",
  });

  return (
    <section id={careerApplyForm.id} className="career-apply" aria-label="Job application form">
      <Container>
        <div className="career-apply__card">
          <div className="career-apply__grid">
            <div className="career-apply__media">
              <Image
                src={careerApplyForm.image}
                alt=""
                width={900}
                height={1125}
                className="career-apply__image career-apply__image--desktop"
              />
              <Image
                src={careerApplyForm.imageMobile}
                alt=""
                width={400}
                height={500}
                className="career-apply__image career-apply__image--mobile"
              />
            </div>
            <div className="career-apply__form-wrap">
              <h2 className="career-apply__title">{careerApplyForm.title}</h2>
              <p className="career-apply__required-note">
                <span aria-hidden="true">*</span> indicates required fields
              </p>
              <form
                className="career-form"
                onSubmit={handleSubmit}
                aria-label="Career application form"
                encType="multipart/form-data"
              >
                {careerApplyForm.fields.map((field) => (
                  <div key={field.name} className="career-form__field">
                    <label htmlFor={`career-${field.name}`}>
                      {field.label}
                      {field.required ? <span className="career-form__required">*</span> : null}
                    </label>
                    <input
                      id={`career-${field.name}`}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                    />
                  </div>
                ))}

                <fieldset className="career-form__fieldset">
                  <legend>
                    Position You&apos;re Applying For{" "}
                    <span className="career-form__required">*</span>
                  </legend>
                  <div className="career-form__radio-grid">
                    {careerApplyForm.positions.map((position) => (
                      <label key={position} className="career-form__radio">
                        <input type="radio" name="position" value={position} required />
                        {position}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="career-form__field">
                  <label htmlFor="career-residency">
                    Residency <span className="career-form__required">*</span>
                  </label>
                  <select id="career-residency" name="residency" required defaultValue="Malaysia">
                    {careerApplyForm.residencyOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="career-form__field">
                  <label htmlFor="career-resume">Upload Your Resume</label>
                  <p className="career-form__hint">
                    Upload your resume in .pdf, .doc or .docx format
                  </p>
                  <input
                    id="career-resume"
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    className="career-form__file-input"
                  />
                  <p className="career-form__file-note">
                    Accepted file types: pdf, doc, docx, Max. file size: 25 MB.
                  </p>
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

                <button type="submit" className="career-form__submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : careerApplyForm.submitLabel}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
