import { articlePages } from "@/content/articles";
import { servicePages } from "@/content/service-pages";

export type ServicePageConfig = (typeof servicePages)[number];
export type ArticlePageConfig = (typeof articlePages)[number];

export type DynamicPageConfig =
  | ({ type: "service" } & ServicePageConfig)
  | ({ type: "article" } & ArticlePageConfig);

const dynamicPages: DynamicPageConfig[] = [
  ...servicePages.map((page) => ({ type: "service" as const, ...page })),
  ...articlePages.map((page) => ({ type: "article" as const, ...page })),
];

const pageMap = new Map(dynamicPages.map((page) => [page.slug, page]));

export function getDynamicPage(slug: string): DynamicPageConfig | undefined {
  return pageMap.get(slug);
}

export function getAllDynamicSlugs(): string[] {
  return dynamicPages.map((page) => page.slug);
}
