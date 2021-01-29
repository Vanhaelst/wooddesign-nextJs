import React  from 'react';
import Head from 'next/head';
import meta from "src/data/meta";
import styled from "styled-components";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import realisations from 'src/data/realisations';
import Navigation from "src/components/Navigation";
import Heading from "@/components/Heading";
import Grid from "@/components/Grid";
import Paragraph from "@/components/Paragraph";
import Image from "@/components/Image";
import Footer from "../../src/components/Footer";
import Breadcrumbs from "../../src/components/Breadcrumbs";
import ContentWrapper from "../../src/components/ContentWrapper";
import UnorderedList from "@/components/List/UnorderedList";
import ListItem from "@/components/List/ListItem";
import Text from "@/components/Text";

const Details = styled.div`
    margin-top: 24px;
    @media screen and (min-width: ${props => props.theme.grid.breakpointSmall}px){
        border-left: 1px solid rgba(0,0,0,0.2);
        margin-top: 0;
    }
`;

const Realisations = () => {
    const realisatie = realisations[0];
    const images = realisatie.images;

    const options = {
        buttons: {
            backgroundColor: 'rgba(30,30,36,0.9)',
            iconColor: 'rgba(255, 255, 255, 0.8)',
            iconPadding: '5px',
            showAutoplayButton: false,
            showCloseButton: true,
            showDownloadButton: false,
            showFullscreenButton: false,
            showNextButton: true,
            showPrevButton: true,
            size: '40px'
        },
        caption: {
            showCaption: true,
            captionColor: '#FFFFFF',
            captionFontFamily: 'inherit',
            captionFontSize: 'inherit',
            captionFontStyle: 'inherit',
            captionFontWeight: 'inherit',
            captionTextTransform: 'inherit'
        },
        thumbnails: {
            showThumbnails: true,
            thumbnailsOpacity: 0.4,
            thumbnailsSize: ['100px', '80px']
        }
    }

    return (
        <div>
            <Head>
                <title>Wooddesign - Realisaties - {realisatie.title} </title>
                <meta property="og:title" content={`Wooddesign - Realisaties - ${realisatie.title}`} key="title" />
                <meta name="keywords" content={`${realisatie.details.houtsoort} - ${realisatie.details.type} - ${meta.keywords}`} />
            </Head>
            <Navigation />
            <Breadcrumbs page="Realisatie" variant={1} />
            <ContentWrapper>
                <Grid container>
                    <Grid row mb={10}>
                        <Grid item xs={12} sm={8} md={7}>
                            <Heading level={2} mb={3}>{realisatie.title}</Heading>
                            <Paragraph>{realisatie.description}</Paragraph>
                        </Grid>
                        <Details as={Grid} item xs={12} sm={{ width: 4}} md={{ width: 3, push: 2}}>
                            <Heading level={3} mb={3}>Details</Heading>
                            <UnorderedList>
                                <ListItem>
                                    <Text fontWeight="bold">Houtsoort:&nbsp;</Text><Text fontFamily="secondary">{realisatie.details.houtsoort}</Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontWeight="bold">Type:&nbsp;</Text><Text fontFamily="secondary">{realisatie.details.type}</Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontWeight="bold">Totaal:&nbsp;</Text><Text fontFamily="secondary">{realisatie.details.total}</Text>
                                </ListItem>
                            </UnorderedList>
                        </Details>
                    </Grid>


                    <SimpleReactLightbox>
                        <SRLWrapper options={options}>
                            <Grid row>
                                {images.map(image => {
                                    return(
                                        <Grid item xs={12} sm={3}>
                                            <a href={image.url} data-attribute="SRL">
                                                <Image src={image.url} alt={image.alt} objectFit height="200px" />
                                            </a>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </SRLWrapper>
                    </SimpleReactLightbox>
                </Grid>
            </ContentWrapper>
            <Footer />
        </div>
    )
}

export default Realisations
