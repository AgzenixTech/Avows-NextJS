import fs from "fs";

const html = fs.readFileSync(
  "D:/Agstek Docs/Projects/AvowsWesbiteMigration/source-html/career/index.html",
  "utf8",
);

const jobs = [...html.matchAll(/class="elementor-heading-title elementor-size-default">([^<]+)<\/h2/gi)]
  .map((m) => m[1].trim())
  .filter(
    (t) =>
      ![
        "Let's Start Careers Here",
        "Collaborate Innovatively",
        "Portal Job",
        "Careers Coaching",
        "Career",
        "Enhanced Employment Opportunities for Improved Job Quality",
        "Latest Job Listing",
        "Making Dreams And Aspirations Come True",
        "Employee Testimonials",
        "More Opportunities For Everyone",
        "Apply Now",
        "Innovating Futures, Empowering Today",
        "Copyright © 2026 Avows.",
        "All Rights Reserved",
      ].includes(t) && t.length < 60,
  );

console.log(jobs.join("\n"));
