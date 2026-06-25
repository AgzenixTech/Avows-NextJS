import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Container from "@/components/layout/Container";
import { servicePrimaryStats } from "@/content/service-stats";

export default function ServiceStatsSection() {
  return (
    <section className="service-stats" aria-label="Service statistics">
      <Container>
        <div className="service-stats__row service-stats__row--primary">
          {servicePrimaryStats.map((stat, index) => (
            <article
              key={stat.label}
              className={`service-stat service-stat--large${index === 2 ? " service-stat--featured" : ""}`}
            >
              <Image src={stat.icon} alt="" width={176} height={176} className="service-stat__icon" />
              <p className="service-stat__label">{stat.label}</p>
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                duration={stat.duration}
                className="service-stat__value"
              />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

type ServiceCaseStudy = {
  title: string;
  href: string;
  image: string;
  excerpt?: string;
};

type ServiceCaseStudiesProps = {
  items: readonly ServiceCaseStudy[];
};

export function ServiceCaseStudies({ items }: ServiceCaseStudiesProps) {
  if (!items.length) return null;

  return (
    <section className="service-case-studies" aria-label="Relevant case studies">
      <Container>
        <h2 className="service-case-studies__title">Relevant Case Studies:</h2>
        <div className="service-case-studies__grid">
          {items.map((item) => (
            <article key={item.href} className="service-case-studies__card">
              <Link href={item.href}>
                <Image src={item.image} alt={item.title} width={300} height={300} />
              </Link>
              <div className="service-case-studies__card-body">
                <h3>
                  <Link href={item.href}>{item.title}</Link>
                </h3>
                {item.excerpt ? <p className="service-case-studies__excerpt">{item.excerpt}</p> : null}
                <Link href={item.href} className="service-case-studies__btn">
                  Learn more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
