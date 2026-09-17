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
import guides from "src/data/guides";
import { canonicalUrl, breadcrumbJsonLd } from "src/utils/seo";

const GuidePage = ({ guide }) => {
  const pagePath = `/gids/${guide.slug}`;
  const otherGuides = guides.filter((g) => g.slug !== guide.slug);

  const structuredData = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: guide.title, path: pagePath },
  ]);

  return (
    <div>
      <Head>
        <title>{guide.metaTitle}</title>
        <meta name="description" content={guide.metaDescription} />
        <link rel="canonical" href={canonicalUrl(pagePath)} />
        <meta property="og:title" content={guide.metaTitle} key="title" />
        <meta property="og:description" content={guide.metaDescription} />
        <meta property="og:url" content={canonicalUrl(pagePath)} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Navigation />
      <Breadcrumbs title={guide.title}>
        <Paragraph className="mb-3">{guide.intro}</Paragraph>
      </Breadcrumbs>

      <ContentWrapper>
        <Grid container>
          <Grid row mb={9}>
            <Grid item xs={12} md={10}>
              {guide.sections.map((section) => (
                <Box mb={6} key={section.heading}>
                  <Heading level={4} mb={2}>
                    {section.heading}
                  </Heading>
                  <Paragraph>{section.body}</Paragraph>
                </Box>
              ))}
            </Grid>
          </Grid>

          <Grid row mb={9}>
            <Grid item xs={12} md={10}>
              <Paragraph mb={4}>
                Meer weten over onze diensten?{" "}
                <Link href={guide.relatedService.href} type="hidden">
                  Bekijk {guide.relatedService.title.toLowerCase()}
                </Link>
                .
              </Paragraph>
              <Button outline as={Link} href="/contact">
                Vraag een offerte op maat aan
              </Button>
            </Grid>
          </Grid>

          <Grid row>
            <Grid item xs={12}>
              <Paragraph mb={2} fontWeight="bold">
                Ook interessant:
              </Paragraph>
              <Paragraph>
                {otherGuides.map((g, index) => (
                  <React.Fragment key={g.slug}>
                    <Link href={`/gids/${g.slug}`} type="hidden">
                      {g.title}
                    </Link>
                    {index < otherGuides.length - 1 && (
                      <span className="mx-2">|</span>
                    )}
                  </React.Fragment>
                ))}
              </Paragraph>
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
    paths: guides.map((guide) => ({ params: { slug: guide.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const guide = guides.find((g) => g.slug === params.slug);

  if (!guide) {
    return { notFound: true };
  }

  return {
    props: { guide },
  };
}

export default GuidePage;
