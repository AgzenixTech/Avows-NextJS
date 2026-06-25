import Image from "next/image";
import { coreValues } from "@/content/about";
import Container from "@/components/layout/Container";

export default function CoreValuesSection() {
  return (
    <section className="about-values" aria-label="Core values">
      <Container>
        <h2 className="about-values__heading">Core Values</h2>
        <div className="about-values__grid">
          {coreValues.map((value) => (
            <article key={value.title} className="value-card">
              <div className="value-card__icon-wrap">
                <Image
                  src={value.icon}
                  alt=""
                  width={64}
                  height={74}
                  className="value-card__icon"
                  unoptimized
                />
              </div>
              <h3 className="value-card__title">{value.title}</h3>
              <p className="value-card__text">{value.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
