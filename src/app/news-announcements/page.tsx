import PageHero from "@/components/templates/PageHero";
import ListingGrid from "@/components/templates/ListingGrid";
import { buildPageMetadata } from "@/lib/metadata";
import { newsListing } from "@/content/listings";

export const metadata = buildPageMetadata(newsListing.meta);

export default function NewsAnnouncementsPage() {
  return (
    <>
      <PageHero
        title={newsListing.hero}
        backgroundImage={newsListing.heroBackground}
      />
      <ListingGrid subtitle={newsListing.subtitle} items={newsListing.items} />
    </>
  );
}
