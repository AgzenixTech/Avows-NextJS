import { careerValues } from "@/content/career";
import Container from "@/components/layout/Container";

export default function CareerValuesSection() {
  return (
    <section className="career-values" aria-label="Why work at Avows">
      <Container>
        <div className="career-values__grid">
          {careerValues.map((value) => (
            <article
              key={value.title}
              className={`career-value-card career-value-card--${value.cardVariant}`}
            >
              <div
                className={`career-value-card__icon career-value-card__icon--${value.iconVariant}`}
              >
                <i className={`fas ${value.icon}`} aria-hidden="true" />
              </div>
              <div className="career-value-card__body">
                <h2 className="career-value-card__title">{value.title}</h2>
                <p className="career-value-card__text">{value.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
