import Image from "next/image";
import PageHero from "@/components/templates/PageHero";
import PageCtaStrip from "@/components/templates/PageCtaStrip";
import AgenticAiLayout from "@/components/services/AgenticAiLayout";
import ServiceStatsSection, {
  ServiceCaseStudies,
} from "@/components/services/ServiceStatsSection";
import Container from "@/components/layout/Container";
import type { ServicePageConfig } from "@/lib/pages/registry";
import "@/styles/service-pages.css";

type ServicePageLayoutProps = {
  page: ServicePageConfig;
};

export default function ServicePageLayout({ page }: ServicePageLayoutProps) {
  if ("variant" in page && page.variant === "agentic") {
    return <AgenticAiLayout page={page} />;
  }

  const standardPage = page as Extract<ServicePageConfig, { blocks: unknown }>;

  return (
    <>
      <PageHero
        title={standardPage.heroTitle}
        backgroundImage={standardPage.backgroundImage}
        className="page-hero--service"
      />

      <section className="service-content" aria-label={standardPage.heroTitle}>
        <Container>
          <div className="service-content__grid service-content__grid--multi-image">
            <div className="service-content__media">
              <Image
                src={standardPage.images[0]}
                alt=""
                width={900}
                height={443}
                className="service-content__main-image"
                priority
              />
              <div className="service-content__sub-images">
                <Image src={standardPage.images[1]} alt="" width={540} height={400} />
                <Image src={standardPage.images[2]} alt="" width={340} height={371} />
              </div>
            </div>
            <div className="service-content__text">
              {standardPage.blocks.map((block, index) => (
                <div key={`${block.subtitle}-${index}`} className="service-block">
                  {block.headline ? (
                    <h2 className="service-block__headline">{block.headline}</h2>
                  ) : null}
                  {block.subtitle ? (
                    <p className="service-block__subtitle">{block.subtitle}</p>
                  ) : null}
                  <p className="service-block__body">{block.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {"caseStudies" in standardPage && standardPage.caseStudies ? (
        <ServiceCaseStudies items={standardPage.caseStudies} />
      ) : null}

      <ServiceStatsSection />
      <PageCtaStrip
        line1={standardPage.cta.line1}
        line2={standardPage.cta.line2}
        button={standardPage.cta.button}
        backgroundImage={standardPage.cta.backgroundImage}
      />
    </>
  );
}
