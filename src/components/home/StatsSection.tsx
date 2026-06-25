import Image from "next/image";
import { stats } from "@/content/home";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Container from "@/components/layout/Container";

export default function StatsSection() {
  return (
    <section className="stats-section" aria-label="Company statistics">
      <Container>
        <div className="stats-grid">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className={`stat-card${"featured" in stat && stat.featured ? " stat-card--featured" : ""}`}
            >
              <div className="stat-card__icon-wrap">
                <Image
                  src={stat.icon}
                  alt=""
                  width={120}
                  height={120}
                  className="stat-card__icon"
                />
              </div>
              <p className="stat-card__label">{stat.label}</p>
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                duration={stat.duration}
              />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
