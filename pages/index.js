import React from "react";
import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import styled from "styled-components";
import Hero from "@/components/Hero";
import Heading from "@/components/Heading";
import Grid from "@/components/Grid";
import Paragraph from "@/components/Paragraph";
import Footer from "src/components/Footer";
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
import { Row } from "../src/components/Row";

const graphcms = new GraphQLClient(API_SLUG);

const RowOdd = styled.div`
  margin-bottom: 32px;
  align-items: center;
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
  align-items: center;
  flex-direction: column-reverse;
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

const Home = () => {
  const { isMobile } = useGlobalContext();

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
      <Navigation />
      <Hero backgroundImage="images/hero.jpg" />
      <ContentWrapper>
        <CookieBanner />

        <Section as={Box}>
          {/* Intro */}
          <Grid container>
            <Row isEven={false} image="images/intro2.jpeg">
              <Heading level={2} textTransform="uppercase" mb={4}>
                Welkom bij WoodDesign BVBA
              </Heading>
              <Paragraph mb={2}>
                Al meer dan 20 jaar is WoodDesign BVBA een toonaangevend bedrijf
                in de levering en plaatsing van traditionele parketvloeren,
                houten gevelbekleding en terrassen. Wat begon als een
                eenmanszaak in 1997, is uitgegroeid tot een bloeiend
                familiebedrijf met een team van ervaren vakmensen.
              </Paragraph>
              <Paragraph mb={6}>
                Onze kracht ligt in de combinatie van jarenlange expertise,
                diepgaande materiaalkennis en het gebruik van alleen de beste
                kwaliteitsproducten. Of het nu gaat om een stijlvolle
                parketvloer, duurzame houten gevelbekleding of een prachtig
                terras, wij staan garant voor een hoog afwerkingsniveau en een
                service die verder reikt dan de plaatsing.
              </Paragraph>
            </Row>
            <Row isEven={true} image="images/toonzaal.jpeg">
              <Paragraph mb={6}>
                Breng een bezoek aan onze toonzaal in Kontich en ontdek ons
                uitgebreide assortiment, van natuurlijke houtsoorten tot moderne
                materialen zoals Trespa, Eternit en Rockpanel. Bij WoodDesign
                BVBA werken we samen met u om uw project tot in de perfectie te
                realiseren.
              </Paragraph>
              <Button outline as={Link} href="/contact" block={isMobile}>
                Maak een afspraak
              </Button>
            </Row>

            {/* Diensten */}
            {services.map((service, index) => (
              <Row isEven={index % 2 !== 0} image={service.image}>
                <Heading level={3} color="#464646">
                  {service.title}
                </Heading>
                <Paragraph mb={6}>{service.description}</Paragraph>
                <Button outline as={Link} href={service.slug} block={isMobile}>
                  Meer info
                </Button>
              </Row>
            ))}

            {/* WEBSHOP */}
            <Row isEven={true} image="images/webshop.png">
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
                <strong style={{ fontWeight: 500 }}>merkproducten</strong> voor
                zowel plaatsing als het onderhoud van parket, gevel en terras.
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
            </Row>
          </Grid>
        </Section>
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
    }`,
  );

  return {
    props: {
      realisations: realisations || "No realisations",
    },
  };
}

export default Home;
