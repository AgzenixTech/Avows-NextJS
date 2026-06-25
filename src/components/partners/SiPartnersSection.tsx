import { siPartnerLogos } from "@/content/partners";
import ImageCarousel from "@/components/ui/ImageCarousel";
import Container from "@/components/layout/Container";

export default function SiPartnersSection() {
  return (
    <section className="partners-si" aria-label="Our SI Partners">
      <Container>
        <h2 className="partners-si__title">Our SI Partners</h2>
        <ImageCarousel
          images={siPartnerLogos}
          slidesPerView={4}
          variant="partners"
          ariaLabel="System integration partner logos"
          className="partners-si__carousel"
        />
      </Container>
    </section>
  );
}
