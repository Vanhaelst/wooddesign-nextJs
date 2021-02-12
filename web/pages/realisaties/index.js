import React from "react";
import Head from "next/head";
import meta from "src/data/meta";
import realisations from "src/data/realisations";
import Navigation from "src/components/Navigation";
import Grid from "@/components/Grid";
import Masonry from "../../src/components/Masonry";
import Footer from "../../src/components/Footer";
import Breadcrumbs from "../../src/components/Breadcrumbs";
import ContentWrapper from "../../src/components/ContentWrapper";

const Realisations = () => {
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

export default Realisations;
