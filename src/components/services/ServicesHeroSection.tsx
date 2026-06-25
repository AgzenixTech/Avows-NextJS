import { servicesHero } from "@/content/services";
import Container from "@/components/layout/Container";
import SectionBackground from "@/components/ui/SectionBackground";

export default function ServicesHeroSection() {
  return (
    <section className="services-hero" aria-label="Services hero">
      <SectionBackground src={servicesHero.backgroundImage} priority />
      <Container>
        <h1 className="services-hero__title">{servicesHero.title}</h1>
      </Container>
    </section>
  );
}
