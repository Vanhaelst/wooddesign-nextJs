import React, { useState } from "react";
import { GraphQLClient } from "graphql-request";
import Head from "next/head";
import meta from "src/data/meta";
import Navigation from "src/components/Navigation";
import Grid from "@/components/Grid";
import Footer from "../src/components/Footer";
import Breadcrumbs from "../src/components/Breadcrumbs";
import companyData from "../src/data/companyData";
import { Paragraph } from "../publipirates-react";
import Masonry from "../src/components/Masonry";
import Button from "@/components/Button";
import { API_SLUG } from "../src/data/api";
import ContentWrapper from "../src/components/ContentWrapper";

const graphcms = new GraphQLClient(API_SLUG);
const category = ["wand"];
const enums = {
  INITAL_AMOUNT: 9,
  EXTRA_AMOUNT: 6,
  ALL: "all",
};

const Wand = ({ realisations, pagination }) => {
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
        <title>{companyData.companyName} - Wand</title>
        <meta
          name="description"
          content={`${companyData.companyName} - Wand`}
        />
        <meta
          property="og:title"
          content="Wooddesign - Diensten - Wand"
          key="title"
        />
      </Head>
      <Navigation />
      <Breadcrumbs title="Wand" variant={1}>
        <Paragraph className="mb-3">
          Een comfortabele geluidsomgeving begint bij de juiste wandoplossing.
          Onze akoestische wanden zijn speciaal ontworpen om geluidsvervuiling
          te verminderen, de akoestiek te verbeteren en tegelijkertijd een
          stijlvol element toe te voegen aan uw ruimte. Of het nu gaat om een
          kantoor, vergaderruimte, thuisbioscoop of een andere ruimte waar
          geluidsbeheer belangrijk is, onze akoestische wandpanelen bieden de
          perfecte balans tussen functionaliteit en design.
        </Paragraph>
        <Paragraph className="mb-3">
          Onze collectie omvat innovatieve materialen die geluid dempen,
          reflectie verminderen en zorgen voor een rustige en prettige sfeer.
          Verkrijgbaar in verschillende kleuren, texturen en ontwerpen, kunnen
          de akoestische wanden naadloos worden geïntegreerd in elk interieur,
          van moderne werkruimtes tot klassieke woonkamers.
        </Paragraph>
        <Paragraph className="mb-3">
          Ontdek de mogelijkheden van akoestische wanden en verbeter niet alleen
          de geluidskwaliteit in uw ruimte, maar geef uw interieur ook een
          unieke uitstraling.
        </Paragraph>
        <Paragraph>
          Wij adviseren u graag over de beste oplossing voor uw behoeften en
          zorgen voor een professionele installatie voor optimaal resultaat.
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

export default Wand;
