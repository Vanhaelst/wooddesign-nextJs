import React from "react";
import Head from "next/head";
import meta from "src/data/meta";
import Navigation from "src/components/Navigation";
import Grid from "@/components/Grid";
import Footer from "../src/components/Footer";
import Breadcrumbs from "../src/components/Breadcrumbs";
import ContentWrapper from "../src/components/ContentWrapper";
import { ServiceDetail } from "../src/components/Service/Detail";
import gevel from "../src/data/services/gevel";
import companyData from "../src/data/companyData";

const Gevel = () => {
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
      <Breadcrumbs page="Gevel" variant={1} image={"images/gevel/hero.jpg"} />

      <ContentWrapper>
        <Grid container>
          {gevel.map((item, index) => (
            <ServiceDetail
              key={item.index}
              index={index}
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

export default Gevel;
