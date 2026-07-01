"use client";

import { useId, useState } from "react";
import { careerJobsSection } from "@/content/career";
import { careerJobs, type CareerJob, type CareerJobSection } from "@/content/career-jobs";
import Container from "@/components/layout/Container";

function JobAccordionPanel({
  section,
  panelId,
  isOpen,
  onToggle,
}: {
  section: CareerJobSection;
  panelId: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="career-job-accordion__item">
      <button
        type="button"
        className="career-job-accordion__trigger"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="career-job-accordion__icon" aria-hidden="true">
          <i className={`fas ${isOpen ? "fa-minus" : "fa-plus"}`} />
        </span>
        <span>{section.title}</span>
      </button>
      {isOpen ? (
        <div id={panelId} className="career-job-accordion__panel" role="region">
          {section.text ? <p>{section.text}</p> : null}
          {section.items?.length ? (
            <ul>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function CareerJobCard({ job }: { job: CareerJob }) {
  const baseId = useId();
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({ 0: true });

  const toggleSection = (index: number) => {
    setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <article className="career-job-card">
      <span className="career-job-card__badge">
        <i className="fas fa-check-circle" aria-hidden="true" /> {job.badge}
      </span>
      <h3 className="career-job-card__title">{job.title}</h3>
      <p className="career-job-card__location">
        <i className="fas fa-map-marker-alt" aria-hidden="true" /> {job.location}
      </p>
      <div className="career-job-card__details">
        <div className="career-job-accordion">
          {job.sections.map((section, index) => (
            <JobAccordionPanel
              key={`${job.id}-${section.title}`}
              section={section}
              panelId={`${baseId}-panel-${index}`}
              isOpen={Boolean(openSections[index])}
              onToggle={() => toggleSection(index)}
            />
          ))}
        </div>
      </div>
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
  );
}

export default function CareerJobsSection() {
  return (
    <section id={careerJobsSection.id} className="career-jobs" aria-label="Open positions">
      <Container>
        <h2 className="career-jobs__title">{careerJobsSection.title}</h2>
        <p className="career-jobs__intro">{careerJobsSection.intro}</p>
        <div className="career-jobs__grid">
          {careerJobs.map((job) => (
            <CareerJobCard key={job.id} job={job} />
          ))}
        </div>
      </Container>
    </section>
  );
}
