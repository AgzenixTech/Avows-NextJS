import { contactMap } from "@/content/contact";
import Container from "@/components/layout/Container";

export default function ContactMapSection() {
  return (
    <section className="contact-map" aria-label="Avows headquarters map">
      <Container>
        <h2 className="contact-map__title">{contactMap.title}</h2>
        <div className="contact-map__frame">
          <iframe
            src={contactMap.embedUrl}
            width="600"
            height="450"
            className="contact-map__iframe"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Avows Technologies headquarters map"
          />
        </div>
      </Container>
    </section>
  );
}
