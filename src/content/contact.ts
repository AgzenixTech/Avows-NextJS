import { siteConfig } from "@/content/site";

export const contactPageMeta = {
  title: "Contact Us – AVOWS Technologies",
  description:
    "AVOWS Technologies delivers IT consulting, digital solutions, quality engineering, and managed services for enterprises worldwide.",
} as const;

export const contactHero = {
  title: "Contact Us",
  backgroundImage: "/assets/images/2023/11/contact-us-page.png",
} as const;

export const contactFormSection = {
  heading: "What can we do for you?",
  phone: "+603 27123456",
  email: siteConfig.contact.email,
  fields: [
    { name: "name", label: "Name", type: "text" as const, placeholder: "Name..." },
    { name: "email", label: "Email", type: "email" as const, placeholder: "Email..." },
    { name: "phone", label: "Phone", type: "tel" as const, placeholder: "Phone ..." },
    { name: "message", label: "Message", type: "textarea" as const, placeholder: "Message..." },
  ],
  submitLabel: "Send",
} as const;

export const contactLocations = {
  title: "Our Global Locations:",
  items: [
    {
      id: "malaysia",
      name: "Malaysia (HQ)",
      company: "Avows Technologies SDN BHD,",
      address:
        "Level 15-06, Tower A, The Vertical Business Suite, Avenue 3, Bangsar South, No 8, Jln Kerinchi, 59200 Kuala Lumpur, Malaysia.",
      phone: "+603 27123456",
      flag: "/assets/images/download-5.png",
    },
    {
      id: "india",
      name: "India",
      company: "Avows IT Solutions Private Limited",
      address:
        "3rd Floor, Plot No- 4/2, Sector-1, RAM SVR, Huda Techno Enclave, Hi-Tech City, Madhapur, Hyderabad – 500081",
      phone: "+91-9985315567",
      flag: "/assets/images/Flag_of_India.svg-1024x683-5.webp",
    },
    {
      id: "singapore",
      name: "Singapore, SG",
      company: "Avows Technologies Pte. Ltd.,",
      address: "12 Marina Boulevard, 17-01 Tower 3, Marina Bay Financial Center, Singapore 018982.",
      phone: "+65 68097425",
      flag: "/assets/images/singapore-flag-png-large-5.jpeg",
    },
    {
      id: "indonesia",
      name: "Indonesia",
      company: "PT Avows Technologies,",
      address: "Office 8, Level 18A, Jl. Senopati No. 8B, Senayan, Kebayoran Baru South Jakarta 12190 – Indonesia",
      phone: "+62 21 5795 0609",
      flag: "/assets/images/istockphoto-857526554-612x612-1-5.jpg",
    },
    {
      id: "usa",
      name: "United States of America.",
      company: "Avows Technologies Inc.,",
      address: "4512 Legacy Drive #100 Plano, TX 75024",
      phone: "+1 214 390 7712",
      flag: "/assets/images/USA_444-5.png",
    },
  ],
} as const;

export const contactMap = {
  title: "Avows HQ",
  embedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63743.05212351669!2d101.665412!3d3.110377!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4a2a3a4057c9%3A0x4c7f54a3a3101bb2!2sAvows%20Technologies%20Sdn.%20Bhd.%20(803653-T)!5e0!3m2!1sen!2sus!4v1698575930414!5m2!1sen!2sus",
} as const;
