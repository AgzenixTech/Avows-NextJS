import CareerApplyFormSection from "@/components/career/CareerApplyFormSection";
import CareerDreamsSection from "@/components/career/CareerDreamsSection";
import CareerHeroSection from "@/components/career/CareerHeroSection";
import CareerIntroSection from "@/components/career/CareerIntroSection";
import CareerJobsSection from "@/components/career/CareerJobsSection";
import CareerOpportunitiesSection from "@/components/career/CareerOpportunitiesSection";
import CareerTestimonialsSection from "@/components/career/CareerTestimonialsSection";
import CareerValuesSection from "@/components/career/CareerValuesSection";
import { buildPageMetadata } from "@/lib/metadata";
import { careerPageMeta } from "@/content/career";

export const metadata = buildPageMetadata({
  title: careerPageMeta.title,
  description: careerPageMeta.description,
  canonical: "/career/",
});

export default function CareerPage() {
  return (
    <>
      <CareerHeroSection />
      <CareerValuesSection />
      <CareerIntroSection />
      <CareerJobsSection />
      <CareerDreamsSection />
      <CareerTestimonialsSection />
      <CareerOpportunitiesSection />
      <CareerApplyFormSection />
    </>
  );
}
