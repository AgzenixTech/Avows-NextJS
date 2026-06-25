import { caseStudiesSection } from "@/content/home";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import SectionBackground from "@/components/ui/SectionBackground";

export default function CaseStudiesSection() {
  return (
    <section
      className="bg-banner-section case-studies-section"
      aria-label="Case studies"
    >
      <SectionBackground src={caseStudiesSection.backgroundImage} variant="top" />
      <div className="bg-banner-section__overlay" aria-hidden="true" />
      <Container>
        <h2 className="bg-banner-section__headline">{caseStudiesSection.title}</h2>
        <p className="bg-banner-section__lead">{caseStudiesSection.subtitle}</p>
        <Button
          href={caseStudiesSection.cta.href}
          size="lg"
          variant="primary"
          iconAfter
          icon={<i className="fas fa-arrow-right" aria-hidden="true" />}
        >
          {caseStudiesSection.cta.text}
        </Button>
      </Container>
    </section>
  );
}
