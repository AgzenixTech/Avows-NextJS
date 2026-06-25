import { careerJobs, careerJobsSection } from "@/content/career";
import Container from "@/components/layout/Container";

export default function CareerJobsSection() {
  return (
    <section id={careerJobsSection.id} className="career-jobs" aria-label="Open positions">
      <Container>
        <h2 className="career-jobs__title">{careerJobsSection.title}</h2>
        <p className="career-jobs__intro">{careerJobsSection.intro}</p>
        <div className="career-jobs__grid">
          {careerJobs.map((job) => (
            <article key={job.title} className="career-job-card">
              <span className="career-job-card__badge">Recomendation</span>
              <h3 className="career-job-card__title">{job.title}</h3>
              <p className="career-job-card__location">
                <i className="fas fa-map-marker-alt" aria-hidden="true" /> {job.location}
              </p>
              <div className="career-job-card__meta-row">
                <span>
                  <i className="fas fa-briefcase" aria-hidden="true" /> {job.type}
                </span>
                <span>
                  <i className="fas fa-clock" aria-hidden="true" /> {job.updated}
                </span>
              </div>
              <a href="#apply" className="career-job-card__apply">
                Apply Now
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
