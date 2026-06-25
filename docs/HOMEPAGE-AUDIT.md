# Homepage Audit — Approach A (Avows-Nextjs)

Reference: [avowstech.com](https://avowstech.com)  
Migration source: `AvowsWesbiteMigration/app/sections/section-01` through `section-06`

## Architecture

| Layer | Purpose |
|-------|---------|
| `src/content/home.ts` | All homepage copy, images, links — edit here for content changes |
| `src/content/site.ts` | Nav, footer, global site config |
| `src/styles/tokens.css` | Design tokens (colors, spacing, typography) |
| `src/components/home/*` | One component per homepage section |
| `src/components/layout/*` | Shared header, footer, nav |
| `src/components/ui/*` | Reusable primitives (Button, Carousel, Counter) |

**No Elementor/WordPress classes.** Clean semantic HTML + CSS custom properties.

## Section inventory

| # | Live section | Component | Content file | Status |
|---|--------------|-----------|--------------|--------|
| 1 | Hero slider (3 slides) | `HeroSlider` | `heroSlides` | Implemented |
| 2 | Stats (Countries, Clients, Employees) | `StatsSection` | `stats` | Implemented |
| 3 | Partners CTA + logo carousel | `PartnersSection` | `partnersSection` | Implemented (bg image + overlay) |
| 4 | Services grid (`#services`) | `ServicesSection` | `servicesSection` | Implemented |
| 4b | Case studies CTA banner | `CaseStudiesSection` | `caseStudiesSection` | Implemented (was missing) |
| 5 | Client logo carousel | `ClientLogosSection` | `clientsSection` | Implemented |
| 6 | Announcements (3 cards) | `NewsBlogsSection` | `announcementsSection` | Implemented |
| 7 | Latest blogs (3 cards) | `NewsBlogsSection` | `blogsSection` | Implemented |
| 8 | Testimonials (Cynthia S / UMobile) | `TestimonialsSection` | `testimonialsSection` | Implemented |
| 9 | Contact strip + form | `ContactStrip` | `contactStrip` | UI only — form API TBD |

## Design tokens (from live site)

| Token | Value |
|-------|-------|
| Primary red | `#bd1129` |
| Primary dark | `#b20a0a` |
| Navy (header dropdown) | `#0d2235` |
| Footer main | `#350D0D` |
| Footer bottom bar | `#250005` |
| Stats section bg | `#F3F8FF` |
| Banner overlay | `#290006` at 75% |
| Contact strip bg | `#1D2020` + parallax image |
| Testimonial bg | `#F5F9FF` |
| Font | Poppins |
| Hero overlay | `rgba(0,0,0,0.6)` |

## Excluded from homepage (hidden on live site)

- Legacy 4-stat row (Finished Project, etc.) — `elementor-hidden-desktop` in migration
- Template kit promo cards (virus-attach, unlock, ideal) — placeholder WordPress URLs
- Duplicate blog section at bottom — `elementor-hidden-*` in section-06

## Content change workflow

1. Open `src/content/home.ts` (or `site.ts` for nav/footer)
2. Update text, image paths, or links
3. No component changes needed unless layout changes

## Remaining for full parity sign-off

- [ ] Visual QA: desktop / tablet / mobile vs live site
- [ ] Contact form API route (currently prevents default submit)
- [ ] Scroll-in animations (fadeInUp) — optional polish
- [ ] Inner pages (links currently 404 until built)
- [ ] Security headers in `next.config.ts` for production

## Assets

Copied from migration project: `public/assets/images/` (~3000 files), `public/favicon.ico`
