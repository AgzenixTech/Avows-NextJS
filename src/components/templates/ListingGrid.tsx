import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";

type ListingItem = {
  title: string;
  href: string;
  image: string;
};

type ListingGridProps = {
  subtitle?: string;
  items: readonly ListingItem[];
};

export default function ListingGrid({ subtitle, items }: ListingGridProps) {
  return (
    <section className="listing-section" aria-label="Content listing">
      <Container>
        {subtitle ? <p className="listing-section__subtitle">{subtitle}</p> : null}
        <div className="cards-grid">
          {items.map((item) => (
            <article key={item.href} className="content-card">
              <Link href={item.href}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1024}
                  height={683}
                  className="content-card__image"
                />
              </Link>
              <div className="content-card__body">
                <h2 className="content-card__title">
                  <Link href={item.href}>{item.title}</Link>
                </h2>
                <Link
                  href={item.href}
                  className="content-card__btn"
                  aria-label={`Learn more about ${item.title}`}
                >
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
