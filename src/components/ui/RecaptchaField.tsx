"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

// The site key is public by design. It can be overridden per-environment via
// NEXT_PUBLIC_RECAPTCHA_SITE_KEY; the value below is the original avowstech.com
// reCAPTCHA v2 (checkbox) site key as a fallback.
const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ??
  "6LeOj5csAAAAALcIdHUIU_NT8bGLtFnEz5xhGE4N";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      render: (
        container: HTMLElement,
        options: { sitekey: string; theme?: string; size?: string },
      ) => number;
      getResponse: (widgetId?: number) => string;
      reset: (widgetId?: number) => void;
    };
    onRecaptchaLoad?: () => void;
  }
}

export default function RecaptchaField({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const renderedRef = useRef(false);

  useEffect(() => {
    function renderWidget() {
      if (renderedRef.current || !containerRef.current || !window.grecaptcha) return;

      window.grecaptcha.ready(() => {
        if (!containerRef.current || renderedRef.current) return;
        window.grecaptcha?.render(containerRef.current, {
          sitekey: RECAPTCHA_SITE_KEY,
          theme: "light",
          size: "normal",
        });
        renderedRef.current = true;
      });
    }

    window.onRecaptchaLoad = renderWidget;
    renderWidget();

    return () => {
      window.onRecaptchaLoad = undefined;
    };
  }, []);

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit"
        strategy="lazyOnload"
      />
      <div className={className} ref={containerRef} aria-label="reCAPTCHA verification" />
    </>
  );
}
