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
import { CallToAction } from "../src/components/CallToAction";

const graphcms = new GraphQLClient(API_SLUG);
const category = ["Parket"];
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
          content={`${companyData.companyName} - Parket`}
        />
        <meta
          property="og:title"
          content="Wooddesign - Diensten - Parket"
          key="title"
        />
      </Head>

      <Navigation />
      <Breadcrumbs title="Parket">
        <Paragraph className="mb-3">
          Bij ons vindt u een uitgebreide selectie van hoogwaardige
          parketvloeren die uw interieur een tijdloze en warme uitstraling
          geven. Of u nu op zoek bent naar een klassieke eiken vloer, een
          moderne visgraatvloer of een unieke houtsoort, wij bieden de perfecte
          oplossing voor iedere smaak en ruimte. Met jarenlange ervaring in de
          vloerenbranche staan wij garant voor vakmanschap, duurzaamheid en
          persoonlijk advies.
        </Paragraph>
        <Paragraph className="mb-3">
          Verken onze collectie, ontdek de mogelijkheden voor uw woning of
          project, en laat u inspireren door de schoonheid van parketvloeren.
        </Paragraph>
        <Paragraph>
          Wij helpen u graag verder bij het maken van de juiste keuze in onze
          toonzaal te Kontich
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

      <CallToAction
        title="Graag een offerte?"
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
