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
const category = ["Gevel"];
const enums = {
  INITAL_AMOUNT: 9,
  EXTRA_AMOUNT: 6,
  ALL: "all",
};

const Gevel = ({ realisations, pagination }) => {
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
        <title>{companyData.companyName} - Gevel</title>
        <meta
          name="description"
          content={`${companyData.companyName} - Gevel`}
        />
        <meta
          property="og:title"
          content="Wooddesign - Diensten - Gevel"
          key="title"
        />
      </Head>
      <Navigation />
      <Breadcrumbs title="Gevel">
        <Paragraph className="mb-3">
          Bij ons vindt u de perfecte oplossing om de buitenkant van uw woning
          of project te verfraaien en te beschermen. Gevelbekleding speelt niet
          alleen een cruciale rol in de uitstraling van uw gebouw, maar biedt
          ook bescherming tegen weersinvloeden en bevordert de
          energie-efficiëntie. Of u nu kiest voor houten, aluminium, zinken,
          kunststof of innovatieve gevelsystemen, wij bieden een breed scala aan
          materialen en stijlen die aansluiten bij uw wensen en het karakter van
          uw woning.
        </Paragraph>
        <Paragraph className="mb-3">
          Met onze jarenlange ervaring in gevelbekleding staan wij voor
          kwaliteit, duurzaamheid en maatwerk. Wij adviseren u graag over de
          beste keuze voor uw gevel, zodat deze zowel esthetisch als functioneel
          optimaal presteert.
        </Paragraph>
        <Paragraph className="mb-3">
          Ontdek de diverse mogelijkheden in onze toonzaal te Kontich en geef uw
          gevel de uitstraling die het verdient!
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

export default Gevel;
