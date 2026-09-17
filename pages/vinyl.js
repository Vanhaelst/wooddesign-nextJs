import React, { useState } from "react";
import { GraphQLClient } from "graphql-request";
import Head from "next/head";
import meta from "src/data/meta";
import Navigation from "src/components/Navigation";
import Grid from "@/components/Grid";
import Footer from "../src/components/Footer";
import Breadcrumbs from "../src/components/Breadcrumbs";
import ContentWrapper from "../src/components/ContentWrapper";
import companyData from "../src/data/companyData";
import { Paragraph } from "../publipirates-react";
import Masonry from "../src/components/Masonry";
import Button from "@/components/Button";
import Link from "@/components/Link";
import { API_SLUG } from "../src/data/api";
import { canonicalUrl, faqJsonLd } from "../src/utils/seo";
import { CallToAction } from "../src/components/CallToAction";
import Faq from "../src/components/Faq";
import useInfiniteScroll from "../src/hooks/useInfiniteScroll";

const faqItems = [
  {
    question: "Wat kost een vinylvloer laten leggen?",
    answer:
      "De prijs hangt af van het gekozen type vinyl, de afwerking en de oppervlakte. We bezorgen u graag een vrijblijvende offerte op maat na een kort adviesgesprek of bezoek aan onze toonzaal.",
  },
  {
    question: "Kan een vinylvloer op een bestaande vloer geplaatst worden?",
    answer:
      "In de meeste gevallen wel. Vinyl wordt zwevend geplaatst op een vlakke, stabiele ondervloer, waardoor het vaak over bestaand tegelwerk of een andere harde vloer kan worden gelegd. We bekijken dit graag ter plaatse.",
  },
  {
    question: "Is een vinylvloer geschikt voor de badkamer of keuken?",
    answer:
      "Ja. Vinyl is waterbestendig en daardoor uitermate geschikt voor vochtige ruimtes zoals badkamer, keuken of wasplaats, naast woonkamer en slaapkamer.",
  },
  {
    question: "In welke regio plaatst Wooddesign vinylvloeren?",
    answer:
      "Vanuit onze showroom in Kontich plaatsen we vinylvloeren in de hele regio, onder andere in Antwerpen, Mechelen, Lier en Edegem, voor zowel particulieren als bouwprojecten.",
  },
];

const graphcms = new GraphQLClient(API_SLUG);
const category = ["vinyl"];
const enums = {
  INITAL_AMOUNT: 9,
  EXTRA_AMOUNT: 6,
  ALL: "all",
};

const Services = ({ realisations, pagination }) => {
  const [paginatedRealisations, setPaginatedRealisations] =
    useState(realisations);
  const [hasNextPage, setNextPage] = useState(pagination.hasNextPage);

  const handleLoadMore = () => {
    const data = graphcms.request(`{
      realisations(
        first: ${enums.EXTRA_AMOUNT}, 
        skip: ${paginatedRealisations.length} 
        orderBy: createdAt_DESC
        ${category ? `, where: { categories_contains_all: [${category}] }` : ""}
      ) {
        title
        slug
        categories
        customer
        images{
          url
        }
      }
      realisationsConnection(
        first: ${enums.EXTRA_AMOUNT}, 
        skip: ${paginatedRealisations.length} 
        where: { categories_contains_all: [${category}] }
      ) {
        pageInfo {
          hasNextPage
        }
      }
    }`);

    return data.then((data) => {
      setPaginatedRealisations((prevState) => [
        ...prevState,
        ...data.realisations,
      ]);
      setNextPage(() => data?.realisationsConnection?.pageInfo?.hasNextPage);
    });
  };

  const loadMoreRef = useInfiniteScroll(handleLoadMore, hasNextPage);

  return (
    <div>
      <Head>
        <title>Vinylvloer Laten Leggen Antwerpen & Kontich | Wooddesign</title>
        <meta
          name="description"
          content="Vinylvloer laten leggen in Antwerpen, Kontich en omstreken? Wooddesign plaatst waterbestendige, onderhoudsvriendelijke vinylvloeren in hout- en steeneffecten."
        />
        <link rel="canonical" href={canonicalUrl("/vinyl")} />
        <meta
          property="og:title"
          content="Vinylvloer Laten Leggen Antwerpen & Kontich | Wooddesign"
          key="title"
        />
        <meta
          property="og:description"
          content="Vinylvloer laten leggen in Antwerpen, Kontich en omstreken? Wooddesign plaatst waterbestendige, onderhoudsvriendelijke vinylvloeren in hout- en steeneffecten."
        />
        <meta property="og:url" content={canonicalUrl("/vinyl")} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd(faqItems)),
          }}
        />
      </Head>

      <Navigation />
      <Breadcrumbs title="Vinylvloer laten leggen, stijlvol en onderhoudsvriendelijk">
        <Paragraph className="mb-3">
          Op zoek naar een vloer die zowel stijlvol als praktisch is? Wij
          plaatsen vinylvloeren die de perfecte combinatie bieden van esthetiek
          en functionaliteit voor elke ruimte. Of u nu een moderne,
          onderhoudsvriendelijke vloer zoekt voor uw woonkamer, keuken of
          badkamer, een vinylvloer laten leggen is de ideale keuze. Verkrijgbaar
          in verschillende stijlen, kleuren en patronen, van hout- en
          steeneffecten tot strakke, moderne designs.
        </Paragraph>
        <Paragraph className="mb-3">
          Met de voordelen van waterbestendigheid, eenvoudige installatie en
          langdurige duurzaamheid, is vinyl een uitstekende oplossing voor
          iedere woning of commercieel project. Ontdek onze uitgebreide
          collectie, laat u inspireren door talloze mogelijkheden en vind de
          vinylvloer die perfect past bij uw interieur. Wij staan klaar om u te
          helpen met advies, levering en installatie in Antwerpen, Kontich en
          omstreken.
        </Paragraph>
        <Paragraph>
          Naast vinyl plaatsen we ook{" "}
          <Link href="/parket" type="hidden">
            parketvloeren
          </Link>
          ,{" "}
          <Link href="/gevel" type="hidden">
            gevelbekleding
          </Link>{" "}
          en{" "}
          <Link href="/terras" type="hidden">
            houten terrassen
          </Link>
          . Zo bent u voor uw volledige project aan één specialist verbonden.
        </Paragraph>
      </Breadcrumbs>

      <ContentWrapper>
        <Grid container>
          <Grid row mb={5}>
            {paginatedRealisations?.length === 0 && (
              <Grid item xs={12}>
                <Masonry items={paginatedRealisations} />
              </Grid>
            )}
            {hasNextPage && (
              <Grid item xs={12}>
                <div ref={loadMoreRef} />
              </Grid>
            )}
          </Grid>
        </Grid>
      </ContentWrapper>

      <CallToAction
        title="Graag een offerte voor uw vinyl?"
        description="Benieuwd naar de mogelijkheden voor jouw project? Vraag vandaag nog een vrijblijvende offerte aan en ontdek hoe wij jou kunnen helpen."
        button={{ cta: "Ik wil een offerte", href: "/contact" }}
      />

      <ContentWrapper>
        <Grid container>
          <Grid row>
            <Grid item xs={12}>
              <Faq
                title="Veelgestelde vragen over vinylvloeren"
                items={faqItems}
              />
            </Grid>
          </Grid>
        </Grid>
      </ContentWrapper>

      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  let { realisations, realisationsConnection } = await graphcms.request(
    `{
      realisations(
        first: ${enums.INITAL_AMOUNT}, 
        orderBy: createdAt_DESC, 
        where: { categories_contains_all: [${category}] }
      ) {
        title
        slug
        categories
        customer
        images{
          url
        }
      }
      
      realisationsConnection(
        first: ${enums.INITAL_AMOUNT}, 
        orderBy: createdAt_DESC
        where: { categories_contains_all: [${category}] }
      ) {
        pageInfo {
          hasNextPage
        }
      }
    }`,
  );

  return {
    props: {
      realisations: realisations || "No realisations",
      pagination: realisationsConnection?.pageInfo || {
        hasNextPage: false,
      },
    },
  };
}

export default Services;
