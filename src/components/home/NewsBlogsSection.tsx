import Image from "next/image";
import Link from "next/link";
import { announcementsSection, blogsSection } from "@/content/home";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

type ContentBlockProps = {
  eyebrow: string;
  title: string;
  cta: { text: string; href: string };
  items: readonly { title: string; href: string; image: string }[];
};

function ContentBlock({ eyebrow, title, cta, items }: ContentBlockProps) {
  return (
    <div className="news-blogs-block">
      <SectionHeading eyebrow={eyebrow} title={title} variant="home" />
      <div className="cards-grid">
        {items.map((item) => (
          <article key={item.href} className="content-card">
            <Link href={item.href}>
              <Image
                src={item.image}
                alt={item.title}
                width={768}
                height={512}
                className="content-card__image"
              />
            </Link>
            <div className="content-card__body">
              <h3 className="content-card__title">
                <Link href={item.href}>{item.title}</Link>
              </h3>
              <Link href={item.href} className="content-card__btn" aria-label={`Learn more about ${item.title}`}>
                Learn more
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="section-cta">
        <Button
          href={cta.href}
          size="lg"
          variant="primary"
          iconAfter
          icon={<i className="fas fa-arrow-right" aria-hidden="true" />}
        >
          {cta.text}
        </Button>
      </div>
    </div>
  );
}

export default function NewsBlogsSection() {
  return (
    <section className="news-blogs-section" aria-label="News and blogs">
      <Container>
        <ContentBlock
          eyebrow={announcementsSection.eyebrow}
          title={announcementsSection.title}
          cta={announcementsSection.cta}
          items={announcementsSection.items}
        />
        <ContentBlock
          eyebrow={blogsSection.eyebrow}
          title={blogsSection.title}
          cta={blogsSection.cta}
          items={blogsSection.items}
        />
      </Container>
    </section>
  );
}
