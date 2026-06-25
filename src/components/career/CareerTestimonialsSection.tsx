"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { careerTestimonials } from "@/content/career";
import Container from "@/components/layout/Container";
import SectionBackground from "@/components/ui/SectionBackground";
import "swiper/css";

function StarRating() {
  return (
    <ul className="career-testimonial-card__stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <li key={index}>
          <i className="fas fa-star" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
}

export default function CareerTestimonialsSection() {
  return (
    <section className="career-testimonials" aria-label="Employee testimonials">
      <SectionBackground src={careerTestimonials.backgroundImage} />
      <Container>
        <div className="career-testimonials__layout">
          <div className="career-testimonials__slider-wrap">
            <Swiper
              className="career-testimonials__slider"
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              loop
              speed={700}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                768: { slidesPerView: 1.15 },
                1100: { slidesPerView: 1.35 },
              }}
              aria-label="Employee testimonial carousel"
            >
              {careerTestimonials.items.map((item) => (
                <SwiperSlide key={item.name}>
                  <blockquote className="career-testimonial-card">
                    <StarRating />
                    <p>{item.quote}</p>
                    <footer className="career-testimonial-card__footer">
                      <Image
                        src={item.avatar}
                        alt=""
                        width={70}
                        height={70}
                        className="career-testimonial-card__avatar"
                      />
                      <div>
                        <strong>{item.name}</strong>
                        <span>{item.role}</span>
                      </div>
                    </footer>
                  </blockquote>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <aside className="career-testimonials__panel">
            <h2>{careerTestimonials.title}</h2>
            <p className="career-testimonials__panel-subtitle">{careerTestimonials.subtitle}</p>
            <p className="career-testimonials__panel-text">{careerTestimonials.text}</p>
            <Link href={careerTestimonials.cta.href} className="career-testimonials__cta">
              {careerTestimonials.cta.text}
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </Container>
    </section>
  );
}
