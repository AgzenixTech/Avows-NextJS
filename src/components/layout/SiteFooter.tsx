import Link from "next/link";
import Image from "next/image";
import {
  footerLocations,
  footerQuickLinks,
  footerServices,
  siteConfig,
} from "@/content/site";
import Container from "./Container";

const socialIcons: Record<string, string> = {
  linkedin: "fab fa-linkedin",
  instagram: "fab fa-instagram",
};

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container className="site-footer__main">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <div className="site-footer__decor" aria-hidden="true" />
            <Image
              src={siteConfig.logo.footer}
              alt="AVOWS Technologies"
              width={160}
              height={54}
            />
            <p className="site-footer__tagline">Innovating Futures, Empowering Today</p>
            <div className="site-footer__social">
              {siteConfig.social.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                >
                  <i className={socialIcons[item.icon]} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="site-footer__heading">All IT Services</p>
            <ul className="site-footer__links">
              {footerServices.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="site-footer__heading">Quick Links</p>
            <ul className="site-footer__links">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="site-footer__heading">Our Locations</p>
            <ul className="site-footer__links">
              {footerLocations.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="site-footer__location">
                    <i className="fas fa-map-marker-alt" aria-hidden="true" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="site-footer__bottom">
        <Container>
          <div className="site-footer__bottom-inner">
            <p>Copyright © {year} Avows. All Rights Reserved</p>
            
          </div>
        </Container>
      </div>
    </footer>
  );
}
