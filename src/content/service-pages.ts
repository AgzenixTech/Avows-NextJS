const defaultDescription =
  "AVOWS Technologies delivers IT consulting, digital solutions, quality engineering, and managed services for enterprises worldwide.";

type ServiceBlock = {
  headline?: string;
  subtitle?: string;
  body: string;
};

type CaseStudyCard = {
  title: string;
  href: string;
  image: string;
  excerpt?: string;
};

const standardCta = (subtitle: string) => ({
  line1: "Ready to Boost Your Business's Productivity?",
  line2: subtitle,
  backgroundImage: "/assets/images/2023/10/productive-business-03.jpg",
  button: { text: "Contact Us", href: "/contact-us/" },
});

export const servicePages = [
  {
    slug: "agentic-ai",
    variant: "agentic" as const,
    meta: {
      title: "Agentic AI for the Enterprise – AVOWS Technologies",
      description:
        "The enterprise is going agentic. Avows and Akka deliver advisory, platform implementation, integration, and managed support for mission-critical agentic AI infrastructure across APAC.",
      canonical: "/agentic-ai/",
    },
    heroTitle: "The Enterprise Is Going Agentic.\nIs Your Infrastructure Ready?",
    backgroundImage: "/assets/images/2026/05/ai-bg.jpg",
    heroCta: { text: "Talk to Our Team", href: "/contact-us/" },
    sections: {
      introImage: "/assets/images/agentic-ai-5.jpg",
      whyNow: {
        eyebrow: "WHY NOW",
        subtitle: "From Automation to Autonomy",
        paragraphs: [
          "The conversation has moved on. Enterprises across financial services, healthcare, and logistics are no longer asking whether to adopt AI — they're asking how to build AI systems that actually work under real-world conditions.",
          "The difference between a proof-of-concept and a mission-critical agentic system is significant. Pilots run in sandboxes. Real infrastructure runs in production — processing millions of events per second, making real-time decisions, and recovering from failure without human intervention. This is the frontier Avows and Akka are built for.",
        ],
      },
      partner: {
        eyebrow: "OUR STRATEGIC PLATFORM PARTNER",
        subtitle: "Built on Akka — The Platform Behind the World's Most Demanding Systems",
        body: "Akka is the platform of choice for organisations where performance, reliability and resilience are non-negotiable. Originally built as the open-source foundation for distributed systems, Akka's enterprise platform is now trusted by global financial institutions, insurers and technology leaders to power infrastructure that cannot afford to fail. Avows is Akka's regional implementation and go-to-market partner across Malaysia, Singapore, India and Indonesia — bringing together Akka's platform depth with Avows's APAC market presence, delivery capability and enterprise relationships.",
        checklist: [
          "Backed by Greylock, Bain Capital Ventures and Intel Capital",
          "Trusted by global Tier 1 financial institutions",
          "Purpose-built for high-throughput, mission-critical infrastructure",
          "APAC expansion — Singapore, Malaysia, India and Indonesia",
        ],
      },
      delivers: {
        title: "What Avows × Akka Delivers",
        subtitle: "From Strategy to Live Infrastructure",
        items: [
          {
            title: "Advisory & Architecture",
            body: "We work with your leadership and engineering teams to assess readiness, define the use case and design the agentic infrastructure that fits your business.",
          },
          {
            title: "Platform Implementation",
            body: "Our certified technical team deploys and configures the Akka platform within your environment — on-premise, cloud or hybrid.",
          },
          {
            title: "Integration & Migration",
            body: "We connect Akka to your existing systems and data infrastructure, and manage the transition from legacy architecture without taking mission-critical systems offline.",
          },
          {
            title: "Managed Support & Optimisation",
            body: "Ongoing monitoring, performance tuning and support — backed by Avows's regional delivery capability across APAC.",
          },
        ],
      },
      leadersEyebrow: "BUILT FOR LEADERS IN",
      industries: {
        title: "Industries",
        text: "Banking & Financial Services, Insurance & Wealth Management, Healthcare & Life Sciences, Retail & Ecommerce, Manufacturing & Logistics",
      },
      roles: {
        title: "Roles",
        text: "Chief Technology Officers, Chief Information Officers, Chief Digital Officers, Head of Engineering, Head of Digital Transformation",
      },
    },
    cta: {
      title: "Ready to See What Agentic Infrastructure Looks Like in Your Environment?",
      body: "Talk to our team. We'll walk you through what Akka can do for your organisation and whether the fit is right — no obligation, no slide deck.",
      backgroundImage: "/assets/images/2023/10/productive-business-03.jpg",
      button: { text: "Get in Touch", href: "/contact-us/" },
    },
  },
  {
    slug: "digital-application-solutions",
    meta: {
      title: "Digital Application Solutions – AVOWS Technologies",
      description:
        "Seamlessly bring your business to users' fingertips with AVOWS digital application solutions for mobile, web, and enterprise applications.",
      canonical: "/digital-application-solutions/",
    },
    heroTitle: "Digital Application Solutions",
    backgroundImage: "/assets/images/2023/11/app-head.png",
    images: [
      "/assets/images/2023/11/app1.png",
      "/assets/images/2023/11/app2.png",
      "/assets/images/2023/11/323-275x300.png",
    ],
    blocks: [
      {
        headline: "Revolutionizing Digital Futures",
        subtitle: "Seamless Mobility, Unmatched Engagement",
        body: "Embark on a transformative journey with our Mobile Application Development, seamlessly bringing your business to users' fingertips for engaging and seamless experiences",
      },
      {
        subtitle: "Dynamic Online Presence, Future-Ready Efficiency",
        body: "Elevate your online presence with our dynamic Web & CMS solutions. Embrace the future with Native and Hybrid Platforms powered by microservices, guaranteeing unmatched scalability and efficiency. Our proficiency in Full Stack Development and ERP - SAP integration ensures optimized business processes for enhanced efficiency.",
      },
    ] satisfies ServiceBlock[],
    caseStudies: [
      {
        title: "Self Care Mobile App Development",
        href: "/self-care-mobile-app-for-large-telcom-service-provider/",
        image: "/assets/images/Self-Care-Mobile-App-Development\u200b-300x300-5.png",
        excerpt:
          "Download Case Study for Self Care Mobile App Development Digital Application Solution Self…",
      },
      {
        title: "Road Asset Management & Maintenance System",
        href: "/road-asset-management-maintenance-system/",
        image: "/assets/images/Road-Asset-Management-Maintenance-System-300x300-5.png",
        excerpt:
          "Case Study for Road Asset Management & Maintenance System Digital Application Solution Road…",
      },
    ] satisfies CaseStudyCard[],
    cta: standardCta("Digital Application Solutions for your industry"),
  },
  {
    slug: "quality-assurance",
    meta: {
      title: "Quality Assurance – AVOWS Technologies",
      description:
        "Elevate your digital products with AVOWS quality assurance services including functional, automation, performance, and regression testing.",
      canonical: "/quality-assurance/",
    },
    heroTitle: "Quality Assurance",
    backgroundImage: "/assets/images/2023/11/qa-header.png",
    images: [
      "/assets/images/2023/11/qa1.png",
      "/assets/images/2023/11/QA2.png",
      "/assets/images/2023/11/qa3-275x300.png",
    ],
    blocks: [
      {
        headline: "Elevate Your Digital Products with Our Quality Assurance Services",
        subtitle: "Precision in Every Feature: Functional Testing",
        body: "We demonstrate our commitment to excellence through our Functional Testing, where each feature undergoes meticulous validation. This process ensures precision and reliability in every aspect of your digital products, guaranteeing top-notch quality.",
      },
      {
        subtitle: "Seamless User Experiences",
        body: "Enhance user satisfaction with our comprehensive suite, featuring Automation Testing for efficiency, Performance Testing for seamless experiences, Regression Testing for safeguarding functionalities, and Smoke Testing for a stable foundation. We assure that your digital products meet the highest standards, ensuring a flawless user experience.",
      },
    ] satisfies ServiceBlock[],
    cta: standardCta("Quality Assurance services for your industry"),
  },
  {
    slug: "data-analytics-business-intelligence",
    meta: {
      title: "Data Analytics & Business Intelligence – AVOWS Technologies",
      description:
        "Harness the potential of your data with AVOWS data analytics and business intelligence services, from data warehousing to executive dashboards.",
      canonical: "/data-analytics-business-intelligence/",
    },
    heroTitle: "Data Analytics & Business Intelligence",
    backgroundImage: "/assets/images/2023/11/DA-head.png",
    images: [
      "/assets/images/2023/11/da1.png",
      "/assets/images/2023/11/da2.png",
      "/assets/images/2023/11/da3-275x300.png",
    ],
    blocks: [
      {
        headline: "Harness the Potential of Our Data Analytics & Business Intelligence Services",
        subtitle: "Establishing a Robust Data Warehouse",
        body: "Unleash the potential of your data with our foundational Data Warehouse services, offering a robust structure for insightful analysis and informed decision-making.",
      },
      {
        subtitle: "Dynamic Insights, Unified Perspectives: Visualization & Integration",
        body: "Transform data into actionable insights with dynamic Visualization and reporting. Ensure data accuracy through meticulous Data Cleansing and Migration, and seamlessly integrate platforms for a unified and comprehensive business view.",
      },
    ] satisfies ServiceBlock[],
    caseStudies: [
      {
        title: "BI Dashboard Development – SAP BW",
        href: "/bi-dashboard-development-sap-bw/",
        image: "/assets/images/BI-Dashboard-Development-\u2013-SAP-BW\u200b-300x300-5.png",
        excerpt: "Download Case Study for BI Dashboard Development – SAP BW Data Analytics &…",
      },
      {
        title: "Dashboard Analytics – Sales & Distribution",
        href: "/dashboard-analytics-sales-distribution/",
        image: "/assets/images/Dashboard-Analytics-\u2013-Sales-Distribution\u200b-300x300-5.png",
        excerpt: "Download Case Study for Dashboard Analytics – Sales & Distribution Data Analytics &…",
      },
      {
        title: "Accelerating Supply Chain using Data Science",
        href: "/accelerating-supply-chain-using-data-science/",
        image: "/assets/images/Accelerating-Supply-Chain-using-Data-Science\u200b-300x300-5.png",
        excerpt: "Download Case Study for Accelerating Supply Chain using Data Science Data Analytics &…",
      },
    ] satisfies CaseStudyCard[],
    cta: standardCta("Data Analytics & Business Intelligence services for your industry"),
  },
  {
    slug: "ai-automation-rpa",
    meta: {
      title: "Automation & RPA – AVOWS Technologies",
      description:
        "Unlock the potential of AI, automation, and RPA with AVOWS architecture advisory and end-to-end intelligent automation delivery.",
      canonical: "/ai-automation-rpa/",
    },
    heroTitle: "Automation & RPA",
    backgroundImage: "/assets/images/2023/11/services-AUTOMATION.jpg",
    images: [
      "/assets/images/2023/11/ai11.png",
      "/assets/images/2023/11/ai22.png",
      "/assets/images/2023/11/ai33-275x300.png",
    ],
    blocks: [
      {
        headline: "Empower Your Business",
        subtitle: "Architecture Advisory for Business Empowerment",
        body: "Unlock the potential of AI, Automation & RPA with strategic guidance through our Architecture Advisory services, tailoring solutions to empower your business for the future.",
      },
      {
        subtitle: "Multilingual Power, Advanced Automation",
        body: "Leverage Multilingual & NLP Capabilities for cutting-edge automation, propelling your business into the future. Identify the right tools through our Product/Tool Evaluation, ensuring innovative solutions that enhance your business efficiency.",
      },
    ] satisfies ServiceBlock[],
    cta: standardCta("AI, Automation & RPA services for your industry"),
  },
  {
    slug: "cyber-security",
    meta: {
      title: "Cyber Security – AVOWS Technologies",
      description:
        "Fortify your digital assets with AVOWS cyber security services including forensics, consulting, vulnerability assessment, and penetration testing.",
      canonical: "/cyber-security/",
    },
    heroTitle: "Cyber Security",
    backgroundImage: "/assets/images/2023/11/services-CYBER-S.jpg",
    images: [
      "/assets/images/2023/11/cyber1.png",
      "/assets/images/2023/11/cyber2.png",
      "/assets/images/2023/11/cyber3-275x300.png",
    ],
    blocks: [
      {
        headline: "Fortify Your Digital Fort",
        subtitle: "Investigate and Defend",
        body: "From Cyber Forensics for incident response to expert Security Consulting for proactive protection, we investigate, strategize, and fortify your digital assets against evolving threats",
      },
      {
        subtitle: "Robust Defense Strategies",
        body: "Mitigate potential threats with our Vulnerability Assessment, fortify defenses with Penetration Testing, and secure user devices with End Point Threat Protection. Trust us to ensure your digital presence stands resilient against the ever-evolving landscape of cyber threats.",
      },
    ] satisfies ServiceBlock[],
    caseStudies: [
      {
        title: "Anti Money Laundering",
        href: "/anti-money-laundering-solution-for-bfsi-industry-leader/",
        image: "/assets/images/Anti-Money-Laundering.png",
        excerpt:
          "Download Case Study for Anti Money Laundering Cybersecurity Anti Money Laundering",
      },
    ] satisfies CaseStudyCard[],
    cta: standardCta("Cyber Security services for your industry"),
  },
  {
    slug: "technology-talent-solutions",
    meta: {
      title: "Technology Talent Solutions – AVOWS Technologies",
      description:
        "Scale your technology teams with AVOWS talent solutions including contract staffing, permanent placements, and offshore delivery.",
      canonical: "/technology-talent-solutions/",
    },
    heroTitle: "Technology Talent Solutions",
    backgroundImage: "/assets/images/2023/11/Staff-Augmentation.png",
    images: [
      "/assets/images/2023/11/Staff-Augmentation-Body-Top-image.png",
      "/assets/images/2023/11/Staff-Augmentation-body-left-image.png",
      "/assets/images/2023/11/Staff-Augmentation-body-right-image-275x300.png",
    ],
    blocks: [
      {
        headline: "Unlock Business Potential with Flexible Resource Agility",
        body: "Discover the power of Avows Talent Integration—a solution designed for businesses seeking agility and expertise. Seamlessly integrate skilled professionals into your projects, adapting to the ebb and flow of your unique demands. Elevate your team's capabilities and achieve success on your terms.",
      },
      {
        subtitle: "Tailored Solutions for Dynamic Needs",
        body: "Avows understands the fluid nature of modern business. Our flexible resource solutions empower you to scale your workforce swiftly, ensuring that you have the right talent precisely when you need it. Drive your projects forward with a dynamic team that aligns with your goals",
      },
      {
        subtitle: "Tap into Top Talent for Project Success",
        body: "Connect with top-tier talent across diverse domains. Avows' streamlined process ensures you receive skilled professionals tailored to your project's nuances. Supercharge your team, meet deadlines, and surpass milestones with Avows Resource Agility—your gateway to a more agile, capable workforce.",
      },
    ] satisfies ServiceBlock[],
    cta: standardCta("Technology Talent Solutions for your industry"),
  },
  {
    slug: "project-based-software-development",
    meta: {
      title: "Project-Based Software Development – AVOWS Technologies",
      description:
        "Transform business needs into technology solutions with AVOWS project-based software development and strategic delivery expertise.",
      canonical: "/project-based-software-development/",
    },
    heroTitle: "Project-Based Software Development",
    backgroundImage: "/assets/images/2023/11/Managed-Services-header.png",
    images: [
      "/assets/images/2023/11/Managed-Services-body-top-image.png",
      "/assets/images/2023/11/Managed-Services-body-left-image.png",
      "/assets/images/2023/11/Managed-Services-Body-right-image-275x300.png",
    ],
    blocks: [
      {
        headline: "Strategic Project-Based Software Development",
        body: "Embark on a journey of innovation and efficiency with Avows' Project-Based Software Development. We don't just write code; we craft solutions that bring your ideas to life. Our team of experts is here to understand your unique needs and deliver tailored software that aligns with your vision.",
      },
      {
        subtitle: "Crafting Solutions for Your Unique Vision",
        body: "At Avows, we're not just developers; we're partners in your success. Our project-based approach ensures that your software development needs are met with care and precision. Work closely with our team to shape projects that not only meet requirements but exceed expectations.",
      },
      {
        subtitle: "Driven by Excellence, Defined by Results",
        body: "From brainstorming to deployment, Avows is committed to excellence at every step. We blend technical expertise with a human touch, ensuring your projects not only meet industry standards but also resonate with the people who matter most—your users. Let's build something remarkable together.",
      },
    ] satisfies ServiceBlock[],
    cta: standardCta("Project-Based Software Development services for your industry"),
  },
  {
    slug: "managed-capacity",
    meta: {
      title: "Managed Capacity – AVOWS Technologies",
      description:
        "Access dedicated technology teams with AVOWS managed capacity models for scalable, predictable software delivery.",
      canonical: "/managed-capacity/",
    },
    heroTitle: "Managed Capacity",
    backgroundImage: "/assets/images/2023/11/Managed-Capacity-Header.png",
    images: [
      "/assets/images/2023/11/Managed-Capacity-Body-top-image.png",
      "/assets/images/2023/11/Managed-Capacity-body-right-image.png",
      "/assets/images/2023/11/Managed-Capacity-Body-left-image-275x300.png",
    ],
    blocks: [
      {
        headline: "Scalable Solutions for Business Growth",
        body: "Explore Avows Managed Capacity Solutions for scalable IT infrastructure, supporting your business growth. Our tailored solutions ensure scalability, providing you with a competitive advantage in the dynamic market landscape.",
      },
      {
        subtitle: "Optimised Performance, Enhanced Efficiency",
        body: "Avows prioritizes peak efficiency in your IT ecosystem. Our team fine-tunes your infrastructure for maximum performance, resulting in improved responsiveness, reduced latency, and overall operational efficiency. Trust Avows for an IT setup that meets business and user expectations.",
      },
      {
        subtitle: "Smart Capacity Management, Cost-Efficient Results",
        body: "Partner with Avows for cost-efficient IT operations. Our Managed Capacity Solutions eliminate unnecessary costs through precise resource allocation. We optimize your IT infrastructure, aligning investments with strategic business outcomes for sustainable growth. Unlock efficiency with Avows.",
      },
    ] satisfies ServiceBlock[],
    cta: standardCta("Managed Capacity services for your industry"),
  },
  {
    slug: "managed-services",
    meta: {
      title: "Managed Services – AVOWS Technologies",
      description:
        "Ensure seamless IT operations with AVOWS managed services backed by proactive monitoring, support, and service level agreements.",
      canonical: "/managed-services/",
    },
    heroTitle: "Managed Services",
    backgroundImage: "/assets/images/2023/11/services-MANAGED-SERV.jpg",
    images: [
      "/assets/images/2023/11/NEW-IMAGES-01.jpg",
      "/assets/images/2023/11/NEW-IMAGES-03.jpg",
      "/assets/images/2023/11/NEW-IMAGES-02-276x300.jpg",
    ],
    blocks: [
      {
        headline: "Reliable IT Management for Seamless Operations",
        body: "Discover Avows Managed Service, your trusted partner for streamlined IT operations. Our comprehensive service ensures the stability, security, and optimal performance of your IT environment, allowing you to focus on your core business functions.",
      },
      {
        subtitle: "Proactive Monitoring and Support",
        body: "Avows takes a proactive approach to IT management. We monitor your systems 24/7, swiftly identifying and addressing potential issues before they impact your operations. Our responsive support team ensures minimal downtime, providing a reliable backbone for your business.",
      },
      {
        subtitle: "Tailored Solutions for Your Unique Needs",
        body: "At Avows, we understand that every business is unique. Our Managed Service is tailored to meet your specific requirements, offering flexibility and scalability as your business evolves. Partner with Avows for a seamless and efficient IT management experience.",
      },
    ] satisfies ServiceBlock[],
    cta: standardCta("Managed Services for your industry"),
  },
] as const;
