"use client";

import Image from "next/image";
import { useState } from "react";
import { journeyDefaultYear, journeyMilestones } from "@/content/about";
import Container from "@/components/layout/Container";

export default function JourneySection() {
  const [activeYear, setActiveYear] = useState(journeyDefaultYear);
  const active = journeyMilestones.find((m) => m.year === activeYear) ?? journeyMilestones[0];

  return (
    <section className="about-journey" aria-label="Company journey">
      <Container>
        <div className="about-journey__tabs-wrap">
          <div className="about-journey__tabs" role="tablist" aria-label="Milestones by year">
            {journeyMilestones.map((milestone) => (
              <button
                key={milestone.year}
                type="button"
                role="tab"
                aria-selected={activeYear === milestone.year}
                className={`about-journey__tab${activeYear === milestone.year ? " is-active" : ""}`}
                onClick={() => setActiveYear(milestone.year)}
              >
                <span className="about-journey__tab-icon" aria-hidden="true" />
                <span className="about-journey__tab-year">{milestone.year}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="about-journey__panel" role="tabpanel">
          <div className="about-journey__panel-inner">
            <Image src={active.image} alt="" width={170} height={157} unoptimized />
            <ul>
              {active.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
