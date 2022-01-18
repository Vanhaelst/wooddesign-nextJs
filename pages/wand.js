import React from "react";
import Head from "next/head";
import meta from "src/data/meta";
import Navigation from "src/components/Navigation";
import Grid from "@/components/Grid";
import Footer from "../src/components/Footer";
import Breadcrumbs from "../src/components/Breadcrumbs";
import ContentWrapper from "../src/components/ContentWrapper";
import { ServiceDetail } from "../src/components/Service/Detail";
import wand from "../src/data/services/wand";
import companyData from "../src/data/companyData";

const Wand = () => {
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
      <Breadcrumbs page="Wand" variant={1} />

      <ContentWrapper>
        <Grid container>
          {wand.map((item) => (
            <ServiceDetail
              index={item.index}
              title={item.title}
              image={item.image}
              description={item.description}
            />
          ))}
        </Grid>
      </ContentWrapper>

      <Footer />
    </div>
  );
};

export default Wand;
