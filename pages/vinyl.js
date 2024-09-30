import React, { useState } from "react";
import { GraphQLClient } from "graphql-request";
import Head from "next/head";
import meta from "src/data/meta";
import Navigation from "src/components/Navigation";
import Grid from "@/components/Grid";
import Footer from "../src/components/Footer";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Breadcrumbs from "../src/components/Breadcrumbs";
import ContentWrapper from "../src/components/ContentWrapper";
import companyData from "../src/data/companyData";
import { Paragraph } from "../publipirates-react";
import { Link } from "@chakra-ui/react";
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
        <Paragraph mb={4}>
          Bij Wooddesign bieden we hoogwaardige vinylvloeren die stijl,
          duurzaamheid en comfort combineren. Vinyl is een veelzijdige keuze die
          bestand is tegen vocht en slijtage, waardoor het ideaal is voor elke
          ruimte in huis. Of je nu op zoek bent naar een vloer met een houtlook
          of een moderne, strakke uitstraling, wij hebben een breed gamma om uit
          te kiezen. Ons team begeleidt je van advies tot plaatsing, met oog
          voor detail en een perfecte afwerking. Ontdek hoe vinyl jouw interieur
          kan verrijken!
        </Paragraph>
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
