import type { Metadata } from "next";
import ServicesHeroSection from "@/components/services/ServicesHeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ServicesCtaStrip from "@/components/services/ServicesCtaStrip";
import { servicesPageMeta } from "@/content/services";
import { buildPageMetadata } from "@/lib/metadata";
import "@/styles/services.css";

export const metadata: Metadata = buildPageMetadata({
  title: servicesPageMeta.title,
  description: servicesPageMeta.description,
  canonical: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesSection omitId className="services-section--page" />
      <ServicesCtaStrip />
    </>
  );
}
