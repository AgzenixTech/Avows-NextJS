"use client";

import { partnersWhy } from "@/content/partners";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function PartnersWhySection() {
  return (
    <section className="partners-why" aria-label="Why partner with AVOWS">
      <Container>
        <div className="partners-why__grid">
          <div className="partners-why__copy">
            <span className="partners-why__watermark" aria-hidden="true">
              {partnersWhy.watermark}
            </span>
            <h2 className="partners-why__title">{partnersWhy.title}</h2>
            <p className="partners-why__text">{partnersWhy.text}</p>
            <Button
              href={partnersWhy.cta.href}
              variant="primary"
              icon={<i className="fas fa-arrow-right" aria-hidden="true" />}
            >
              {partnersWhy.cta.text}
            </Button>
          </div>
          <div className="partners-why__stats">
            {partnersWhy.stats.map((stat) => (
              <article key={stat.label} className="partners-stat-card">
                <div className="partners-stat-card__icon-wrap">
                  <i className={`fas ${stat.icon}`} aria-hidden="true" />
                </div>
                <p className="partners-stat-card__label">{stat.label}</p>
                <p className="partners-stat-card__value">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
