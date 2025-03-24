import React from "react";
import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import styled from "styled-components";
import Heading from "@/components/Heading";
import Grid from "@/components/Grid";
import Paragraph from "@/components/Paragraph";
import Footer from "src/components/Footer";
import Box from "@/components/Box";
import Link from "@/components/Link";
import Button from "@/components/Button";
import CookieBanner from "@/components/Card";
import meta from "src/data/meta";
import Navigation from "src/components/Navigation";
import ContentWrapper from "src/components/ContentWrapper";
import { services } from "../src/data/services/overview";
import useGlobalContext from "../src/context/hooks/useGlobalContext";
import companyData from "../src/data/companyData";

import { API_SLUG } from "../src/data/api";
import { Row } from "../src/components/Row";
import { CallToAction } from "../src/components/CallToAction";

const graphcms = new GraphQLClient(API_SLUG);

const Section = styled.div`
  padding-top: 48px;
  padding-bottom: 48px;
  @media screen and (min-width: 768px) {
    padding-top: 96px;
    padding-bottom: 96px;
  }

  ${(props) =>
    props.backgroundColor &&
    `
        background-color: ${props.backgroundColor};
    `}
`;

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

      <div
        className="relative w-full h-[75vh] bg-cover bg-no-repeat bg-center flex justify-center items-center flex-col"
        style={{ backgroundImage: `url('images/hero.jpg')` }}
      >
        <div className="absolute top-90 left-0 w-full h-full bg-black/50" />
        <span className="text-xl uppercase text-white">Welkom bij </span>
        <h1 className="text-7xl uppercase text-white">Wooddesign </h1>
      </div>

      <ContentWrapper>
        <CookieBanner />

        {/* Intro */}
        <Section as={Box}>
          <Grid container>
            <Row isEven={false} image="images/intro2.jpeg">
              <Heading level={2} textTransform="uppercase" mb={4}>
                Wooddesign
              </Heading>
              <Paragraph mb={2}>
                Al meer dan 25 jaar is Wooddesign een toonaangevend bedrijf in
                de levering en plaatsing van parketvloeren, gevelbekleding en
                terrassen. Wat begon als een eenmanszaak in 1997, is uitgegroeid
                tot een bloeiend bedrijf met een team van ervaren vakmensen.
              </Paragraph>
              <Paragraph mb={6}>
                Onze kracht ligt in de combinatie van jarenlange expertise,
                diepgaande materiaalkennis en het gebruik van
                kwaliteitsproducten. Of het nu gaat om een stijlvolle
                parketvloer, duurzame gevelbekleding of een prachtig terras, wij
                staan garant voor een hoog afwerkingsniveau en een service die
                verder reikt dan de plaatsing.
              </Paragraph>
            </Row>
            <Row isEven={true} image="images/toonzaal.jpeg">
              <Paragraph mb={6}>
                Breng een bezoek aan onze toonzaal en ontdek ons uitgebreide
                assortiment van&nbsp;natuurlijke houtsoorten tot moderne
                materialen zoals Aluminium, Bamboe, Trespa, Equitone, Rockpanel,
                ...
              </Paragraph>
              <Paragraph mb={6}>
                Bij Wooddesign werken we samen om uw project te realiseren.
              </Paragraph>
              <Button outline as={Link} href="/contact" block={isMobile}>
                Maak een afspraak
              </Button>
            </Row>
          </Grid>
        </Section>

        {/* Diensten */}
        <Section as={Box} backgroundColor="#fafafa">
          <Grid container>
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
          </Grid>
        </Section>

        {/* WEBSHOP */}
        <Section as={Box}>
          <Grid container>
            <Row isEven={true} image="images/webshop.png">
              <Heading
                level={3}
                textTransform=""
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

        <CallToAction
          title="Ontdek onze webshop."
          description="Bezoek onze webshop voor een breed assortiment aan producten en materialen voor parketvloeren, gevelbekleding en terrassen. Kies voor kwalitatieve materialen en maak jouw project tot een succes!"
          button={{
            cta: "Bekijk onze webshop",
            href: "https://shop.wooddesign.be",
          }}
        />
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
