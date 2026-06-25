import PageHero from "@/components/templates/PageHero";
import ListingGrid from "@/components/templates/ListingGrid";
import { buildPageMetadata } from "@/lib/metadata";
import { blogsListing } from "@/content/listings";

export const metadata = buildPageMetadata(blogsListing.meta);

export default function BlogsPage() {
  return (
    <>
      <PageHero
        title={blogsListing.hero}
        backgroundImage={blogsListing.heroBackground}
      />
      <ListingGrid subtitle={blogsListing.subtitle} items={blogsListing.items} />
    </>
  );
}
