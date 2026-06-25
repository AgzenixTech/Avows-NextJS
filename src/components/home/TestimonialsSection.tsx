import Image from "next/image";
import { testimonialsSection } from "@/content/home";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/layout/Container";

export default function TestimonialsSection() {
  const testimonial = testimonialsSection.items[0];

  return (
    <section className="testimonials-section" aria-label="Testimonials">
      <Container>
        <SectionHeading
          eyebrow={testimonialsSection.eyebrow}
          title={testimonialsSection.title}
        />
        <article className="testimonial-card">
          <div className="testimonial-card__header">
            <Image
              src={testimonial.avatar}
              alt={testimonial.avatarAlt}
              width={100}
              height={100}
              className="testimonial-card__avatar"
            />
            <div>
              <h3 className="testimonial-card__name">{testimonial.name}</h3>
              <p className="testimonial-card__role">{testimonial.role}</p>
              <div className="testimonial-card__stars" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <i key={i} className="fas fa-star" aria-hidden="true" />
                ))}
              </div>
            </div>
          </div>
          <blockquote className="testimonial-card__quote">
            {testimonial.quote.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </blockquote>
        </article>
      </Container>
    </section>
  );
}
