import Image from "next/image";
import { aboutHero } from "@/content/about";
import Container from "@/components/layout/Container";

export default function AboutHeroSection() {
  return (
    <>
      <section className="about-hero-journey" aria-label="Our Journey">
        <Container>
          <h2 className="about-hero-journey__title">{aboutHero.eyebrow}</h2>
        </Container>
      </section>

      <section className="about-hero-banner" aria-label="About Us introduction">
        <Container>
          <h1 className="about-hero__title">{aboutHero.title}</h1>
          <p className="about-hero__intro">{aboutHero.intro}</p>
        </Container>
      </section>

      <section className="about-hero-ceo" aria-label="From The CEO">
        <Container>
          <div className="about-hero__ceo-grid">
            <div className="about-hero__image-wrap">
              
              <Image
                src={aboutHero.ceoImage}
                alt="AVOWS CEO"
                width={500}
                height={450}
                className="about-hero__image"
                priority
              />
            </div>
            <div className="about-hero__ceo-copy">
              <h2 className="about-hero__ceo-label">{aboutHero.ceoLabel}</h2>
              <blockquote className="about-hero__quote">{aboutHero.ceoQuote}</blockquote>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
