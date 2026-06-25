import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import SectionBackground from "@/components/ui/SectionBackground";

type PageCtaStripProps = {
  line1: string;
  line2: string;
  button: { text: string; href: string };
  backgroundImage?: string;
};

export default function PageCtaStrip({
  line1,
  line2,
  button,
  backgroundImage = "/assets/images/2023/10/productive-business-03.jpg",
}: PageCtaStripProps) {
  return (
    <section className="page-cta" aria-label="Call to action">
      <SectionBackground src={backgroundImage} variant="cta-right" />
      <div className="page-cta__overlay" aria-hidden />
      <Container>
        <div className="page-cta__inner">
          <p className="page-cta__lead">{line1}</p>
          <h2 className="page-cta__heading">{line2}</h2>
          <Button href={button.href} variant="primary" size="lg" className="btn--service-cta">
            {button.text}
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
