import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import Button from "@/components/ui/Button";
import Container from "./Container";
import SiteNav from "./SiteNav";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Container>
        <div className="site-header__inner">
          <Link href="/" className="site-header__logo" aria-label="AVOWS Technologies home">
            <Image
              src={siteConfig.logo.header}
              alt="AVOWS Technologies logo"
              width={180}
              height={60}
              priority
            />
          </Link>
          <SiteNav />
          <div className="site-header__cta">
            <Button href="/contact-us/">Let&apos;s get started</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
