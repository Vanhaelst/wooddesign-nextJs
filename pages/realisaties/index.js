import React, { useState } from "react";
import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import meta from "src/data/meta";
import { API_SLUG } from "src/data/api";
import Navigation from "src/components/Navigation";
import Grid from "@/components/Grid";
import Masonry from "../../src/components/Masonry";
import Footer from "../../src/components/Footer";
import Breadcrumbs from "../../src/components/Breadcrumbs";
import ContentWrapper from "../../src/components/ContentWrapper";
import Button from "@/components/Button";
import Link from "@/components/Link";
import Box from "@/components/Box";

const graphcms = new GraphQLClient(API_SLUG);
const enums = {
  INITAL_AMOUNT: 9,
  EXTRA_AMOUNT: 6,
  ALL: "all",
};

const Realisations = ({ realisations, __type }) => {
  const [dynamicRealisations, setDynamicRealisations] = useState(realisations);
  const [category, setCategory] = useState(false);

  const handleCategoryChange = (value) => {
    if (value === enums.ALL) {
      setCategory(false);
    } else {
      setCategory(value);
    }
    getCategoryData(value);
  };

  const getCategoryData = (value) => {
    const data = graphcms.request(`{
      realisations(
        first: ${enums.INITAL_AMOUNT} 
        ${
          value !== enums.ALL
            ? `, where: { categories_contains_all: [${value}] }`
            : ""
        }
      ) {
        title
        slug
        categories
        customer
        images{
          url
        }
      }
    }`);

    data.then((data) => {
      setDynamicRealisations([...data.realisations]);
    });
  };

  const handleLoadMore = () => {
    const data = graphcms.request(`{
      realisations(
        first: ${enums.EXTRA_AMOUNT}, 
        skip: ${dynamicRealisations.length} 
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
    }`);

    data.then((data) => {
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
            <Grid item flex mb={9}>
              <Box pr={5}>
                <Link
                  type={category ? "hidden" : "branded"}
                  fontFamily="secondary"
                  onClick={() => handleCategoryChange(enums.ALL)}
                >
                  Alle
                </Link>
              </Box>

              {__type?.enumValues?.map(({ name }) => {
                return (
                  <Box pr={5}>
                    <Link
                      type={category === name ? "branded" : "hidden"}
                      fontFamily="secondary"
                      onClick={() => handleCategoryChange(name)}
                    >
                      {name}
                    </Link>
                  </Box>
                );
              })}
            </Grid>

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
      realisations(first: ${enums.INITAL_AMOUNT}) {
        title
        slug
        categories
        customer
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
