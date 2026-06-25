export const partnersPageMeta = {
  title: "Partners – AVOWS Technologies",
  description:
    "Explore the collaborative power of our extensive network of System Integration Partners, working hand in hand to deliver cutting-edge solutions and ensure seamless integration for enhanced efficiency and innovation.",
} as const;

export const partnersHero = {
  title: "Our Partners",
  backgroundImage: "/assets/images/2023/11/partner-page.png",
} as const;

export const partnersIntro = {
  title: "Partner with us for success!",
  paragraphs: [
    "Explore the collaborative power of our extensive network of System Integration Partners, working hand in hand to deliver cutting-edge solutions and ensure seamless integration for enhanced efficiency and innovation.",
    "We extend an invitation to join our network of collaborators as a valued partner. Join us in shaping innovative solutions and fostering a mutually beneficial relationship.",
  ],
  cta: { text: "Let's get connected", href: "#partner" },
  image: "/assets/images/partser-body1-5.png",
} as const;

export const partnersWhy = {
  watermark: "Partner",
  title: "Why Parter with AVOWS?",
  text: "Partner with us for access to cutting-edge solutions, collaborative innovation, and a shared commitment to success. Together, we unlock opportunities for growth, harness the power of creativity, and build a future of mutual prosperity. Join us in shaping the next level of excellence in partnership.",
  cta: { text: "Learn More", href: "#partner" },
  stats: [
    { label: "Experience", value: 18, suffix: "", icon: "fa-award" },
    { label: "Expert Recruiters", value: 70, suffix: "+", icon: "fa-users" },
    { label: "Companies", value: 200, suffix: "+", icon: "fa-building" },
  ],
} as const;

export const siPartnerLogos = [
  "a-k-5.png",
  "1-8-5.png",
  "2-7-5.png",
  "3-4-5.png",
  "4-4-5.png",
  "5-4-5.png",
  "7-4-5.png",
  "clie6-5.png",
  "clie5-5.png",
  "clie4-5.png",
  "clie3-5.png",
  "clie2-5.png",
  "clie1-5.png",
].map((file) => `/assets/images/${file}`);

export const partnerFormSection = {
  id: "partner",
  title: "Partner with Us",
  image: "/assets/images/partner-form1-5.png",
  fields: [
    { name: "company", label: "Company Name", type: "text", placeholder: "Company Name..." },
    { name: "name", label: "Contact Person", type: "text", placeholder: "Contact Person..." },
    { name: "email", label: "Email", type: "email", placeholder: "Email..." },
    { name: "phone", label: "Phone", type: "tel", placeholder: "Phone..." },
    { name: "message", label: "Message", type: "textarea", placeholder: "Message..." },
  ],
  submitLabel: "Submit",
} as const;
