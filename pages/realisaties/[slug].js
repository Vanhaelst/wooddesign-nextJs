import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { GraphQLClient } from "graphql-request";
import meta from "src/data/meta";
import styled from "styled-components";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Navigation from "src/components/Navigation";
import Grid from "@/components/Grid";
import Paragraph from "@/components/Paragraph";
import Image from "@/components/Image";
import Footer from "../../src/components/Footer";
import Breadcrumbs from "../../src/components/Breadcrumbs";
import ContentWrapper from "../../src/components/ContentWrapper";
import Link from "@/components/Link";
import ChevronLeft from "@/icons/ChevronLeft";
import { RichText } from "../../src/components/richtext/richtext.organism";

const Details = styled.div`
  margin-top: 24px;
  @media screen and (min-width: ${(props) =>
      props.theme.grid.breakpointSmall}px) {
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    margin-top: 0;
  }
`;

const Realisations = ({ realisation }) => {
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

  console.log("description", realisation?.description);
  return (
    <div>
      <Head>
        <title>Wooddesign - Realisaties - {realisation.title} </title>
        <meta
          property="og:title"
          content={`Wooddesign - Realisaties - ${realisation.title}`}
          key="title"
        />
        <meta
          name="keywords"
          content={`${realisation?.details?.houtsoort} - ${realisation?.details?.type} - ${meta.keywords}`}
        />
      </Head>
      <Navigation />
      <Breadcrumbs title={realisation?.title}>
        {realisation?.description?.map((descr) => (
          <RichText content={descr?.raw} />
        ))}
      </Breadcrumbs>

      <ContentWrapper>
        <Grid container>
          <Grid row mb={10}>
            {/*<Grid item xs={12} sm={8} md={7}>

              <Heading level={2} mb={3}>
                {realisation?.title}
              </Heading>

              {realisation?.description?.map((descr) => (
                <RichText content={descr?.raw} />
              ))}

            </Grid>
             */}

            {/*
            <Details
              as={Grid}
              item
              xs={12}
              sm={{ width: 4 }}
              md={{ width: 3, push: 2 }}
            >
              <Heading level={3} mb={3}>
                Details
              </Heading>
              <UnorderedList>
                {realisation?.wood && (
                  <ListItem>
                    <Text fontWeight="bold">Houtsoort:&nbsp;</Text>
                    <Text fontFamily="secondary">{realisation?.wood}</Text>
                  </ListItem>
                )}
                {realisation?.type && (
                  <ListItem>
                    <Text fontWeight="bold">Type:&nbsp;</Text>
                    <Text fontFamily="secondary">{realisation?.type}</Text>
                  </ListItem>
                )}
                {realisation?.total && (
                  <ListItem>
                    <Text fontWeight="bold">Totaal:&nbsp;</Text>
                    <Text fontFamily="secondary">{realisation?.total}</Text>
                  </ListItem>
                )}
                {realisation?.customer && (
                  <ListItem>
                    <Text fontWeight="bold">Klant:&nbsp;</Text>
                    <Text fontFamily="secondary">{realisation?.customer}</Text>
                  </ListItem>
                )}
              </UnorderedList>
            </Details>
            */}
          </Grid>

          <SimpleReactLightbox>
            <SRLWrapper options={options}>
              <Grid row>
                {realisation.images.map((image) => {
                  return (
                    <Grid item xs={12} sm={3}>
                      <a href={image.url} data-attribute="SRL">
                        <Image
                          src={image.url}
                          alt={image.alt}
                          objectFit
                          height="200px"
                        />
                      </a>
                    </Grid>
                  );
                })}
              </Grid>
            </SRLWrapper>
          </SimpleReactLightbox>
        </Grid>
      </ContentWrapper>

      <ContentWrapper>
        <Grid container>
          <Grid row>
            <Grid item xs={12}>
              <span>
                <Link
                  type="hidden"
                  textDecoration="none"
                  onClick={() => router.back()}
                >
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
              </span>
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
              }
            } 
        `,
  );

  return {
    props: {
      realisation: realisation || "No realisations",
    },
  };
}

export default Realisations;
