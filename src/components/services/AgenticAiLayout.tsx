import Image from "next/image";
import Button from "@/components/ui/Button";
import PageHero from "@/components/templates/PageHero";
import Container from "@/components/layout/Container";
import SectionBackground from "@/components/ui/SectionBackground";
import type { ServicePageConfig } from "@/lib/pages/registry";
import "@/styles/agentic-ai.css";

type AgenticPage = Extract<ServicePageConfig, { variant: "agentic" }>;

export default function AgenticAiLayout({ page }: { page: AgenticPage }) {
  const { sections } = page;

  return (
    <>
      <PageHero
        title={page.heroTitle}
        backgroundImage={page.backgroundImage}
        className="page-hero--tall page-hero--agentic"
      >
        {page.heroCta ? (
          <div className="agentic-hero__cta">
            <Button href={page.heroCta.href} variant="primary" size="lg" className="btn--agentic">
              {page.heroCta.text}
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </Button>
          </div>
        ) : null}
      </PageHero>

      <section className="agentic-intro" aria-label="Why agentic AI now">
        <Container>
          <div className="agentic-intro__grid">
            <div className="agentic-intro__media">
              <Image
                src={sections.introImage}
                alt="Agentic AI enterprise infrastructure illustration"
                width={900}
                height={858}
                className="agentic-intro__image"
                priority
              />
            </div>
            <div className="agentic-intro__content">
              <p className="agentic-eyebrow">{sections.whyNow.eyebrow}</p>
              <p className="agentic-subtitle">{sections.whyNow.subtitle}</p>
              {sections.whyNow.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="agentic-body">
                  {paragraph}
                </p>
              ))}

              <p className="agentic-eyebrow agentic-eyebrow--spaced">{sections.partner.eyebrow}</p>
              <p className="agentic-subtitle">{sections.partner.subtitle}</p>
              <p className="agentic-body">{sections.partner.body}</p>
              <ul className="agentic-checklist">
                {sections.partner.checklist.map((item) => (
                  <li key={item}>
                    <i className="fas fa-check" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="agentic-delivers-header" aria-label="What Avows and Akka deliver">
        <Container>
          <h2 className="agentic-delivers-header__title">{sections.delivers.title}</h2>
          <p className="agentic-subtitle agentic-subtitle--center agentic-subtitle--delivers">
            {sections.delivers.subtitle}
          </p>
        </Container>
      </section>

      <section className="agentic-delivers-cards" aria-label="Service offerings">
        <Container>
          <div className="agentic-delivers-cards__grid">
            {sections.delivers.items.map((item) => (
              <article key={item.title} className="agentic-delivers-cards__card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="agentic-leaders" aria-label="Built for leaders">
        <Container>
          <p className="agentic-eyebrow agentic-eyebrow--center agentic-eyebrow--leaders">
            {sections.leadersEyebrow}
          </p>
        </Container>
      </section>

      <section className="agentic-audience" aria-label="Industries and roles">
        <Container>
          <div className="agentic-audience__grid">
            <div>
              <h2 className="agentic-audience__title">{sections.industries.title}</h2>
              <p className="agentic-audience__text">{sections.industries.text}</p>
            </div>
            <div>
              <h2 className="agentic-audience__title">{sections.roles.title}</h2>
              <p className="agentic-audience__text">{sections.roles.text}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="agentic-cta" aria-label="Contact call to action">
        <SectionBackground src={page.cta.backgroundImage} variant="top" />
        <div className="agentic-cta__overlay" aria-hidden />
        <Container>
          <div className="agentic-cta__inner">
            <p className="agentic-cta__lead">{page.cta.title}</p>
            <h2 className="agentic-cta__heading">{page.cta.body}</h2>
            <Button href={page.cta.button.href} variant="primary" size="lg" className="btn--agentic">
              {page.cta.button.text}
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
