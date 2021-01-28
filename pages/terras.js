import React from 'react';
import Head from 'next/head'
import meta from "src/data/meta";
import Navigation from "src/components/Navigation";
import Grid from "@/components/Grid";
import Footer from "../src/components/Footer";
import Breadcrumbs from "../src/components/Breadcrumbs";
import ContentWrapper from "../src/components/ContentWrapper";
import ServiceDetail from "../src/components/Service/Detail";
import terrassen from "../src/data/services/terrassen";

const Terras = () => {
    return (
        <div>
            <Head>
                <title>Wooddesign - Diensten - Terras</title>
                <meta property="og:title" content="Wooddesign - Diensten - Terras" key="title" />
            </Head>
            <Navigation />
            <Breadcrumbs page="Terras" variant={1} />
            <ContentWrapper>
                    <Grid container>
                        {terrassen.map(item => (
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
    )
}

export default Terras
