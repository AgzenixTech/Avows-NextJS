"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/content/home";

const DURATION_MS = 7000;

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActive((index) => (index + 1) % heroSlides.length);
    }, DURATION_MS);

    return () => {
      clearTimeout(timer);
    };
  }, [active]);

  const goTo = (index: number) => {
    setActive((index + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="site-hero" aria-label="Featured highlights" aria-live="polite">
      <div key={active} className="site-hero__progress" aria-hidden="true" />
      <button
        type="button"
        className="site-hero__nav site-hero__nav--prev"
        aria-label="Previous slide"
        onClick={() => goTo(active - 1)}
      >
        <i className="fas fa-chevron-left" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="site-hero__nav site-hero__nav--next"
        aria-label="Next slide"
        onClick={() => goTo(active + 1)}
      >
        <i className="fas fa-chevron-right" aria-hidden="true" />
      </button>
      <div className="site-hero__viewport">
        {heroSlides.map((slide, index) => {
          const isActive = index === active;
          return (
            <div
              key={slide.title}
              className={`site-hero__slide${isActive ? " is-active" : ""}`}
              aria-hidden={!isActive}
            >
              <img
                className="site-hero__bg"
                src={slide.image}
                alt=""
                width={1024}
                height={495}
                fetchPriority={index === 0 ? "high" : "low"}
              />
              <div className="site-hero__overlay" aria-hidden="true" />
              <div className="site-hero__content">
                <p className="site-hero__label">{slide.label}</p>
                <h2 className="site-hero__title">{slide.title}</h2>
                <p className="site-hero__subtitle">{slide.subtitle}</p>
                <Link href={slide.cta.href} className="site-hero__cta">
                  {slide.cta.text}
                  <i className="fas fa-arrow-right" aria-hidden="true" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
