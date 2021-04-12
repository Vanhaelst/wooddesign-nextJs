import React, { useState } from "react";
import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import meta from "src/data/meta";
import Navigation from "src/components/Navigation";
import Grid from "@/components/Grid";
import Masonry from "../../src/components/Masonry";
import Footer from "../../src/components/Footer";
import Breadcrumbs from "../../src/components/Breadcrumbs";
import ContentWrapper from "../../src/components/ContentWrapper";
import Button from "@/components/Button";

const count = 9;
const graphcms = new GraphQLClient(
  "https://api-eu-central-1.graphcms.com/v2/ckl3m5wq24osf01z8ch6h9vwq/master"
);

const Realisations = ({ realisations, __type }) => {
  console.log("categories", __type);
  const [dynamicRealisations, setDynamicRealisations] = useState(realisations);
  const [category, setCategory] = useState(false);

  const handleCategoryChange = () => {};

  const handleLoadMore = () => {
    const clickData = graphcms.request(
      `
            {
               realisations(first: 10, skip: ${count}) {
                   title
                   slug
                   categories
                    images{
                      url
                    }
              }
          }          
        `
    );

    clickData.then((data) => {
      console.log("realisations", data, typeof data);
      setDynamicRealisations((prevState) => [
        ...prevState,
        ...data.realisations,
      ]);
    });
  };

  return (
    <div>
      <Head>
        <title>Wooddesign - Realisaties</title>
        <meta
          property="og:title"
          content="Wooddesign - Realisaties"
          key="title"
        />
      </Head>
      <Navigation />
      <Breadcrumbs page="Realisaties" variant={1} />
      <ContentWrapper>
        <Grid container>
          <Grid row mb={5}>
            {/*
            <Grid item xs={12}>
              <Button
                appearance="primary"
                outline
                onClick={handleCategoryChange}
                pr={5}
              >
                Alle
              </Button>
            </Grid>
            */}
            <Grid item xs={12}>
              <Masonry items={dynamicRealisations} />
            </Grid>
            <Grid item xs={12}>
              <Button appearance="primary" onClick={handleLoadMore}>
                Load more
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </ContentWrapper>
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  let { realisations, __type } = await graphcms.request(
    `{
      realisations(first: 9) {
        title
        slug
        categories
        images{
          url
        }
      }
      __type(name: "Category") {
        enumValues {
          name
        }
      }
    }`
  );

  return {
    props: {
      realisations: realisations || "No realisations",
      __type: __type || "No categories",
    },
  };
}

export default Realisations;
