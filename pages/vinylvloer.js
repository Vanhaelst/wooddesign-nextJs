import React from "react";
import Head from "next/head";
import meta from "src/data/meta";
import Navigation from "src/components/Navigation";
import Grid from "@/components/Grid";
import Footer from "../src/components/Footer";
import Breadcrumbs from "../src/components/Breadcrumbs";
import ContentWrapper from "../src/components/ContentWrapper";
import { ServiceDetail } from "../src/components/Service/Detail";
import vinylvloer from "../src/data/services/vinylvloer";
import companyData from "../src/data/companyData";

const Services = () => {
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
      <Breadcrumbs page="Vinylvloer" variant={1} image={"images/vinylvloer/hero.jpg"} />

      <ContentWrapper>
        <Grid container>
          {vinylvloer.map((item) => (
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

export default Services;
