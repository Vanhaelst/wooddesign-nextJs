import React, { useEffect, useState } from "react";
import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import Hero from "@/components/Hero";
import Heading from "@/components/Heading";
import Grid from "@/components/Grid";
import Paragraph from "@/components/Paragraph";
import Footer from "src/components/Footer";
import Image from "@/components/Image";
import Box from "@/components/Box";
import Link from "@/components/Link";
import Button from "@/components/Button";
import CookieBanner from "@/components/Card";
import ChevronLeft from "@/icons/ChevronLeft";
import ChevronRight from "@/icons/ChevronRight";
import meta from "src/data/meta";
import Navigation from "src/components/Navigation";
import ContentWrapper from "src/components/ContentWrapper";
import { services } from "../src/data/services/overview";
import useGlobalContext from "../src/context/hooks/useGlobalContext";
import companyData from "../src/data/companyData";

import { API_SLUG } from "../src/data/api";

const graphcms = new GraphQLClient(API_SLUG);

const SubTitle = styled(Heading)`
  margin: 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 12px;
`;

const RowOdd = styled.div`
  flex-direction: column-reverse;
  margin-bottom: 32px;
  img {
    margin-bottom: 24px;
  }
  @media screen and (min-width: ${(props) =>
      props.theme.grid.breakpointSmall}px) {
    flex-direction: row;
    img {
      margin-bottom: 0;
    }
  }
`;

const RowEven = styled.div`
  flex-direction: column;
  img {
    margin-bottom: 24px;
  }
  @media screen and (min-width: ${(props) =>
      props.theme.grid.breakpointSmall}px) {
    margin-top: -125px;
    flex-direction: row;
    img {
      margin-bottom: 0;
    }
  }
`;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Section = styled.div`
  padding-top: 48px;
  padding-bottom: 48px;
  @media screen and (min-width: 768px) {
    padding-top: 96px;
    padding-bottom: 96px;
  }
`;

const Sliderbutton = styled.div`
  display: flex;
`;

const myArrow = ({ type, onClick, isEdge }) => {
  const pointer =
    type === "PREV" ? (
      <ChevronLeft size="16px" />
    ) : (
      <ChevronRight size="16px" />
    );

  if (isEdge) {
    return <></>;
  }

  return (
    <Sliderbutton onClick={onClick} disabled={isEdge}>
      {pointer}
    </Sliderbutton>
  );
};

const Home = ({ instagramPosts, realisations }) => {
  const { isMobile } = useGlobalContext();
  const [slicedRealisations, setSlicedRealisations] = useState(realisations);

  useEffect(() => {
    const realisationLength = isMobile ? 2 : 4;
    setSlicedRealisations(realisations.slice(0, realisationLength));
  }, [isMobile]);

  return (
    <div>
      <Head>
        <title>{companyData.companyName} - Home</title>
        <meta
          name="description"
          content={`${companyData.companyName} - Parket vloeren, plaatsing en onderhoud`}
        />
        <meta name="viewport" content={meta.viewport} />
      </Head>
      <Hero backgroundImage="images/hero.jpg" />
      <Navigation />
      <ContentWrapper>
        <CookieBanner />

        {/* Intro */}
        <Section as={Box}>
          <Grid container>
            <RowOdd as={Grid} row>
              <Grid
                item
                xs={12}
                sm={6}
                lg={5}
                flex
                justifyContent="flex-start"
                flexDirection="column"
              >
                <Heading
                  level={2}
                  textTransform="uppercase"
                  show={{ xs: false, sm: true }}
                  mb={4}
                >
                  Over Wooddesign
                </Heading>
                <Paragraph mb={2}>
                  Na een jaartje in het bedrijf van m'n vader te hebben gewerkt,
                  ben ik in 1997 een eenmanszaak begonnen in het leveren en
                  plaatsen van traditionele parketvloeren.
                </Paragraph>
                <Paragraph mb={2}>
                  Vanaf 1999 ben ik, naast parketvloeren, ook gestart met het
                  plaatsen van houten gevelbekleding en terrassen, en dit bleek
                  al snel een meerwaarde te zijn voor de groei van het bedrijf.
                </Paragraph>
                <Paragraph>
                  Eind 2005 ben ik overgeschakeld van eenmanszaak naar een bvba
                  en heb ik 4 vaste werknemers in dienst.
                </Paragraph>
              </Grid>
              <Grid item xs={12} sm={6} lg={{ width: 5, push: 2 }}>
                <Heading
                  level={2}
                  textTransform="uppercase"
                  show={{ xs: true, sm: false }}
                >
                  Over Wooddesign
                </Heading>
                <Image src="images/intro2.jpeg" objectFit height="550px" />
              </Grid>
            </RowOdd>

            <RowEven as={Grid} row>
              <Grid item xs={12} sm={6} lg={{ width: 7 }}>
                <Image src="images/toonzaal.jpeg" objectFit height="500px" />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                lg={{ width: 4, push: 1 }}
                flex
                justifyContent="flex-end"
                flexDirection="column"
              >
                <Paragraph mb={2}>
                  Ondertussen meer dan{" "}
                  <strong style={{ fontWeight: 500 }}>20 jaar</strong> en{" "}
                  <strong style={{ fontWeight: 500 }}>
                    duizenden vierkante meters{" "}
                  </strong>
                  verder, onderscheiden we ons van velen.
                </Paragraph>
                <Paragraph mb={5}>
                  Niet alleen door onze{" "}
                  <strong style={{ fontWeight: 500 }}>
                    jarenlange ervaring
                  </strong>{" "}
                  en materialenkennis, maar eveneens door het gebruik van
                  kwaliteitsvolle producten gecombineerd met een hoge
                  afwerkingsgraad en professionele dienstverlening , ook na de
                  plaatsing!
                </Paragraph>
                <Paragraph mb={5}>
                  In onze <strong style={{ fontWeight: 500 }}>toonzaal</strong>{" "}
                  te Kontich vind je een uitgebreid gamma aan parketvloeren,
                  houten terrassen en verschillende soorten gevelbekledingen,
                  gaande van hout en aluminium tot plaatmaterialen zoals Trespa,
                  Eternit, Rockpanel...
                </Paragraph>
              </Grid>
            </RowEven>
          </Grid>
        </Section>

        {/* Diensten */}
        <Section as={Box} backgroundColor="#f5f5f5">
          <Grid container style={{ overflow: "hidden" }}>
            <Grid row mb={8} flex flexDirection="column" alignItems="center">
              <Heading level={2}>Onze diensten</Heading>
              <Paragraph>Wat kunnen wij voor u doen</Paragraph>
            </Grid>

            <Carousel
              breakPoints={breakPoints}
              renderArrow={myArrow}
              renderPagination={() => <></>}
              itemPadding={[0, 10]}
            >
              {services.map((service) => (
                <div key={service.title}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    objectFit
                    height="250px"
                  />
                  <Heading level={3} color="#464646">
                    {service.title}
                  </Heading>
                  <Paragraph>{service.description}</Paragraph>
                </div>
              ))}
            </Carousel>
          </Grid>
        </Section>

        {/* WEBSHOP */}
        <Section as={Box}>
          <Grid container>
            <RowOdd as={Grid} row>
              <Grid
                item
                xs={12}
                sm={6}
                lg={4}
                flex
                justifyContent="center"
                flexDirection="column"
              >
                <Heading
                  level={2}
                  textTransform="uppercase"
                  show={{ xs: false, sm: true }}
                >
                  Webshop
                </Heading>
                <Paragraph mb={6}>
                  Begin 2020 hebben we een webshop opgestart als extra service
                  naar zowel bestaande als nieuwe klanten. Hier vind je diverse{" "}
                  <strong style={{ fontWeight: 500 }}>merkproducten</strong>{" "}
                  voor zowel plaatsing als het onderhoud van parket, gevel en
                  terras.
                </Paragraph>
                <Button
                  outline
                  as={Link}
                  href="http://shop.wooddesign.be"
                  target="_blank"
                  block={isMobile}
                >
                  Bekijk onze webshop
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} lg={{ width: 7, push: 1 }}>
                <Heading
                  level={2}
                  textTransform="uppercase"
                  show={{ xs: true, sm: false }}
                >
                  Het bedrijf
                </Heading>
                <Image src="images/webshop.png" objectFit height="450px" />
              </Grid>
            </RowOdd>
          </Grid>
        </Section>

        {/* REALISATIES */}
        <Section as={Box} backgroundColor="#f5f5f5">
          <Grid container>
            <Grid row mb={8} flex flexDirection="column" alignItems="center">
              <Heading level={2}>Onze realisaties</Heading>
            </Grid>
            <Grid row>
              {slicedRealisations &&
                slicedRealisations.map((item) => {
                  return (
                    <Grid item xs={12} sm={6} md={6} mb={8} key={item.slug}>
                      <Link
                        href={`/realisaties/${encodeURIComponent(item.slug)}`}
                        type="hidden"
                      >
                        <Image
                          src={item.images[0].url}
                          alt={item.title}
                          objectFit
                          height="250px"
                          hover="transform: scale(1.05);"
                        />
                        {item.category && (
                          <SubTitle
                            level={4}
                            fontFamily="secondary"
                            fontWeight="regular"
                            color="#b3b3b3"
                          >
                            {item.category}
                          </SubTitle>
                        )}
                        {item.title && (
                          <Heading level={3} color="#464646">
                            {item.title}
                          </Heading>
                        )}
                      </Link>
                    </Grid>
                  );
                })}
            </Grid>
            <Grid row>
              <Grid item xs={12} flex justifyContent="flex-end">
                <Button outline as={Link} href="/realisaties" block={isMobile}>
                  Bekijk alle realisaties
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Section>

        {/* INSTAGRAM */}
        {instagramPosts && (
          <Box py={11}>
            <Box
              backgroundColor="#f5f5f5"
              height="300px"
              style={{
                position: "absolute",
                top: 0,
                width: "100%",
                height: "65%",
              }}
            />
            <Grid container>
              <Grid row mb={8} flex flexDirection="column" alignItems="center">
                <Heading level={2}>
                  <Link
                    type="hidden"
                    href="https://www.instagram.com/wooddesignbvba/"
                  >
                    Instagram
                  </Link>
                </Heading>
                <Paragraph>Laat je inspireren</Paragraph>
              </Grid>
              <Grid row>
                {instagramPosts.map((item) => {
                  return (
                    <Grid item xs={6} sm={4} md={3} key={item.id} mb={6}>
                      <Link
                        href="https://www.instagram.com/wooddesignbvba/"
                        target="_blank"
                      >
                        <Image
                          src={item.media_url}
                          alt={`Instagram feed ${item.username} - ${item.id}`}
                          hover="transform: scale(1.05)"
                        />
                      </Link>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Box>
        )}
      </ContentWrapper>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  let { realisations } = await graphcms.request(
    `{
      realisations(orderBy: createdAt_DESC, first: 4) {
        title
        slug
        categories
        customer
        images{
          url
        }
      }
    }`
  );

  return {
    props: {
      realisations: realisations || "No realisations",
    },
  };
}

export default Home;
