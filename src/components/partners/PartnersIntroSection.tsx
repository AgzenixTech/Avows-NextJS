import Image from "next/image";
import { partnersIntro } from "@/content/partners";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function PartnersIntroSection() {
  return (
    <section className="partners-intro" aria-label="Partner with us for success">
      <Container>
        <div className="partners-intro__grid">
          <div className="partners-intro__copy">
            <h2 className="partners-intro__title">{partnersIntro.title}</h2>
            {partnersIntro.paragraphs.map((paragraph) => (
              <p key={paragraph} className="partners-intro__text">
                {paragraph}
              </p>
            ))}
            <Button href={partnersIntro.cta.href} variant="primary">
              {partnersIntro.cta.text}
            </Button>
          </div>
          <div className="partners-intro__media">
            <Image
              src={partnersIntro.image}
              alt=""
              width={400}
              height={500}
              className="partners-intro__image"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
