export const servicePrimaryStats = [
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
  },
] as const;

export const serviceSecondaryStats = [
  { icon: "/assets/images/2023/09/image-5.png", label: "Happy Clients", value: 856, suffix: "+" },
  { icon: "/assets/images/2023/09/image-6.png", label: "Finished Project", value: 934, suffix: "" },
  { icon: "/assets/images/2023/09/report.png", label: "Skilled Experts", value: 534, suffix: "" },
  { icon: "/assets/images/2023/09/image-7.png", label: "Media Posts", value: 438, suffix: "" },
] as const;

export const serviceCta = {
  line1: "Ready to Boost Your Business's Productivity?",
  button: { text: "Contact Us", href: "/contact-us/" },
  backgroundImage: "/assets/images/support-back.png",
} as const;
