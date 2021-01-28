import React from 'react';
import styled from 'styled-components';
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Grid from "@/components/Grid";
import Link from "@/components/Link";
import Text from "@/components/Text";
import InputField from "@/components/form/InputField";

const Wrapper = styled(Grid)`
    background-image: url('https://www.woodstoxx.be/style/theme/images/bgfooter.jpg');
    background-size: cover;
    background-position: center center;
`;

const BottomBar = styled(Grid)`
    background-color: #0d0d0d;
    padding: 15px 0;
`;

const Footer = () => {
    return(
        <div>
            <Wrapper pt={11} pb={8}>
                <Grid container>
                    <Grid row pb={8}>
                        <Grid item xs={12} sm={4}>
                            <Heading level={4} color="white">WOODDESIGN BVBA</Heading>
                            <Paragraph color="white">
                                Prins Boudewijnlaan 21T,<br />
                                2550 Kontich, België<br />
                            </Paragraph>
                            <Paragraph color="white">
                                Car-Wash XL oprijden<br />
                                Signalisatie KMO-Park XL volgen<br />
                            </Paragraph>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Heading level={4} color="white">CONTACT</Heading>
                            <Paragraph color="white">
                                <Link href="tel:+32 56 51 79 60" color="white" type="branded">+32 56 51 79 60</Link><br />
                                <Link href="mailto:info@wooddesign.be" color="white" type="branded">info@wooddesign.be</Link>
                            </Paragraph>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Heading level={4} color="white">HOUD ME OP DE HOOGTE</Heading>
                            <Paragraph color="white">
                                Schrijf je in voor de nieuwsbrief
                            </Paragraph>
                            <InputField placeholder="Uw emailadres" variant="light" />
                            <Paragraph color="white">
                                SOCIAL MEDIA
                            </Paragraph>
                        </Grid>
                    </Grid>
                </Grid>
            </Wrapper>
            <BottomBar>
                <Grid container>
                    <Grid row>
                        <Grid item xs={12} sm={6}>
                            <Text color="white" size="Caption2">
                                <Link href="" color="white" type="branded">
                                    Sitemap
                                </Link>
                                &nbsp;-&nbsp;
                                <Link href="" color="white" type="branded">
                                    Cookieverklaring
                                </Link>
                                &nbsp;-&nbsp;
                                <Link href="" color="white" type="branded">
                                    Algemene voorwaarden
                                </Link>
                            </Text>
                        </Grid>
                        <Grid item xs={12} sm={6} style={{ textAlign: "right" }}>
                            <Text size="Caption2" color="white">Site by <Link href="http://www.publipirates.be" color="white" type="branded">PubliPirates</Link></Text>
                        </Grid>
                    </Grid>
                </Grid>
            </BottomBar>
        </div>
    )
}

export default Footer;
