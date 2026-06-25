import type { Metadata } from "next";
import OfferingsSection from "@/components/home/OfferingsSection";
import AboutIntroSection from "@/components/home/AboutIntroSection";
import HeroSlider from "@/components/home/HeroSlider";
import StatsSection from "@/components/home/StatsSection";
import PartnersSection from "@/components/home/PartnersSection";
import ServicesSection from "@/components/home/ServicesSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import ClientLogosSection from "@/components/home/ClientLogosSection";
import NewsBlogsSection from "@/components/home/NewsBlogsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactStrip from "@/components/home/ContactStrip";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = buildPageMetadata({
  title: `${siteConfig.name} – ${siteConfig.tagline}`,
  description:
    "Our network breaches global borders, with hundreds of dedicated personnel working at the forefront of the latest emergent technologies.",
  canonical: "/",
});

export default function HomePage() {
  return (
    <>
      <h1 className="sr-only">{siteConfig.name} – {siteConfig.tagline}</h1>
      <HeroSlider />
      <OfferingsSection />
      <AboutIntroSection />
      <StatsSection />
      <PartnersSection />
      <ServicesSection />
      <CaseStudiesSection />
      <ClientLogosSection />
      <NewsBlogsSection />
      <TestimonialsSection />
      <ContactStrip />
    </>
  );
}
