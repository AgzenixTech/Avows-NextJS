export const siteConfig = {
  name: "AVOWS Technologies",
  tagline: "Vision into Reality",
  url: "https://avowstech.com",
  logo: {
    header: "/assets/images/AVOWS-PNG_1-qhtkbgvtf0oy9x8qldaod607ypiz297grfe65k61us-5.png",
    footer: "/assets/images/AVOWS-PNG_3-2-qhtkg4737j1zoihpgdm9ozs9pamb4dnoqfilkt9z38-5.png",
  },
  contact: {
    phone: "+603 2712 3456",
    email: "info@avowstech.com",
  },
  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/group-avows/",
      icon: "linkedin",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/avowsgroup/",
      icon: "instagram",
    },
  ],
} as const;

export const mainNav = [
  { href: "/about-us/", label: "About Us" },
  { href: "/services/", label: "Our Services" },
  { href: "/partners/", label: "Partners" },
  {
    label: "Resources",
    children: [
      { href: "/case-study/", label: "Case Study" },
      { href: "/blogs/", label: "Blogs" },
      { href: "/news-announcements/", label: "News & Announcements" },
    ],
  },
  { href: "/contact-us/", label: "Contact Us" },
  { href: "/career/", label: "Career" },
] as const;

export const footerServices = [
  { href: "/agentic-ai/", label: "Agentic AI" },
  { href: "/digital-application-solutions/", label: "Digital Application Solutions" },
  { href: "/quality-assurance/", label: "Quality Assurance" },
  {
    href: "/data-analytics-business-intelligence/",
    label: "Data Analytics & Business Intelligence",
  },
  { href: "/ai-automation-rpa/", label: "Automation & RPA" },
  { href: "/cyber-security/", label: "Cyber Security" },
] as const;

export const footerQuickLinks = [
  { href: "/technology-talent-solutions/", label: "Technology Talent Solutions" },
  { href: "/project-based-software-development/", label: "Software Development" },
  { href: "/managed-capacity/", label: "Managed Capacity" },
  { href: "/managed-services/", label: "Managed Services" },
  { href: "/about-us/", label: "About Us" },
  { href: "/partners/", label: "Partners" },
  { href: "/case-study/", label: "Case Study" },
  { href: "/blogs/", label: "Blogs" },
  { href: "/news-announcements/", label: "News & Announcements" },
  { href: "/career/", label: "Career" },
  { href: "/privacy-policy/", label: "Privacy Policy" },
] as const;

export const footerLocations = [
  { href: "/contact-us/#malaysia", label: "Malaysia" },
  { href: "/contact-us/#indonesia", label: "Indonesia" },
  { href: "/contact-us/#singapore", label: "Singapore" },
  { href: "/contact-us/#usa", label: "US" },
  { href: "/contact-us/#india", label: "India" },
] as const;
