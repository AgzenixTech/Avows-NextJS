import {
  blogsListing,
  caseStudyListing,
  newsListing,
} from "./listings";
import { articleBodies } from "./article-bodies";

type ArticleCategory = "case-study" | "blog" | "news";

type ListingItem = {
  title: string;
  href: string;
  image: string;
};

function slugFromHref(href: string): string {
  return href.replace(/^\/|\/$/g, "");
}

function backLinkFor(category: ArticleCategory) {
  if (category === "case-study") {
    return { href: "/case-study/", label: "Case Study" };
  }
  if (category === "blog") {
    return { href: "/blogs/", label: "Blogs" };
  }
  return { href: "/news-announcements/", label: "News & Announcements" };
}

function makeArticle(item: ListingItem, category: ArticleCategory) {
  const slug = slugFromHref(item.href);
  const back = backLinkFor(category);
  const body = articleBodies[slug];

  return {
    slug,
    meta: {
      title: `${item.title} – AVOWS Technologies`,
      description:
        body?.description ||
        `Read about ${item.title} from AVOWS Technologies.`,
      canonical: item.href,
    },
    category,
    heroTitle: item.title,
    heroImage: item.image,
    backHref: back.href,
    backLabel: back.label,
    blocks: body?.blocks ?? [
      {
        type: "paragraph" as const,
        text: "Content for this article is being updated.",
      },
    ],
  };
}

export const articlePages = [
  ...caseStudyListing.items.map((item) => makeArticle(item, "case-study")),
  ...blogsListing.items.map((item) => makeArticle(item, "blog")),
  ...newsListing.items.map((item) => makeArticle(item, "news")),
] as const;
