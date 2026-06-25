import { blogsListing, newsListing } from "./listings";

export const heroSlides = [
  {
    image: "/assets/images/hero1-1024x495-5.png",
    label: "IT Solutions",
    title: "Tailored to Your Success",
    subtitle: "Unlock your business's full potential with our IT services",
    cta: { text: "All Solutions", href: "/#services" },
  },
  {
    image: "/assets/images/hero2-1024x495-5.png",
    label: "Managed Services",
    title: "Engaged with Confidence",
    subtitle:
      "Guarantee application excellence through strategic outsourcing and robust SLAs.",
    cta: { text: "Explore Managed Services", href: "/managed-services/" },
  },
  {
    image: "/assets/images/hero3.2-1024x495-5.png",
    label: "Explore Real Success Stories",
    title: "Ready to elevate your business?",
    subtitle:
      "Download our case studies for actionable insights and strategies that drive success in your industry.",
    cta: { text: "Case Studies", href: "/case-study/" },
  },
] as const;

export const stats = [
  {
    icon: "/assets/images/1-7-5.png",
    label: "Countries",
    value: 5,
    suffix: "",
    duration: 500,
  },
  {
    icon: "/assets/images/Happy-Client-section-icon-04-5.png",
    label: "Happy Clients",
    value: 200,
    suffix: "+",
    duration: 2000,
  },
  {
    icon: "/assets/images/2-6-5.png",
    label: "Employees",
    value: 1000,
    suffix: "+",
    duration: 2000,
    featured: true,
  },
] as const;

export const offeringsSection = {
  items: [
    {
      title: "Technology Talent Solutions",
      href: "/technology-talent-solutions/",
      icon: "/assets/images/Untitled-design-5.png",
      description:
        "We connect enterprises with the right technology talent — from specialist contractors to permanent placements — across software engineering, cloud, data, AI and emerging technologies. Covering Malaysia, Singapore, India and Indonesia.",
      variant: "light" as const,
    },
    {
      title: "Software Development",
      href: "/project-based-software-development/",
      icon: "/assets/images/2nion-5.png",
      description:
        "Deep project management and technology proficiency to transform business needs into technology solutions with well-defined deliverables and timelines.",
      variant: "dark" as const,
    },
    {
      title: "Managed Capacity",
      href: "/managed-capacity/",
      icon: "/assets/images/Efficiency-5.png",
      description:
        "A team characterized by diversity, with assigned work hours, dedicated to meeting customer needs within specified time limits.",
      variant: "light" as const,
    },
    {
      title: "Managed Services",
      href: "/managed-services/",
      icon: "/assets/images/mang-serv-5.png",
      description:
        "Extensive outsourcing of services, typically guided by Service Level Agreements (SLAs), to guarantee the support and upkeep of applications.",
      variant: "dark" as const,
    },
  ],
} as const;

export const aboutSection = {
  id: "about-us",
  intro:
    "With over 1000 technology experts, Avows serves as a reliable partner for innovation and digital transformation. Based in Malaysia, our global footprint extends to Indonesia, UAE, Singapore, the US, and India. We specialize in technology consulting, software development, quality assurance, and professional services, demonstrating a commitment to delivering valuable solutions.",
  yearsLabel: "Over",
  yearsValue: "18",
  yearsSuffix: ["years", "experience"],
  body: "Our network breaches global borders, with hundreds of dedicated personnel working at the forefront of the latest emergent technologies, and millions of people across the world have interacted with or benefitted from the Avows difference in one way or the other.",
  cta: { text: "Click to read more", href: "/about-us/" },
  videoPoster: "/assets/images/AVOWS-Corporate-Film-FINAL-01-mp4-Google-Drive-1-5.png",
  videoSrc: "/assets/images/2023/12/AVOWS-Corporate-Film-FINAL-01.mp4",
} as const;

export const partnersSection = {
  lead: "Ready to Boost Your Business's Productivity?",
  headline: "Explore our network of System Integration Partners.",
  cta: { text: "Our Partners", href: "/partners/" },
  backgroundImage: "/assets/images/2023/10/productive-business-03.jpg",
  logos: [
    "a-k-5.png",
    "6-1-5.png",
    "7-1-5.png",
    "1-1-6.png",
    "3-1-6.png",
    "clie6-5.png",
    "4-1-6.png",
    "5-1-5.png",
    "clie2-5.png",
    "clie1-5.png",
    "clie5-5.png",
    "clie4-5.png",
    "clie3-5.png",
  ].map((file) => `/assets/images/${file}`),
} as const;

export const caseStudiesSection = {
  title: "Unlocking Success Stories: A Collection of Case Studies",
  subtitle: "Real-world Cases, Strategic Insights",
  cta: { text: "All Case Studies", href: "/case-study/" },
  backgroundImage:
    "/assets/images/2023/11/business-people-are-meeting-for-analysis-data-figu-2022-11-19-02-06-08-utc.jpg",
} as const;

export const servicesSection = {
  id: "services",
  eyebrow: "Services",
  title: "Managed IT services  for your industry",
  items: [
    {
      number: "01.",
      title: "Agentic AI",
      href: "/agentic-ai/",
      image: "/assets/images/ag-ai-5.jpg",
    },
    {
      number: "02.",
      title: "Digital Application Solutions",
      href: "/digital-application-solutions/",
      image: "/assets/images/Digital-Application-solutions-5.png",
    },
    {
      number: "03.",
      title: "Quality Assurance",
      href: "/quality-assurance/",
      image: "/assets/images/Quality-Assurance-5.png",
    },
    {
      number: "04.",
      title: "Data Analytics & Business Intelligence",
      href: "/data-analytics-business-intelligence/",
      image: "/assets/images/Data-Analytics-and-business-intelligence-5.png",
    },
    {
      number: "05.",
      title: "Automation & RPA",
      href: "/ai-automation-rpa/",
      image: "/assets/images/AI-Automation-and-RPA-5.png",
    },
    {
      number: "06.",
      title: "Cyber Security",
      href: "/cyber-security/",
      image: "/assets/images/Cyber-Security-5.png",
    },
  ],
} as const;

export const clientsSection = {
  eyebrow: "Our Prestigious Clients",
  title: "Exclusivity Redefined: Showcasing Our Esteemed Clientele",
  logoRows: [
    [
      "25-5.png",
      "1-19.png",
      "2-25.png",
      "3-18.png",
      "4-18.png",
      "5-7.png",
      "6-11.png",
      "7-12.png",
      "8-11.png",
      "9-11.png",
      "10-11.png",
      "11-5.png",
      "12-5.png",
      "13-5.png",
      "14-5.png",
      "15-5.png",
      "16-5.png",
      "17-5.png",
      "18-5.png",
      "19-5.png",
      "20-5.png",
      "21-5.png",
      "22-5.png",
      "23-5.png",
      "24-5.png",
    ],
    [
      "26-5.png",
      "27-5.png",
      "28-5.png",
      "29-5.png",
      "30-5.png",
      "31-5.png",
      "32-5.png",
      "33-5.png",
      "34-5.png",
      "35-5.png",
      "36-5.png",
      "37-5.png",
      "38-5.png",
      "39-5.png",
      "40-5.png",
      "41-5.png",
      "42-5.png",
      "43-5.png",
      "44-5.png",
      "45-5.png",
      "46-5.png",
      "47-5.png",
      "48-5.png",
      "49-5.png",
      "50-5.png",
      "51-5.png",
      "52-5.png",
      "53-5.png",
      "54-5.png",
      "55-5.png",
      "56-5.png",
      "57-5.png",
      "58-5.png",
    ],
  ].map((row) => row.map((file) => `/assets/images/${file}`)),
} as const;

export const announcementsSection = {
  eyebrow: "Announcements",
  title: "Discover What's New: Our Latest Announcements and Releases",
  cta: { text: "More News", href: "/news-announcements/" },
  items: newsListing.items.slice(0, 3).map((item, index) => ({
    title: item.title,
    href: item.href,
    image: [
      "/assets/images/sw22-768x512-5.jpg",
      "/assets/images/sw10-768x512-5.jpg",
      "/assets/images/sw9-768x512-5.jpg",
    ][index],
  })),
} as const;

export const blogsSection = {
  eyebrow: "Latest Blogs",
  title: "Stay Inspired: Check Out Our Latest Blog Entries",
  cta: { text: "More Blogs", href: "/blogs/" },
  items: blogsListing.items.slice(0, 3).map((item, index) => ({
    title: item.title,
    href: item.href,
    image: [
      "/assets/images/2-8-768x512-5.png",
      "/assets/images/4-3-768x512-5.png",
      "/assets/images/3-6-768x512-5.png",
    ][index],
  })),
} as const;

export const testimonialsSection = {
  eyebrow: "Testimonials",
  title: "What Our Customers Have to Say About Us",
  items: [
    {
      avatar: "/assets/images/u-mobile-150x150-5.png",
      avatarAlt: "UMobile",
      name: "Cynthia S",
      role: "General Manager, Transformation UMobile",
      rating: 5,
      quote: [
        "Avows has been a partner and part of our extended team for more than a year.",
        "They have been instrumental in delivering part of our Digital transformation initiative which is customer experience piece through the self care mobile app. They have a very passionate team with strong work ethics and technical expertise",
      ],
    },
  ],
} as const;

export const contactStrip = {
  id: "contact-form1",
  line1: "Don't hesitate to",
  line2: "contact us for any information.",
  phone: "+603 2712 3456",
  email: "info@avowstech.com",
  backgroundImage: "/assets/images/2023/09/parallax2.jpg",
} as const;
