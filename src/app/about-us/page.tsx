import type { Metadata } from "next";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import JourneySection from "@/components/about/JourneySection";
import ObjectivesSection from "@/components/about/ObjectivesSection";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import LeadershipSection from "@/components/about/LeadershipSection";
import ContactStrip from "@/components/home/ContactStrip";
import { aboutPageMeta } from "@/content/about";
import { buildPageMetadata } from "@/lib/metadata";
import "@/styles/about.css";

export const metadata: Metadata = buildPageMetadata({
  title: aboutPageMeta.title,
  description: aboutPageMeta.description,
  canonical: "/about-us/",
});

export default function AboutUsPage() {
  return (
    <>
      <AboutHeroSection />
      <JourneySection />
      <ObjectivesSection />
      <CoreValuesSection />
      <LeadershipSection />
      <ContactStrip />
    </>
  );
}
