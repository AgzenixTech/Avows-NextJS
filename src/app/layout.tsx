import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import ScrollAnimations from "@/components/ui/ScrollAnimations";
import { siteConfig } from "@/content/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} – ${siteConfig.tagline}`,
  description:
    "Our network breaches global borders, with hundreds of dedicated personnel working at the forefront of the latest emergent technologies.",
  robots: { index: true, follow: true, "max-image-preview": "large" },
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: `${siteConfig.name} – ${siteConfig.tagline}`,
    description:
      "Our network breaches global borders, with hundreds of dedicated personnel working at the forefront of the latest emergent technologies.",
    url: `${siteConfig.url}/`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} – ${siteConfig.tagline}`,
    description:
      "Our network breaches global borders, with hundreds of dedicated personnel working at the forefront of the latest emergent technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${poppins.variable} ${poppins.className}`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <ScrollAnimations />
      </body>
    </html>
  );
}
