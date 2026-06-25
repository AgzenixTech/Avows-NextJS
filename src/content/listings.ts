export const caseStudyListing = {
  meta: {
    title: "Case Study – AVOWS Technologies",
    description:
      "Explore AVOWS Technologies case studies showcasing enterprise IT solutions, quality engineering, and digital transformation outcomes.",
    canonical: "/case-study/",
  },
  hero: "Case Study",
  heroBackground: "/assets/images/2023/11/Case-study-page.png",
  items: [
    {
      title: "Implementation QA Tools Tricentis Tosca and qTest",
      href: "/implementation-qa-tools-tricentis-tosca-and-qtest/",
      image: "/assets/images/cas1-5.jpg",
    },
    {
      title: "Optimizing Mobile & API Testing: A Katalon & LambdaTest Success Story",
      href: "/optimizing-mobile-api-testing-a-katalon-lambdatest-success-story/",
      image: "/assets/images/cas2-5.jpg",
    },
    {
      title: "Self-Care Mobile App for Large Telcom Service Provider",
      href: "/self-care-mobile-app-for-large-telcom-service-provider/",
      image: "/assets/images/cas3-5.jpg",
    },
    {
      title: "Work Order Management System for Leading REIT",
      href: "/work-order-management-system-for-leading-reit/",
      image: "/assets/images/cas4-5.jpg",
    },
    {
      title: "OCR/ICR Technologies for Document Management",
      href: "/ocr-icr-technologies-for-document-management/",
      image: "/assets/images/cas5-5.jpg",
    },
    {
      title: "Anti Money Laundering Solution for BFSI Industry Leader",
      href: "/anti-money-laundering-solution-for-bfsi-industry-leader/",
      image: "/assets/images/cas6-5.jpg",
    },
    {
      title: "'Self Service' Business Intelligence Dashboard",
      href: "/self-service-business-intelligence-dashboard/",
      image: "/assets/images/cas7-5.jpg",
    },
  ],
} as const;

export const blogsListing = {
  meta: {
    title: "Blogs – AVOWS Technologies",
    description:
      "Read AVOWS Technologies blogs on IT consulting, cybersecurity, productivity, emerging technologies, and digital transformation.",
    canonical: "/blogs/",
  },
  hero: "Our Blogs",
  subtitle: "Avows Blogs",
  heroBackground: "/assets/images/2023/11/Blog-page-banner-extra.png",
  items: [
    {
      title: "Cybersecurity Essentials for Small and Medium-Sized Businesses",
      href: "/cybersecurity-essentials-for-small-and-medium-sized-businesses/",
      image: "/assets/images/2-8-1024x683-5.png",
    },
    {
      title: "Maximizing Efficiency: The Power of IT Consulting in Boosting Productivity",
      href: "/maximizing-efficiency-the-power-of-it-consulting-in-boosting-productivity/",
      image: "/assets/images/4-3-1024x683-5.png",
    },
    {
      title: "Choosing the Right IT Consulting Partner for Your Business",
      href: "/choosing-the-right-it-consulting-partner-for-your-business/",
      image: "/assets/images/3-6-1024x683-5.png",
    },
    {
      title: "The Importance of IT Consulting in Todays Business Landscape",
      href: "/the-importance-of-it-consulting-in-todays-business-landscape/",
      image: "/assets/images/1-9-1024x683-5.png",
    },
    {
      title: "The Future of IT: Emerging Technologies in Malaysia",
      href: "/the-future-of-it-emerging-technologies-in-malaysia/",
      image: "/assets/images/featured-image-new-1024x683-5.png",
    },
  ],
} as const;

export const newsListing = {
  meta: {
    title: "News & Announcements – AVOWS Technologies",
    description:
      "Stay up to date with AVOWS Technologies news, awards, partnerships, and announcements from across APAC.",
    canonical: "/news-announcements/",
  },
  hero: "News & Announcements",
  subtitle: "Latest Announcements and Releases from Avows",
  heroBackground: "/assets/images/2023/11/Blog-page-banner-extra.png",
  items: [
    {
      title: "Avows Technologies Nominated for Prestigious GBS ASEAN Award 2025 in IT Services",
      href: "/avows-technologies-nominated-for-prestigious-gbs-asean-award-2025-in-it-services/",
      image: "/assets/images/sw22-5.jpg",
    },
    {
      title: "Unlocking Autonomy: Avows Technologies and Akka.io Host Exclusive Executive Dinner on Agentic AI",
      href: "/unlocking-autonomy-avows-technologies-and-akka-io-host-exclusive-executive-dinner-on-agentic-ai/",
      image: "/assets/images/sw10-5.jpg",
    },
    {
      title:
        "Advancing Digital Horizons: Avows Technologies and akaBot Forge Strategic Partnership to Pioneer Intelligent Automation",
      href: "/advancing-digital-horizons-avows-technologies-and-akabot-forge-strategic-partnership-to-pioneer-intelligent-automation/",
      image: "/assets/images/sw9-5.jpg",
    },
    {
      title:
        "Scaling AI-Powered Quality Engineering: Avows Technologies Joins the Tricentis APAC Partner Kickoff 2025 in Bangkok",
      href: "/scaling-ai-powered-quality-engineering-avows-technologies-joins-the-tricentis-apac-partner-kickoff-2025-in-bangkok/",
      image: "/assets/images/sw8-1-5.jpg",
    },
    {
      title: "Avows Recognized For Operational Excellence In IT",
      href: "/avows-operational-excellence-in-it/",
      image: "/assets/images/4-1024x683-5.png",
    },
    {
      title: "Tech Connect 2020: Business Simplified By Technology",
      href: "/avows-tech-connect-2020/",
      image: "/assets/images/3-1024x683-5.png",
    },
    {
      title: "Algo League – The Next Generation Coding Contest",
      href: "/algo-league-contest/",
      image: "/assets/images/2-1024x683-5.png",
    },
    {
      title: "Avows Wins Operational Excellence In IT",
      href: "/avows-gbs-awards-2019/",
      image: "/assets/images/blog00_thumbnail-8c2e5dcdd6d1880db19c3991a7e41a8e-1024x681-5.jpeg",
    },
  ],
} as const;

export type ListingConfig =
  | typeof caseStudyListing
  | typeof blogsListing
  | typeof newsListing;
