import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import SectionBackground from "@/components/ui/SectionBackground";
import { careerHero } from "@/content/career";

export default function CareerHeroSection() {
  return (
    <section className="page-hero page-hero--career" aria-label="Career hero">
      <SectionBackground src={careerHero.backgroundImage} priority />
      <Container>
        <h1 className="page-hero__title">{careerHero.title}</h1>
        <p className="career-hero__intro">{careerHero.intro}</p>
        <div className="career-hero__cta">
          <Button href={careerHero.cta.href} variant="primary" size="lg">
            <i className="fas fa-arrow-right" aria-hidden="true" />
            {careerHero.cta.text}
          </Button>
        </div>
      </Container>
    </section>
  );
}
