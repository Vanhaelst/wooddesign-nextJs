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
import { API_SLUG } from "../src/data/api";
import { canonicalUrl } from "../src/utils/seo";
import { CallToAction } from "../src/components/CallToAction";
import useInfiniteScroll from "../src/hooks/useInfiniteScroll";

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
        <title>Vinylvloeren Antwerpen & Kontich | Wooddesign</title>
        <meta
          name="description"
          content="Vinylvloer laten plaatsen in Antwerpen, Kontich en omstreken? Wooddesign biedt waterbestendige, onderhoudsvriendelijke vinylvloeren in hout- en steeneffecten."
        />
        <link rel="canonical" href={canonicalUrl("/vinyl")} />
        <meta
          property="og:title"
          content="Vinylvloeren Antwerpen & Kontich | Wooddesign"
          key="title"
        />
        <meta
          property="og:description"
          content="Vinylvloer laten plaatsen in Antwerpen, Kontich en omstreken? Wooddesign biedt waterbestendige, onderhoudsvriendelijke vinylvloeren in hout- en steeneffecten."
        />
        <meta property="og:url" content={canonicalUrl("/vinyl")} />
      </Head>

      <Navigation />
      <Breadcrumbs title="Vinyl">
        <Paragraph className="mb-3">
          Op zoek naar een vloer die zowel stijlvol als praktisch is?
          Vinylvloeren bieden de perfecte combinatie van esthetiek en
          functionaliteit voor elke ruimte. Of u nu een moderne,
          onderhoudsvriendelijke vloer zoekt voor uw woonkamer, keuken of
          badkamer, onze vinylvloeren zijn de ideale keuze. Ze zijn verkrijgbaar
          in verschillende stijlen, kleuren en patronen, van hout- en
          steeneffecten tot strakke, moderne designs.
        </Paragraph>
        <Paragraph className="mb-3">
          Met de voordelen van waterbestendigheid, eenvoudige installatie en
          langdurige duurzaamheid, bieden onze vinylvloeren een uitstekende
          oplossing voor iedere woning of commercieel project. Ontdek onze
          uitgebreide collectie, laat u inspireren door talloze mogelijkheden en
          vind de vinylvloer die perfect past bij uw interieur. Wij staan klaar
          om u te helpen met advies, levering en installatie.
        </Paragraph>
        <Paragraph className="mb-3">
          Geef uw vloer een nieuwe look met de veelzijdigheid van vinyl!
        </Paragraph>

        {/*
        <Paragraph>
          <Link
            href="https://coretecfloors.com/nl-nl"
            isExternal
            color={"#000000"}
          >
            Coretec Floors <ExternalLinkIcon mx="2px" />
          </Link>
          <span className="mx-4">|</span>
          <Link
            href="https://parquetvinyl.be/nl/vinylvloeren"
            isExternal
            color={"#000000"}
          >
            Parquetvinyl <ExternalLinkIcon mx="2px" />
          </Link>
        </Paragraph>
       */}
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
