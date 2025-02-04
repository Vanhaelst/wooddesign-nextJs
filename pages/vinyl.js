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
import { API_SLUG } from "../src/data/api";

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

    data.then((data) => {
      setPaginatedRealisations((prevState) => [
        ...prevState,
        ...data.realisations,
      ]);
      setNextPage(() => data?.realisationsConnection?.pageInfo?.hasNextPage);
    });
  };

  return (
    <div>
      <Head>
        <title>{companyData.companyName} - Parket</title>
        <meta
          name="description"
          content={`${companyData.companyName} - Vinylvloer`}
        />
        <meta
          property="og:title"
          content="Wooddesign - Diensten - Vinylvloer"
          key="title"
        />
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
            <Grid item xs={12}>
              <Masonry items={paginatedRealisations} />
            </Grid>
            {hasNextPage && (
              <Grid item xs={12}>
                <Button appearance="primary" onClick={handleLoadMore}>
                  Load more
                </Button>
              </Grid>
            )}
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
