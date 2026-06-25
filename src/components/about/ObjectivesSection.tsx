import Image from "next/image";
import { aboutObjectives } from "@/content/about";
import Container from "@/components/layout/Container";

export default function ObjectivesSection() {
  return (
    <section className="about-objectives" aria-label="Objective, mission and vision">
      <Container>
        <div className="about-objectives__grid">
          <div>
            <div className="about-objectives__block">
              <h2>{aboutObjectives.objective.title}</h2>
              <p>{aboutObjectives.objective.text}</p>
            </div>
            <div className="about-objectives__split">
              <div className="about-objectives__block">
                <h2>{aboutObjectives.mission.title}</h2>
                <p>{aboutObjectives.mission.text}</p>
              </div>
              <div className="about-objectives__block">
                <h2>{aboutObjectives.vision.title}</h2>
                <p>{aboutObjectives.vision.text}</p>
              </div>
            </div>
          </div>
          <div className="about-objectives__images">
            <span className="about-objectives__decor" aria-hidden="true" />
            <Image
              src={aboutObjectives.images[0]}
              alt=""
              width={470}
              height={200}
              className="about-objectives__image-main"
            />
            <div className="about-objectives__image-row">
              <Image src={aboutObjectives.images[1]} alt="" width={220} height={200} />
              <Image src={aboutObjectives.images[2]} alt="" width={220} height={200} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
