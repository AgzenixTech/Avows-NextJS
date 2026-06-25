import fs from "fs";
import path from "path";

const ROOT = "D:/Agstek Docs/Projects/AvowsWesbiteMigration/source-html";

function stripTags(html) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function extract(page) {
  const file = path.join(ROOT, page, "index.html");
  if (!fs.existsSync(file)) return null;
  const html = fs.readFileSync(file, "utf8");
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => stripTags(m[1]));
  const h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)]
    .map((m) => stripTags(m[1]))
    .filter((t) => t.length > 3 && t.length < 200)
    .slice(0, 15);
  const imgs = [...html.matchAll(/wp-content\/uploads\/([^"'?\s]+)/g)]
    .map((m) => `/assets/images/${m[1].replace(/\.(avif|webp)$/, ".png")}`)
    .filter((v, i, a) => a.indexOf(v) === i)
    .slice(0, 12);
  return { h1s, h2s, imgs };
}

const pages = [
  "contact-us",
  "career",
  "case-study",
  "blogs",
  "news-announcements",
  "agentic-ai",
  "digital-application-solutions",
  "quality-assurance",
  "data-analytics-business-intelligence",
  "ai-automation-rpa",
  "cyber-security",
  "technology-talent-solutions",
  "project-based-software-development",
  "managed-capacity",
  "managed-services",
];

for (const p of pages) {
  const data = extract(p);
  if (!data) continue;
  console.log("\n##", p);
  console.log("H1:", data.h1s.join(" | "));
  console.log("H2:", data.h2s.join("\n   "));
  console.log("IMGS:", data.imgs.join("\n   "));
}
