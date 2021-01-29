import React from 'react';
import Head from 'next/head'
import meta from "src/data/meta";
import Navigation from "src/components/Navigation";
import Hero from "@/components/Hero";
import Heading from "@/components/Heading";
import Grid from "@/components/Grid";
import Paragraph from "@/components/Paragraph";
import Footer from "src/components/Footer";
import Image from "@/components/Image";
import ContentWrapper from "src/components/ContentWrapper";
import Box from "@/components/Box";
import realisations from "../src/data/realisations";
import Link from "@/components/Link";
import styled from "styled-components";
import Button from "@/components/Button";

const SubTitle = styled(Heading)`
  margin: 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 12px;
`;



const Home = ({ posts, ig }) => {


    console.log('posts', posts);

    const slicedRealisations = realisations.slice(0, 4);

    const RowOdd = styled.div`
        flex-direction: column-reverse;
        margin-bottom: 32px;
        img{
            margin-bottom: 24px;
        }
        @media screen and (min-width: ${props => props.theme.grid.breakpointSmall}px){
            flex-direction: row;
            img{
                margin-bottom: 0;
            }  
        }
    `;

    const RowEven = styled.div`
        flex-direction: column;
        img{
            margin-bottom: 24px;
        }
        @media screen and (min-width: ${props => props.theme.grid.breakpointSmall}px){
            margin-top: -50px;
            flex-direction: row;
            img{
                margin-bottom: 0;
            }
        }
    `;

    return (
    <div>
        <Head>
            <title>{meta.title}</title>
            <meta name="viewport" content={meta.viewport} />
        </Head>
        <Hero backgroundImage="https://www.belgiqa.be/images/home/_homeSplashImage/belgiqa-homepage-banner2-1.jpg" />
        <Navigation />
        <ContentWrapper>

            {/* Intro */}
            <Box mb={11}>
                <Grid container>
                    <RowOdd as={Grid} row>
                        <Grid item xs={12} sm={6} md={4} flex justifyContent="flex-start" flexDirection="column">
                            <Heading level={2} textTransform="uppercase" show={{ xs: false, sm: true }}>Het bedrijf</Heading>
                            <Paragraph>
                                Wooddesign is uw partner voor gevelbekleding, parketvloeren en terrassen.
                                We onderscheiden ons van velen door het gebruik van kwaliteitsvolle producten,
                                gecombineerd met een hoge afwerkingsgraad en professionele dienstverlening, ook na de plaatsing.
                            </Paragraph>
                        </Grid>
                        <Grid item xs={12} sm={6} md={{ width: 7, push: 1 }}>
                            <Heading level={2} textTransform="uppercase" show={{ xs: true, sm: false }}>Het bedrijf</Heading>
                            <Image
                                src="https://www.belgiqa.be/images/home/_homeCraftImage1/M_WSTXX_020519-77.jpg"
                                objectFit
                                height="450px"
                            />
                        </Grid>
                    </RowOdd>

                    <RowEven as={Grid} row>
                        <Grid item xs={12} sm={6} md={{ width: 5 }}>
                            <Heading level={2} textTransform="uppercase" show={{ xs: true, sm: false }}>Onze klanten</Heading>
                            <Image
                                src="https://www.belgiqa.be/images/home/_homeCraftImage2/1.-M_WSTXX_020519-127.jpg"
                                objectFit
                                height="720px"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={{width: 4, push: 1}} flex justifyContent="center" flexDirection="column" >
                            <Heading level={2} textTransform="uppercase" show={{ xs: false, sm: true }}>Onze klanten</Heading>
                            <Paragraph>
                                We werken voor zowel particuliere als professionele klanten (aannemers, architecten, bouwpromotors).
                                Voor het realiseren van uw project, klein of groot, maken wij graag een afspraak in onze toonzaal.
                            </Paragraph>
                        </Grid>
                    </RowEven>
                </Grid>
            </Box>

            <Box backgroundColor="#f5f5f5">
                <Grid container my={11}>
                    <Grid row mb={11} flex flexDirection="column" alignItems="center">
                        <Heading level={2}>Onze realisaties</Heading>
                        <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
                    </Grid>
                    <Grid row>
                        {slicedRealisations && slicedRealisations.map(item => {
                            return(
                                <Grid item xs={12} sm={6} md={6} mb={8} key={item.slug}>
                                    <Link href={`/realisaties/${encodeURIComponent(item.slug)}`} type="hidden">
                                        <Image src={item.images[0].url} alt={item.title} objectFit height="250px" />
                                        {item.category && (<SubTitle level={4} fontFamily="secondary" fontWeight="regular" color="#b3b3b3">{item.category}</SubTitle>)}
                                        {item.title && (<Heading level={3} color="#464646">{item.title}</Heading>)}
                                    </Link>
                                </Grid>
                            )
                        })}
                    </Grid>
                    <Grid row>
                        <Grid item xs={12} flex justifyContent="flex-end">
                            <Button outline as={Link} href="/realisaties">Bekijk alle realisaties</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>


            <Box py={11}>
                <Box backgroundColor="#f5f5f5" height="300px" style={{ position: "absolute", top: 0, width: "100%", height: "65%" }} />
                <Grid container>
                    <Grid row mb={8} flex flexDirection="column" alignItems="center">
                        <Heading level={2}><Link type="hidden" href="https://www.instagram.com/wooddesignbvba/">Instagram</Link></Heading>
                        <Paragraph>Laat je inspireren</Paragraph>
                    </Grid>
                    <Grid row>
                        {posts && posts.map(item => {
                            return(
                                <Grid item xs={6} sm={4} md={3} key={item.id} mb={6}>
                                    <Link href="https://www.instagram.com/wooddesignbvba/">
                                        <Image src={item.media_url} alt={`Instagram feed ${item.username} - ${item.id}`} hover="transform: scale(1.05)" />
                                    </Link>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Box>

        </ContentWrapper>
        <Footer />
    </div>
  )
}


export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const AuthRes = await fetch(`https://ig.instant-tokens.com/users/9e660aa2-5339-4f60-91b6-a01f08bc8001/instagram/17841404474795116/token?userSecret=${process.env.IG_USER_SECRET}`)
    const AuthToken = await AuthRes.json()

    const res = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,username,timestamp&access_token=${AuthToken.Token}`)
    const posts = await res.json()

    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            ig: [],
            posts: posts.data.slice(0, 4),
        },
    }
}


export default Home
