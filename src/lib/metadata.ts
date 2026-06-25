import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

type PageMetaInput = {
  title: string;
  description: string;
  canonical: string;
};

export function buildPageMetadata({ title, description, canonical }: PageMetaInput): Metadata {
  const url = `${siteConfig.url}${canonical}`;

  return {
    title,
    description,
    robots: { index: true, follow: true, "max-image-preview": "large" },
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
