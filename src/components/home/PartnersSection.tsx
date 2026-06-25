import { partnersSection } from "@/content/home";
import Button from "@/components/ui/Button";
import ImageCarousel from "@/components/ui/ImageCarousel";
import Container from "@/components/layout/Container";
import SectionBackground from "@/components/ui/SectionBackground";

export default function PartnersSection() {
  return (
    <section
      className="bg-banner-section partners-section"
      aria-label="Partners"
    >
      <SectionBackground src={partnersSection.backgroundImage} variant="top" />
      <div className="bg-banner-section__overlay" aria-hidden="true" />
      <Container>
        <p className="bg-banner-section__lead">{partnersSection.lead}</p>
        <h2 className="bg-banner-section__headline">{partnersSection.headline}</h2>
        <Button
          href={partnersSection.cta.href}
          size="lg"
          variant="primary"
          iconAfter
          icon={<i className="fas fa-arrow-right" aria-hidden="true" />}
        >
          {partnersSection.cta.text}
        </Button>
        <div className="partners-section__logos-bar">
          <ImageCarousel
            images={partnersSection.logos}
            slidesPerView={5}
            variant="partners"
            ariaLabel="Partner logos"
          />
        </div>
      </Container>
    </section>
  );
}
