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
        <Paragraph className="mb-3">
          Of u nu een gezellige zithoek, een stijlvolle loungeplek of een
          functionele buitenruimte wilt creëren, wij bieden de ideale
          oplossingen voor uw terras. Met een breed assortiment aan houten
          planken, bamboe , composiet materialen en andere hoogwaardige
          afwerkingen, helpen wij u de perfecte basis te leggen voor uw
          buitenbeleving.
        </Paragraph>
        <Paragraph className="mb-3">
          Een goed terras is meer dan alleen een vloer; het is de plek waar u
          ontspant, geniet van het buitenleven en samenkomt met vrienden en
          familie. Wij adviseren u graag over de materialen die het beste bij uw
          wensen en de specifieke eisen van uw buitenruimte passen.
        </Paragraph>
        <Paragraph className="mb-3">
          Laat u inspireren door onze stijlvolle en duurzame terrasopties in
          onze toonzaal te Kontich en geef uw buitenruimte de uitstraling die
          het verdient!
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
