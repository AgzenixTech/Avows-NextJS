import Image from "next/image";
import Link from "next/link";
import { servicesSection } from "@/content/home";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/layout/Container";

type ServicesSectionProps = {
  omitId?: boolean;
  className?: string;
};

export default function ServicesSection({
  omitId = false,
  className = "",
}: ServicesSectionProps) {
  return (
    <section
      {...(!omitId ? { id: servicesSection.id } : {})}
      className={`services-section ${className}`.trim()}
      aria-label="Services"
    >
      <Container>
        <SectionHeading
          eyebrow={servicesSection.eyebrow}
          title={servicesSection.title}
        />
        <div className="services-grid">
          {servicesSection.items.map((service) => (
            <article key={service.href} className="service-card">
              <span className="service-card__number" aria-hidden="true">
                {service.number}
              </span>
              <Link href={service.href} className="service-card__image-wrap">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={393}
                  height={393}
                  className="service-card__image"
                />
              </Link>
              <h3 className="service-card__title">
                <Link href={service.href}>{service.title}</Link>
              </h3>
              <Link
                href={service.href}
                className="btn btn--icon-only btn--primary"
                aria-label={`Learn more about ${service.title}`}
              >
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
