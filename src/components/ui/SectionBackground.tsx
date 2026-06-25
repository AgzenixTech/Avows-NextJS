import Image from "next/image";

type SectionBackgroundProps = {
  src: string;
  alt?: string;
  priority?: boolean;
  variant?: "default" | "top" | "cta-right" | "contact";
  className?: string;
};

export default function SectionBackground({
  src,
  alt = "",
  priority = false,
  variant = "default",
  className = "",
}: SectionBackgroundProps) {
  const classes = [
    "section-background",
    variant !== "default" ? `section-background--${variant}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes="100vw"
      className={classes}
      aria-hidden={alt === "" ? true : undefined}
    />
  );
}
