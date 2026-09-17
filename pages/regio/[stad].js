import React from "react";
import Head from "next/head";
import Navigation from "src/components/Navigation";
import Grid from "@/components/Grid";
import Footer from "src/components/Footer";
import Breadcrumbs from "src/components/Breadcrumbs";
import ContentWrapper from "src/components/ContentWrapper";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Button from "@/components/Button";
import Link from "@/components/Link";
import Box from "@/components/Box";
import { CallToAction } from "src/components/CallToAction";
import regions from "src/data/regions";
import { services } from "src/data/services/overview";
import { canonicalUrl, breadcrumbJsonLd } from "src/utils/seo";

const RegionPage = ({ region }) => {
  const pagePath = `/regio/${region.slug}`;
  const otherRegions = regions.filter((r) => r.slug !== region.slug);

  const structuredData = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: region.name, path: pagePath },
  ]);

  return (
    <div>
      <Head>
        <title>{region.metaTitle}</title>
        <meta name="description" content={region.metaDescription} />
        <link rel="canonical" href={canonicalUrl(pagePath)} />
        <meta property="og:title" content={region.metaTitle} key="title" />
        <meta property="og:description" content={region.metaDescription} />
        <meta property="og:url" content={canonicalUrl(pagePath)} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Navigation />
      <Breadcrumbs title={`Parket, Gevel & Terras in ${region.name}`}>
        <Paragraph className="mb-3">{region.heroIntro}</Paragraph>
      </Breadcrumbs>

      <ContentWrapper>
        <Grid container>
          <Grid row mb={9}>
            <Grid item xs={12} md={10}>
              {region.paragraphs.map((paragraph) => (
                <Paragraph mb={4} key={paragraph.slice(0, 24)}>
                  {paragraph}
                </Paragraph>
              ))}
            </Grid>
          </Grid>

          <Grid row mb={9}>
            <Grid item xs={12}>
              <Heading level={3} mb={6}>
                Onze diensten in {region.name}
              </Heading>
            </Grid>
            {services.map((service) => (
              <Grid item xs={12} sm={4} key={service.slug} mb={6}>
                <Heading level={4} mb={2}>
                  {service.title} in {region.name}
                </Heading>
                <Paragraph mb={4}>{service.description}</Paragraph>
                <Button outline as={Link} href={service.slug}>
                  {service.cta}
                </Button>
              </Grid>
            ))}
          </Grid>

          <Grid row mb={9}>
            <Grid item xs={12} md={10}>
              <Paragraph mb={2} fontWeight="bold">
                {region.ctaNote}
              </Paragraph>
            </Grid>
          </Grid>

          <Grid row>
            <Grid item xs={12}>
              <Box pb={9}>
                <Paragraph mb={2} fontWeight="bold">
                  Ook actief in de regio:
                </Paragraph>
                <Paragraph>
                  {otherRegions.map((r, index) => (
                    <React.Fragment key={r.slug}>
                      <Link href={`/regio/${r.slug}`} type="hidden">
                        {r.name}
                      </Link>
                      {index < otherRegions.length - 1 && (
                        <span className="mx-2">|</span>
                      )}
                    </React.Fragment>
                  ))}
                </Paragraph>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </ContentWrapper>

      <CallToAction
        title="Graag een offerte voor uw project?"
        description="Benieuwd naar de mogelijkheden voor parket, gevelbekleding of een terras? Vraag vandaag nog een vrijblijvende offerte aan."
        button={{ cta: "Ik wil een offerte", href: "/contact" }}
      />

      <Footer />
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: regions.map((region) => ({ params: { stad: region.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const region = regions.find((r) => r.slug === params.stad);

  if (!region) {
    return { notFound: true };
  }

  return {
    props: { region },
  };
}

export default RegionPage;
