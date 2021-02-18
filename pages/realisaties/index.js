import React from "react";
import Head from "next/head";
import { GraphQLClient } from 'graphql-request';
import meta from "src/data/meta";
import Navigation from "src/components/Navigation";
import Grid from "@/components/Grid";
import Masonry from "../../src/components/Masonry";
import Footer from "../../src/components/Footer";
import Breadcrumbs from "../../src/components/Breadcrumbs";
import ContentWrapper from "../../src/components/ContentWrapper";

const Realisations = ({ realisations }) => {

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
          <Grid row>
            <Grid item xs={12}>
              <Masonry items={realisations} />
            </Grid>
          </Grid>
        </Grid>
      </ContentWrapper>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
    const graphcms = new GraphQLClient('https://api-eu-central-1.graphcms.com/v2/ckl3m5wq24osf01z8ch6h9vwq/master');

    let { realisations } = await graphcms.request(
        `
            {
            realisations {
                description {
                  text
                }
                slug
                title
                categories
                images{
                  url
                }
              }
          }          
        `
    );

    return {
        props: {
            realisations: realisations || 'No realisations'
        },
    };
}

export default Realisations;
