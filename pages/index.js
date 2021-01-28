import React, { useState, useEffect } from 'react';
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
import Service from "../src/components/Services";
import Box from "@/components/Box";

const Home = () => {
    const [sticky, setSticky] = useState(false);
    const [nav, setNav] = useState(false);

    if(!nav) {
        setTimeout(() => {
            if (typeof document !== 'undefined') {
                const navigation = document.getElementById("nav");
                setNav(true);
            }
        }, [500])
    }

    useEffect(() => {
        if (nav) {
            document.addEventListener("scroll", (e) => {
                const navigation = document.getElementById("nav");
                let position = navigation.getBoundingClientRect().top;

                if (navigation) {
                    if (position <= 0) {
                        setSticky(true);
                    } else {
                        setSticky(false);
                    }
                }
            });
        }
    }, [nav])



  return (
    <div>
        <Head>
            <title>{meta.title}</title>
            <meta name="viewport" content={meta.viewport} />
        </Head>
        <Hero backgroundImage="https://www.belgiqa.be/images/home/_homeSplashImage/belgiqa-homepage-banner2-1.jpg" />
        <Navigation shown={sticky} />
        <ContentWrapper>

            {/* Intro */}
            <Box mb={11}>
                <Grid container>
                    <Grid row>
                        <Grid item xs={12} sm={4} flex justifyContent="flex-start" flexDirection="column">
                            <Heading level={3} textTransform="uppercase">Het bedrijf</Heading>
                            <Paragraph>
                                Wooddesign is uw partner voor gevelbekleding, parketvloeren en terrassen.
                                We onderscheiden ons van velen door het gebruik van kwaliteitsvolle producten,
                                gecombineerd met een hoge afwerkingsgraad en professionele dienstverlening, ook na de plaatsing.
                            </Paragraph>
                        </Grid>
                        <Grid item xs={12} sm={{ width: 7, push: 1 }}>
                            <Image src="https://www.belgiqa.be/images/home/_homeCraftImage1/M_WSTXX_020519-77.jpg" />
                        </Grid>
                    </Grid>

                    <Grid row style={{ marginTop: "-50px" }}>
                        <Grid item xs={12} sm={{ width: 5 }}>
                            <Image src="https://www.belgiqa.be/images/home/_homeCraftImage2/1.-M_WSTXX_020519-127.jpg" />
                        </Grid>
                        <Grid item xs={12} sm={{width: 4, push: 1}} flex justifyContent="center" flexDirection="column" >
                            <Heading level={3} textTransform="uppercase">Onze klanten</Heading>
                            <Paragraph>
                                We werken voor zowel particuliere als professionele klanten (aannemers, architecten, bouwpromotors).
                                Voor het realiseren van uw project, klein of groot, maken wij graag een afspraak in onze toonzaal.
                            </Paragraph>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>


            {/* Services */}
            <Box backgroundColor="#EFEFEF">
                <Grid container mt={11}>
                    <Grid row>
                        <Grid item xs={12} sm={4} mb={11} flex>
                            <Service
                                image="https://www.wooddesign.be/wp-content/uploads/2016/06/parketvloeren.jpg"
                                title="Parket"
                                description="Als u van een warme, gezellige uitstraling houd, kiest u voor een parketvloer. Aangezien deze vloeren steeds duurzaam, tijdloos en elegant zijn, worden deze niet enkel nieuw gelegd, maar ook vaak gerenoveerd, opgeschuurd of opnieuw behandeld. Zo ziet uw vloer er steeds weer als nieuw uit."
                                cta="Bekijk onze parket"
                                href="#"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} mb={11} flex>
                            <Service
                                image="https://www.wooddesign.be/wp-content/uploads/2016/06/gevelbekleding.jpg"
                                title="Gevel"
                                description="Een mooie vlakke en energiezuinige gevel van Wooddesign, afgewerkt in Hout of Plaatmateriaal (Eternit, Trespa, Rockpanel) bestand tegen alle weersomstandigheden. Er wordt extra aandacht gegeven aan de uitvoering van de isolatie."
                                cta="Bekijk onze gevels"
                                href="#"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} mb={11} flex>
                            <Service
                                image="https://www.wooddesign.be/wp-content/uploads/2016/06/terrassen.jpg"
                                title="Terras"
                                description="Een houten terras is een absolute meerwaarde voor uw (dak)terras of tuin.  Onze houten terrassen worden steeds op een hardhouten onderconstructie geplaatst, en naargelang de ondergrond met regelbare PVC terrasdragers of hardhouten paaltjes in beton."
                                cta="Bekijk onze terrassen"
                                href="#"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} mb={11} flex>
                            <Service
                                image="https://www.wooddesign.be/wp-content/uploads/2016/06/wand.jpg"
                                title="Wand"
                                description="We plaatsen zowel buiten- als binnenwanden uit hout. Belangrijkste reden is uit esthetisch standpunt, maar voor de binnenwanden bied dit nog tal van voordelen. Luidruchtige buren!! Wij plaatsen een akoestische voorzetwand"
                                cta="Bekijk onze wanden"
                                href="#"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>

        </ContentWrapper>
        <Footer />
    </div>
  )
}

export default Home
