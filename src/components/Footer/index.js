import React, { useState } from "react";
import styled from "styled-components";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Grid from "@/components/Grid";
import Link from "@/components/Link";
import Text from "@/components/Text";
import Instagram from "@/icons/Instagram";
import Facebook from "@/icons/Facebook";
import Pinterest from "@/icons/Pinterest";
import Box from "@/components/Box";
import companyData from "../../data/companyData";
import SignupForm from "../Mailchimp/signupForm";
import useGlobalContext from "../../context/hooks/useGlobalContext";

const Wrapper = styled(Grid)`
  background-image: url("https://www.woodstoxx.be/style/theme/images/bgfooter.jpg");
  background-size: cover;
  background-position: center center;
`;

const BottomBar = styled(Grid)`
  background-color: #0d0d0d;
  padding: 15px 0;
`;


const Footer = () => {
  const { isMobile } = useGlobalContext();

  return (
    <div>

      <Wrapper pt={11} pb={8}>
        <Grid container>
          <Grid row>
            <Grid item xs={12} sm={4} pb={8}>
              <Heading level={4} color="white">
                WOODDESIGN BVBA
              </Heading>
              <Paragraph color="white">
                Prins Boudewijnlaan 21T,
                <br />
                2550 Kontich, België
                <br />
              </Paragraph>
              <Paragraph color="white">
                Car-Wash XL oprijden
                <br />
                Signalisatie KMO-Park XL volgen
                <br />
              </Paragraph>
            </Grid>

            <Grid item xs={12} sm={4} pb={8}>
              <Heading level={4} color="white">
                CONTACT
              </Heading>
              <Paragraph color="white">
                <Link href="tel:+32 56 51 79 60" color="white" type="hidden">
                  +32 56 51 79 60
                </Link>
                <br />
                <Link
                  href="mailto:info@wooddesign.be"
                  color="white"
                  type="hidden"
                >
                  info@wooddesign.be
                </Link>
              </Paragraph>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Heading level={4} color="white">
                HOUD ME OP DE HOOGTE
              </Heading>

              <SignupForm />


              <Box flexDirection="row" pt={4}>
                <Box mr={5}>
                  <Link href={companyData.social.instagram} als="Instagram">
                    <Instagram size="22px" fill="white" />
                  </Link>
                </Box>
                <Box mr={5}>
                  <Link href={companyData.social.facebook} als="Facebook">
                    <Facebook size="22px" fill="white" />
                  </Link>
                </Box>
                <Box mr={5}>
                  <Link href={companyData.social.pinterest} als="Pinterest">
                    <Pinterest size="22px" fill="white" />
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Wrapper>



      <BottomBar>
        <Grid container>
          <Grid row>
            <Grid item xs={12} sm={6}>
              <Text color="white" size="Caption2" fontFamily="secondary">
                <Link href="/cookie-verklaring" color="white" type="hidden">
                  Cookieverklaring
                </Link>
                &nbsp;-&nbsp;{companyData.btw}
              </Text>
            </Grid>
            <Grid item xs={12} sm={6} style={isMobile ? {} : { textAlign: "right" }}>
              <Text size="Caption2" color="white" fontFamily="secondary">
                Site by{" "}
                <Link
                  href="http://www.publipirates.be"
                  color="white"
                  type="hidden"
                >
                  PubliPirates
                </Link>
              </Text>
            </Grid>
          </Grid>
        </Grid>
      </BottomBar>
    </div>
  );
};

export default Footer;
