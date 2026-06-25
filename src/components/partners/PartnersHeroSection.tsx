import { partnersHero } from "@/content/partners";
import Container from "@/components/layout/Container";
import SectionBackground from "@/components/ui/SectionBackground";

export default function PartnersHeroSection() {
  return (
    <section className="partners-hero" aria-label="Partners hero">
      <SectionBackground src={partnersHero.backgroundImage} priority />
      <Container>
        <h1 className="partners-hero__title">{partnersHero.title}</h1>
      </Container>
    </section>
  );
}
