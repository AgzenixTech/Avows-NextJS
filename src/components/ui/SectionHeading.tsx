type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  className?: string;
  variant?: "default" | "home";
};

export default function SectionHeading({
  eyebrow,
  title,
  className = "",
  variant = "default",
}: SectionHeadingProps) {
  if (variant === "home") {
    return (
      <header className={`section-heading section-heading--home ${className}`.trim()}>
        <h2 className="section-heading__home-title">{eyebrow}</h2>
        <p className="section-heading__home-subtitle">{title}</p>
      </header>
    );
  }

  return (
    <div className={`section-heading ${className}`.trim()}>
      <p className="section-heading__eyebrow">{eyebrow}</p>
      <h2 className="section-heading__title">{title}</h2>
    </div>
  );
}
