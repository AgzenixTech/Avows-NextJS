"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedProgressBarProps = {
  label: string;
  value: number;
  duration?: number;
};

export default function AnimatedProgressBar({
  label,
  value,
  duration = 3500,
}: AnimatedProgressBarProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;
        setIsAnimating(true);

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - (1 - progress) ** 3;
          setDisplayValue(Math.round(value * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div ref={ref} className="career-progress">
      <div className="career-progress__header">
        <span className="career-progress__label">{label}</span>
        <span className="career-progress__value">{displayValue}%</span>
      </div>
      <div className="career-progress__track">
        <div
          className={`career-progress__fill${isAnimating ? " is-animating" : ""}`}
          data-target={value}
        />
      </div>
    </div>
  );
}
