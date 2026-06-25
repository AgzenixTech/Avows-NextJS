"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { aboutSection } from "@/content/home";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function AboutIntroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    const video = videoRef.current;
    if (!video) return;
    setPlaying(true);
    void video.play();
  }

  return (
    <section id={aboutSection.id} className="about-intro-section" aria-label="About Avows">
      <Container>
        <div className="about-intro-grid">
          <div className="about-intro__media">
            <div className="about-intro__video-wrap">
              {!playing && (
                <>
                  <Image
                    src={aboutSection.videoPoster}
                    alt=""
                    fill
                    className="about-intro__poster"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <button
                    type="button"
                    className="about-intro__play"
                    aria-label="Play corporate video"
                    onClick={handlePlay}
                  >
                    <i className="fas fa-play" aria-hidden="true" />
                  </button>
                </>
              )}
              <video
                ref={videoRef}
                src={aboutSection.videoSrc}
                poster={aboutSection.videoPoster}
                controls={playing}
                preload="metadata"
                playsInline
                controlsList="nodownload"
                className={`about-intro__video${playing ? "" : " about-intro__video--hidden"}`}
              />
            </div>
          </div>

          <div className="about-intro__content">
            <p className="about-intro__lead">{aboutSection.intro}</p>

            <div className="about-intro__years" aria-label="Years of experience">
              <span className="about-intro__years-label">{aboutSection.yearsLabel}</span>
              <span className="about-intro__years-value">{aboutSection.yearsValue}</span>
              <span className="about-intro__years-suffix">
                {aboutSection.yearsSuffix.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </span>
            </div>

            <p className="about-intro__body">{aboutSection.body}</p>

            <Button href={aboutSection.cta.href}>{aboutSection.cta.text}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
