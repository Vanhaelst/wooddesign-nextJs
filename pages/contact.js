import React from 'react';
import Head from 'next/head'
import meta from "src/data/meta";
import Navigation from "src/components/Navigation";
import Heading from "@/components/Heading";
import Grid from "@/components/Grid";
import Paragraph from "@/components/Paragraph";
import Footer from "../src/components/Footer";
import Input from "@/components/form/input";
import Button from "@/components/Button";
import Breadcrumbs from "../src/components/Breadcrumbs";
import TextArea from "@/components/form/TextField";
import UnorderedList from "@/components/List/UnorderedList";
import ListItem from "@/components/List/ListItem";
import Text from "@/components/Text";
import Link from "@/components/Link";
import ContentWrapper from "../src/components/ContentWrapper";

const Realisations = () => {
    return (
        <div>
            <Head>
                <title>Wooddesign - Contact</title>
                <meta property="og:title" content="Wooddesign - Contact" key="title" />
            </Head>
            <Navigation />
            <Breadcrumbs page="Contact" variant={1} />
            <ContentWrapper>
                <Grid container>
                    <Grid row>
                        <Grid item xs={12} md={6}>
                                <Grid row mb={6}>
                                    <Grid item xs={12} md={10}>
                                        <Heading level={2}>Contacteer ons</Heading>
                                        <Paragraph>
                                            We onderscheiden ons van velen door het gebruik van kwaliteitsvolle producten, gecombineerd met een hoge afwerkingsgraad en professionele dienstverlening, ook na de plaatsing!
                                            We werken voor zowel particuliere als professionele klanten (aannemers, architecten, bouwpromotors)
                                        </Paragraph>
                                    </Grid>
                                </Grid>
                                <Grid row>
                                    <Grid item xs={12} md={10}>
                                        <UnorderedList>
                                            <ListItem>
                                                <Text fontWeight="bold" style={{ display: "block" }}>Telefoon:</Text>
                                                <Link href="tel:+32477208484" fontFamily="secondary" type="hidden">+32(0) 477.20.84.84</Link>
                                            </ListItem>
                                            <ListItem>
                                                <Text fontWeight="bold" style={{ display: "block" }}>E-mail:</Text>
                                                <Link href="mailto:info@wooddesign.be" fontFamily="secondary" type="hidden">info@wooddesign.be</Link>
                                            </ListItem>
                                            <ListItem>
                                                <Text fontWeight="bold" style={{ display: "block" }}>
                                                    Toonzaal: <Text fontWeight="light" size="Caption2">(steeds op afspraak)</Text>
                                                </Text>
                                                <Text fontFamily="secondary">
                                                    Prins Boudewijnlaan 21T, 2550 Kontich.<br />
                                                    Car-Wash XL oprijden – signalisatie KMO-Park XL volgen.
                                                </Text>
                                            </ListItem>
                                            <ListItem>
                                                <Text fontWeight="bold" style={{ display: "block" }}>Openingsuren:</Text>
                                                <table>
                                                    <tr>
                                                        <td style={{ padding: "10px 10px 5px 0"}}>
                                                            <Text fontFamily="secondary">Ma - Vrij</Text>
                                                        </td>
                                                        <td style={{ padding: "10px 10px 5px 0"}}>
                                                            <Text fontFamily="secondary">15u - 18u</Text>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ padding: "5px 10px 10px 0"}}>
                                                            <Text fontFamily="secondary">Za</Text>
                                                        </td>
                                                        <td style={{ padding: "5px 10px 10px 0"}}>
                                                            <Text fontFamily="secondary">11u - 15u30</Text>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </ListItem>
                                            <ListItem>
                                                <Text fontWeight="bold" style={{ display: "block" }}>Belangrijk: </Text>
                                                <Text fontFamily="secondary">
                                                    Graag steeds vooraf even contacteren voor afwijkende openingsuren of afspraken op andere tijdstippen via bovenstaande gegevens.
                                                </Text>
                                            </ListItem>
                                        </UnorderedList>

                                    </Grid>
                                </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Heading level={2}>Formulier</Heading>
                            <form>
                                <Grid row>
                                    <Grid item xs={12} sm={6}>
                                        <Input variant="text" label="Voornaam" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Input variant="text" label="Achternaam" />
                                    </Grid>
                                </Grid>
                                <Grid row>
                                    <Grid item xs={12} sm={6}>
                                        <Input variant="mail" label="Email" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Input variant="phone" label="Tel / GSM" />
                                    </Grid>
                                </Grid>
                                <Grid row>
                                    <Grid item xs={12}>
                                        <Input variant="address" label="Adres" />
                                    </Grid>
                                </Grid>
                                <Grid row>
                                    <Grid item xs={12}>
                                        <TextArea label="Uw vraag / opmerking" />
                                    </Grid>
                                </Grid>
                                <Grid row>
                                    <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end"}}>
                                        <Button type="submit" appearance="primary">Verzenden</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
            </ContentWrapper>

            <iframe
                style={{ border: 0, marginTop: "50px" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.084601596891!2d4.432205851657122!3d51.14379097947675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f08c663734e1%3A0x3eb1b6f5fbed88e7!2sWOODDESIGN%20bvba%2C%202550%20Kontich!5e0!3m2!1sen!2sbe!4v1611580402327!5m2!1sen!2sbe"
                width="100%" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false"
                tabIndex="0" />
            <Footer />
        </div>
    )
}

export default Realisations
