import type { Metadata } from "next";
import PartnersHeroSection from "@/components/partners/PartnersHeroSection";
import PartnersIntroSection from "@/components/partners/PartnersIntroSection";
import PartnersWhySection from "@/components/partners/PartnersWhySection";
import SiPartnersSection from "@/components/partners/SiPartnersSection";
import PartnerFormSection from "@/components/partners/PartnerFormSection";
import ContactStrip from "@/components/home/ContactStrip";
import { partnersPageMeta } from "@/content/partners";
import { buildPageMetadata } from "@/lib/metadata";
import "@/styles/partners.css";

export const metadata: Metadata = buildPageMetadata({
  title: partnersPageMeta.title,
  description: partnersPageMeta.description,
  canonical: "/partners/",
});

export default function PartnersPage() {
  return (
    <>
      <PartnersHeroSection />
      <PartnersIntroSection />
      <PartnersWhySection />
      <SiPartnersSection />
      <PartnerFormSection />
      <ContactStrip />
    </>
  );
}
