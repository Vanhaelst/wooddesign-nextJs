import React, { useState } from "react";
import { GraphQLClient } from "graphql-request";
import Head from "next/head";
import meta from "src/data/meta";
import Navigation from "src/components/Navigation";
import Grid from "@/components/Grid";
import Footer from "../src/components/Footer";
import Breadcrumbs from "../src/components/Breadcrumbs";
import ContentWrapper from "../src/components/ContentWrapper";
import { ServiceDetail } from "../src/components/Service/Detail";
import terrassen from "../src/data/services/terrassen";
import companyData from "../src/data/companyData";
import { API_SLUG } from "../src/data/api";
import Masonry from "../src/components/Masonry";
import Button from "@/components/Button";
import { Paragraph } from "../publipirates-react";

const graphcms = new GraphQLClient(API_SLUG);
const category = ["Terras"];
const enums = {
  INITAL_AMOUNT: 9,
  EXTRA_AMOUNT: 6,
  ALL: "all",
};

const Terras = ({ realisations, pagination }) => {
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
        <title>{companyData.companyName} - Terras</title>
        <meta
          name="description"
          content={`${companyData.companyName} - Terras`}
        />
        <meta
          property="og:title"
          content="Wooddesign - Diensten - Terras"
          key="title"
        />
      </Head>
      <Navigation />
      <Breadcrumbs title="Terras">
        <Paragraph>
          Bij Wooddesign creëren we duurzame en stijlvolle houten terrassen die
          perfect aansluiten bij jouw buitenruimte. Of het nu gaat om een tuin,
          dakterras of patio, we bieden maatwerkoplossingen met hoogwaardige
          houtsoorten en een afwerking die lang meegaat. Ons vakbekwame team
          begeleidt je door het hele proces, van het ontwerp tot de installatie,
          met oog voor detail en kwaliteit. Een houten terras voegt niet alleen
          waarde toe aan je woning, maar biedt ook een warme en natuurlijke
          uitstraling. Neem contact met ons op voor jouw ideale terras!
        </Paragraph>
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

export default Terras;
