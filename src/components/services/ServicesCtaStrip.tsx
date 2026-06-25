import Link from "next/link";
import { servicesCta } from "@/content/services";
import Container from "@/components/layout/Container";
import SectionBackground from "@/components/ui/SectionBackground";

export default function ServicesCtaStrip() {
  return (
    <section className="services-cta" aria-label="Contact call to action">
      <SectionBackground
        src={servicesCta.backgroundImage}
        className="section-background--services-cta"
      />
      <Container>
        <div className="services-cta__grid">
          <div className="services-cta__copy">
            <p className="services-cta__line services-cta__line--intro">{servicesCta.line1}</p>
            <p className="services-cta__line services-cta__line--headline">{servicesCta.line2}</p>
            <p className="services-cta__line services-cta__line--footer">{servicesCta.line3}</p>
          </div>
          <div className="services-cta__action">
            <Link href={servicesCta.cta.href} className="services-cta__btn">
              <i className="fas fa-arrow-right" aria-hidden="true" />
              {servicesCta.cta.text}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
