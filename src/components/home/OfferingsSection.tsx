import Image from "next/image";
import Link from "next/link";
import { offeringsSection } from "@/content/home";
import Container from "@/components/layout/Container";

export default function OfferingsSection() {
  return (
    <section className="offerings-section" aria-label="Core offerings">
      <Container>
        <div className="offerings-grid">
          {offeringsSection.items.map((item) => (
            <article
              key={item.href}
              className={`offering-card offering-card--${item.variant}`}
            >
              <div className="offering-card__icon-wrap">
                <Image
                  src={item.icon}
                  alt=""
                  width={64}
                  height={74}
                  className="offering-card__icon"
                />
              </div>
              <h3 className="offering-card__title">
                <Link href={item.href}>{item.title}</Link>
              </h3>
              <p className="offering-card__description">{item.description}</p>
              <Link
                href={item.href}
                className="offering-card__cta"
                aria-label={`Discover more about ${item.title}`}
              >
                <span>Discover More</span>
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
