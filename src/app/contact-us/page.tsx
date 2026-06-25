import PageHero from "@/components/templates/PageHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactLocationsSection from "@/components/contact/ContactLocationsSection";
import ContactMapSection from "@/components/contact/ContactMapSection";
import { buildPageMetadata } from "@/lib/metadata";
import { contactHero, contactPageMeta } from "@/content/contact";

export const metadata = buildPageMetadata({
  title: contactPageMeta.title,
  description: contactPageMeta.description,
  canonical: "/contact-us/",
});

export default function ContactUsPage() {
  return (
    <>
      <PageHero title={contactHero.title} backgroundImage={contactHero.backgroundImage} />
      <ContactFormSection />
      <ContactLocationsSection />
      <ContactMapSection />
    </>
  );
}
