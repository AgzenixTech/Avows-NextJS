import { notFound } from "next/navigation";
import ArticlePageLayout from "@/components/templates/ArticlePageLayout";
import ServicePageLayout from "@/components/templates/ServicePageLayout";
import { buildPageMetadata } from "@/lib/metadata";
import { getAllDynamicSlugs, getDynamicPage } from "@/lib/pages/registry";

type SlugPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllDynamicSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: SlugPageProps) {
  const { slug } = await params;
  const page = getDynamicPage(slug);

  if (!page) {
    return {};
  }

  return buildPageMetadata(page.meta);
}

export default async function DynamicSlugPage({ params }: SlugPageProps) {
  const { slug } = await params;
  const page = getDynamicPage(slug);

  if (!page) {
    notFound();
  }

  if (page.type === "service") {
    return <ServicePageLayout page={page} />;
  }

  return <ArticlePageLayout page={page} />;
}
