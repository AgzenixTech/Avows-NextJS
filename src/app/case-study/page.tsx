import PageHero from "@/components/templates/PageHero";
import ListingGrid from "@/components/templates/ListingGrid";
import { buildPageMetadata } from "@/lib/metadata";
import { caseStudyListing } from "@/content/listings";

export const metadata = buildPageMetadata(caseStudyListing.meta);

export default function CaseStudyPage() {
  return (
    <>
      <PageHero title={caseStudyListing.hero} backgroundImage={caseStudyListing.heroBackground} />
      <ListingGrid items={caseStudyListing.items} />
    </>
  );
}
