import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/templates/PageHero";
import Container from "@/components/layout/Container";
import type { ArticlePageConfig } from "@/lib/pages/registry";

type ArticlePageLayoutProps = {
  page: ArticlePageConfig;
};

export default function ArticlePageLayout({ page }: ArticlePageLayoutProps) {
  return (
    <>
      <PageHero title={page.heroTitle} backgroundImage={page.heroImage} />
      <section
        className="article-content"
        aria-label={page.heroTitle}
        data-animate-none
      >
        <Container>
          <Link href={page.backHref} className="article-content__back">
            ← Back to {page.backLabel}
          </Link>
          <div className="article-content__body">
            {page.blocks.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={`heading-${index}`}
                    className="article-content__heading"
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "image") {
                return (
                  <figure
                    key={`image-${block.src}-${index}`}
                    className="article-content__figure"
                  >
                    <Image
                      src={block.src}
                      alt={block.alt || ""}
                      width={1536}
                      height={576}
                      className="article-content__image"
                    />
                  </figure>
                );
              }

              if (block.type === "list") {
                return (
                  <ul
                    key={`list-${index}`}
                    className="article-content__list"
                  >
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }

              return (
                <p
                  key={`paragraph-${index}`}
                  className="article-content__paragraph"
                >
                  {block.text}
                </p>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
