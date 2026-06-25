"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type ImageCarouselProps = {
  images: readonly string[];
  slidesPerView?: number;
  variant?: "default" | "partners";
  ariaLabel: string;
  className?: string;
};

export default function ImageCarousel({
  images,
  slidesPerView = 5,
  variant = "default",
  ariaLabel,
  className = "",
}: ImageCarouselProps) {
  return (
    <div className={`logo-carousel logo-carousel--${variant} ${className}`.trim()}>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={24}
        loop
        speed={400}
        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: slidesPerView },
        }}
        aria-label={ariaLabel}
      >
        {images.map((src) => (
          <SwiperSlide key={src}>
            <Image src={src} alt="" width={160} height={60} unoptimized />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
