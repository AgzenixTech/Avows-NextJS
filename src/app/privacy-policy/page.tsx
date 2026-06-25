import PrivacyContent from "@/components/privacy/PrivacyContent";
import { buildPageMetadata } from "@/lib/metadata";
import { privacyPageMeta } from "@/content/privacy";

export const metadata = buildPageMetadata({
  title: privacyPageMeta.title,
  description: privacyPageMeta.description,
  canonical: "/privacy-policy/",
});

export default function PrivacyPolicyPage() {
  return <PrivacyContent />;
}
