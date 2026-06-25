import Image from "next/image";
import AnimatedProgressBar from "@/components/ui/AnimatedProgressBar";
import { careerDreams } from "@/content/career";
import Container from "@/components/layout/Container";

export default function CareerDreamsSection() {
  return (
    <section id="coach" className="career-dreams" aria-label="Career aspirations">
      <Container>
        <div className="career-dreams__grid">
          <div className="career-dreams__images">
            {careerDreams.images.map((image) => (
              <Image key={image} src={image} alt="" width={337} height={800} className="career-dreams__image" />
            ))}
          </div>
          <div>
            <h2 className="career-dreams__title">{careerDreams.title}</h2>
            <p className="career-dreams__text">{careerDreams.text}</p>
            <div className="career-dreams__progress">
              {careerDreams.progress.map((item) => (
                <AnimatedProgressBar key={item.label} label={item.label} value={item.value} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
