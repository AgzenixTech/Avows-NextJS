import { privacySections } from "@/content/privacy";
import Container from "@/components/layout/Container";

export default function PrivacyContent() {
  return (
    <section className="privacy-content" aria-label="Privacy policy">
      <Container>
        <h1 className="privacy-content__page-title">
          Notice Pursuant to Personal Data Protection Act 2010
        </h1>
        {privacySections.map((section, index) => (
          <div key={index} className="privacy-content__section">
            {"heading" in section && section.heading ? (
              <h2 className="privacy-content__heading">{section.heading}</h2>
            ) : null}
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="privacy-content__paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </Container>
    </section>
  );
}
