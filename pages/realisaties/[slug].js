import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { GraphQLClient } from "graphql-request";
import styled from "styled-components";
import meta from "src/data/meta";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Navigation from "src/components/Navigation";
import Grid from "@/components/Grid";
import Image from "@/components/Image";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Button from "@/components/Button";
import Box from "@/components/Box";
import Footer from "../../src/components/Footer";
import ContentWrapper from "../../src/components/ContentWrapper";
import Link from "@/components/Link";
import ChevronLeft from "@/icons/ChevronLeft";
import { RichText } from "../../src/components/richtext/richtext.organism";
import { canonicalUrl, richTextToPlainText, breadcrumbJsonLd } from "../../src/utils/seo";

const FactRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey[20]};

  &:first-child {
    border-top: 1px solid ${(props) => props.theme.colors.grey[20]};
  }

  svg {
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

const categoryToService = {
  Parket: { title: "parket", href: "/parket" },
  Gevel: { title: "gevelbekleding", href: "/gevel" },
  Terras: { title: "terrassen", href: "/terras" },
};

const factIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#4a7322" strokeWidth="1.5" width="20" height="20">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const Realisations = ({ realisation, slug }) => {
  const options = {
    buttons: {
      backgroundColor: "rgba(30,30,36,0.9)",
      iconColor: "rgba(255, 255, 255, 0.8)",
      iconPadding: "5px",
      showAutoplayButton: false,
      showCloseButton: true,
      showDownloadButton: false,
      showFullscreenButton: false,
      showNextButton: true,
      showPrevButton: true,
      size: "40px",
    },
    caption: {
      showCaption: true,
      captionColor: "#FFFFFF",
      captionFontFamily: "inherit",
      captionFontSize: "inherit",
      captionFontStyle: "inherit",
      captionFontWeight: "inherit",
      captionTextTransform: "inherit",
    },
    thumbnails: {
      showThumbnails: true,
      thumbnailsOpacity: 0.4,
      thumbnailsSize: ["100px", "80px"],
    },
  };

  const router = useRouter();

  const rawDescriptionText = (realisation?.description || [])
    .map((descr) => richTextToPlainText(descr?.raw, 1000))
    .join(" ")
    .trim();

  const metaDescription = rawDescriptionText
    ? rawDescriptionText.length > 155
      ? `${rawDescriptionText.slice(0, 155).replace(/\s+\S*$/, "")}…`
      : rawDescriptionText
    : `${realisation?.title} — bekijk dit gerealiseerde project van Wooddesign, specialist in parket, gevelbekleding en terrassen.`;

  const pagePath = `/realisaties/${slug}`;
  const category = realisation?.categories?.[0];
  const relatedService = categoryToService[category];

  const facts = [
    { label: "Houtsoort", value: realisation?.wood },
    { label: "Type", value: realisation?.type },
    { label: "Totaal", value: realisation?.total },
    { label: "Klant", value: realisation?.customer },
  ].filter((fact) => fact.value);

  const images = realisation?.images || [];
  const [heroImage, ...thumbnailImages] = images;

  const structuredData = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Realisaties", path: "/realisaties" },
    { name: realisation?.title, path: pagePath },
  ]);

  return (
    <div>
      <Head>
        <title>Wooddesign - Realisaties - {realisation.title} </title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl(pagePath)} />
        <meta
          property="og:title"
          content={`Wooddesign - Realisaties - ${realisation.title}`}
          key="title"
        />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl(pagePath)} />
        <meta
          name="keywords"
          content={`${realisation?.details?.houtsoort} - ${realisation?.details?.type} - ${meta.keywords}`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Navigation />

      <ContentWrapper>
        <Grid container>
          <Box pt={9} pb={2}>
            <Link type="hidden" textDecoration="none" onClick={() => router.back()}>
              <ChevronLeft
                size="10px"
                fill="black"
                style={{
                  marginRight: "4px",
                  verticalAlign: "baseline",
                  display: "inline",
                }}
              />{" "}
              Terug naar overzicht
            </Link>
          </Box>

          <Grid row mb={11}>
            {/* Gallery */}
            <Grid item xs={12} lg={7}>
              <SimpleReactLightbox>
                <SRLWrapper options={options}>
                  {heroImage && (
                    <a href={heroImage.url} data-attribute="SRL">
                      <Image
                        src={heroImage.url}
                        alt={heroImage.alt || realisation.title}
                        objectFit
                        height="480px"
                        className="rounded-md"
                      />
                    </a>
                  )}
                  {thumbnailImages.length > 0 && (
                    <Grid row mt={2}>
                      {thumbnailImages.map((image) => (
                        <Grid item xs={4} sm={3} key={image.url}>
                          <a href={image.url} data-attribute="SRL">
                            <Image
                              src={image.url}
                              alt={image.alt || realisation.title}
                              objectFit
                              height="120px"
                              className="rounded-md"
                            />
                          </a>
                        </Grid>
                      ))}
                    </Grid>
                  )}
                </SRLWrapper>
              </SimpleReactLightbox>
            </Grid>

            {/* Info panel */}
            <Grid item xs={12} lg={5}>
              <Box className="pt-6 lg:pt-0 lg:pl-10">
                <Heading level={2} as="h1" textTransform="uppercase" mb={3}>
                  {realisation.title}
                </Heading>

                {realisation?.description?.map((descr, index) => (
                  <RichText key={index} content={descr?.raw} />
                ))}

                {facts.length > 0 && (
                  <Box mt={4} mb={6}>
                    {facts.map((fact) => (
                      <FactRow key={fact.label}>
                        {factIcon}
                        <Paragraph>
                          <strong>{fact.label}:</strong> {fact.value}
                        </Paragraph>
                      </FactRow>
                    ))}
                  </Box>
                )}

                <Button outline as={Link} href="/contact" block>
                  Vraag een offerte aan
                </Button>

                {relatedService && (
                  <Box mt={9} className="border border-solid" style={{ borderColor: "#e0e0e0", borderRadius: "4px", padding: "20px" }}>
                    <Paragraph fontWeight="bold" mb={2} className="uppercase tracking-wide">
                      Ook interessant
                    </Paragraph>
                    <Paragraph mb={3}>
                      Bekijk meer van onze {relatedService.title}-realisaties, of
                      ontdek wat we voor uw project kunnen betekenen.
                    </Paragraph>
                    <Link href={relatedService.href} type="hidden" fontWeight="bold">
                      Meer over {relatedService.title} →
                    </Link>
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </ContentWrapper>

      <Footer />
    </div>
  );
};

export async function getServerSideProps(context) {
  const graphcms = new GraphQLClient(
    "https://api-eu-central-1.graphcms.com/v2/ckl3m5wq24osf01z8ch6h9vwq/master",
  );

  let { realisation } = await graphcms.request(
    `
            {
              realisation(where: {slug: "${context.params.slug}"}) {
                title
                description {
                  raw
                }
                images{
                  url
                }
                wood
                type
                total
                customer
                categories
              }
            }
        `,
  );

  return {
    props: {
      realisation: realisation || "No realisations",
      slug: context.params.slug,
    },
  };
}

export default Realisations;
