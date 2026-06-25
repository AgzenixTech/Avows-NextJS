"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function isInViewport(el: Element) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight - 32 && rect.bottom > 0;
}

function observeElements(elements: Element[], observer: IntersectionObserver) {
  elements.forEach((el, index) => {
    el.classList.remove("is-visible");
    el.classList.add("animate-on-scroll");

    const customDelay = el.getAttribute("data-animate-delay");
    if (customDelay) {
      (el as HTMLElement).style.setProperty("--animate-delay", `${customDelay}ms`);
    } else if (el.classList.contains("animate-item")) {
      const siblings = el.parentElement?.querySelectorAll(":scope > .animate-item");
      const siblingIndex = siblings ? Array.from(siblings).indexOf(el) : index;
      (el as HTMLElement).style.setProperty(
        "--animate-delay",
        `${siblingIndex * 120}ms`,
      );
    } else {
      (el as HTMLElement).style.setProperty("--animate-delay", `${(index % 8) * 80}ms`);
    }

    if (isInViewport(el)) {
      el.classList.add("is-visible");
      return;
    }

    observer.observe(el);
  });
}

function setupScrollAnimations() {
  if (typeof window === "undefined") return () => {};

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return () => {};

  const targets: Element[] = [];

  document.querySelectorAll("main section").forEach((section) => {
    if (section.hasAttribute("data-animate-none")) return;

    const children = section.querySelectorAll(":scope > .container > *");
    if (children.length > 0) {
      children.forEach((child) => {
        child.classList.add("animate-item");
        targets.push(child);
      });
      return;
    }

    targets.push(section);
  });

  document
    .querySelectorAll(
      [
        ".listing-section .content-card",
        ".cards-grid .content-card",
        ".offering-card",
        ".service-case-studies__card",
        ".service-stat",
        ".testimonial-card",
        ".leader-card",
        ".partners-stat-card",
        ".agentic-delivers-cards__card",
        ".career-testimonial-card",
      ].join(", "),
    )
    .forEach((el) => {
      if (!targets.includes(el)) targets.push(el);
    });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
  );

  observeElements(targets, observer);

  return () => observer.disconnect();
}

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanup = setupScrollAnimations();
    return cleanup;
  }, [pathname]);

  return null;
}
