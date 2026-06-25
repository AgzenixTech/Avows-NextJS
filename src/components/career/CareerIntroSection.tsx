import Link from "next/link";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Container from "@/components/layout/Container";
import SectionBackground from "@/components/ui/SectionBackground";
import { careerIntro } from "@/content/career";

export default function CareerIntroSection() {
  return (
    <section className="career-intro" aria-label="Career at Avows">
      <Container>
        <div className="career-intro__grid">
          <div className="career-intro__content">
            <span className="career-intro__watermark" aria-hidden="true">
              {careerIntro.watermark}
            </span>
            <h2 className="career-intro__title">{careerIntro.title}</h2>
            <p className="career-intro__text">{careerIntro.text}</p>
            <Link href={careerIntro.cta.href} className="career-intro__cta">
              <i className="fas fa-arrow-right" aria-hidden="true" />
              {careerIntro.cta.text}
            </Link>
          </div>
          <div className="career-intro__stats">
            {careerIntro.stats.map((stat) => (
              <article
                key={stat.label}
                className={`career-intro-stat career-intro-stat--${stat.variant}`}
              >
                {"backgroundImage" in stat ? (
                  <SectionBackground src={stat.backgroundImage} />
                ) : null}
                <div className="career-intro-stat__icon">
                  <i className={`fas ${stat.icon}`} aria-hidden="true" />
                </div>
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  duration={2000}
                  className="career-intro-stat__value"
                />
                <p className="career-intro-stat__label">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
