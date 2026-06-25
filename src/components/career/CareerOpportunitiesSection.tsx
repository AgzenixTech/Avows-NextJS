import { careerOpportunities } from "@/content/career";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import SectionBackground from "@/components/ui/SectionBackground";

export default function CareerOpportunitiesSection() {
  return (
    <section className="career-opportunities" aria-label="More opportunities">
      <SectionBackground src={careerOpportunities.backgroundImage} />
      <Container>
        <div className="career-opportunities__layout">
          <div className="career-opportunities__content">
            <h2 className="career-opportunities__title">{careerOpportunities.title}</h2>
            <p className="career-opportunities__text">{careerOpportunities.text}</p>
            <Button href={careerOpportunities.cta.href} variant="primary">
              {careerOpportunities.cta.text}
            </Button>
          </div>
          <div className="career-opportunities__features">
            {careerOpportunities.items.map((item) => (
              <article key={item.title} className="career-opportunity-item">
                <div className="career-opportunity-item__icon">
                  <i className={`fas ${item.icon}`} aria-hidden="true" />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
