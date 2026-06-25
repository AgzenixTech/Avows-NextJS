import Container from "@/components/layout/Container";
import SectionBackground from "@/components/ui/SectionBackground";

type PageHeroProps = {
  title: string;
  backgroundImage?: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function PageHero({
  title,
  backgroundImage = "/assets/images/2023/10/bg-pagetitle.jpg",
  subtitle,
  className = "",
  children,
}: PageHeroProps) {
  return (
    <section
      className={`page-hero${className ? ` ${className}` : ""}`}
      aria-label={`${title} hero`}
    >
      <SectionBackground src={backgroundImage} priority />
      <Container>
        <h1 className="page-hero__title">
          {title.split("\n").map((line, index) => (
            <span key={line}>
              {index > 0 && <br />}
              {line}
            </span>
          ))}
        </h1>
        {subtitle ? <p className="page-hero__subtitle">{subtitle}</p> : null}
        {children}
      </Container>
    </section>
  );
}
