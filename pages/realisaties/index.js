import React  from 'react';
import Head from 'next/head'
import styled from "styled-components";
import Masonry from 'react-masonry-css';
import realisations from 'src/data/realisations';
import Navigation from "src/components/Navigation";
import Heading from "@/components/Heading";
import Grid from "@/components/Grid";
import Link from "@/components/Link";
import Footer from "../../src/components/Footer";
import Breadcrumbs from "../../src/components/Breadcrumbs";
import ContentWrapper from "../../src/components/ContentWrapper";


const Title = styled(Heading)`
  margin: 0;
  transition: all .2s ease;
  display: block;
`;

const SubTitle = styled(Heading)`
  margin: 0;
  letter-spacing: 2px;
  margin-top: 15px;
  text-transform: uppercase;
  font-size: 12px;
`;

const MyMasonry = styled(Masonry)`
    display: -webkit-box;
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;

    .my-masonry-grid_column {
        padding-left: 30px; /* gutter size */
        background-clip: padding-box;
    }
 
    .my-masonry-grid_column > div {
        margin-bottom: 30px;
    }
`;



const breakpointColumnsObj = {
    default: 3,
    700: 2,
    500: 1
};

const Realisations = () => {

    return (
        <div>
            <Head>
                <title>Wooddesign - Realisaties</title>
                <meta property="og:title" content="Wooddesign - Realisaties" key="title" />
            </Head>
            <Navigation />
            <Breadcrumbs page="Realisaties" variant={1} />
            <ContentWrapper>
                <Grid container >
                    <Grid row>
                        <MyMasonry
                            breakpointCols={breakpointColumnsObj}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column">
                            {realisations.map(realisation => {
                                return(
                                    <div className="item" key={realisation.title}>
                                        <div className="content">
                                            <div style={{ padding: "25pox"}}>
                                                <Link href={`/realisaties/${encodeURIComponent(realisation.slug)}`} type="hidden">
                                                    <img src={realisation.images[0].url} alt={realisation.title} style={{ maxWidth: "100%" }} />
                                                    <SubTitle level={4} fontFamily="secondary" fontWeight="regular" color="#b3b3b3">{realisation.category}</SubTitle>
                                                    <Title level={2} color="#464646" fontWeight="light">{realisation.title}</Title>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </MyMasonry>
                    </Grid>
                </Grid>
            </ContentWrapper>
            <Footer />
        </div>
    )
}

export default Realisations
