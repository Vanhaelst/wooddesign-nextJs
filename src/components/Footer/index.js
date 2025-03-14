import React from "react";
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
import useGlobalContext from "../../context/hooks/useGlobalContext";

const Wrapper = styled(Grid)`
  background-color: #1a1a1a;
`;

const BottomBar = styled(Grid)`
  background-color: #0d0d0d;
  padding: 15px 0;
`;

const Footer = () => {
  const { isMobile } = useGlobalContext();

  return (
    <div className="bg-[#1a1a1a]">
      <Wrapper pt={11} pb={8}>
        <Grid container>
          <Grid row>
            <Grid item xs={12} sm={4} pb={8}>
              <Heading mb={6} level={4} color="white">
                WOODDESIGN BV
              </Heading>
              <Paragraph color="white">
                {companyData.address.street} {companyData.address.number}
                {companyData.address.bus},
                <br />
                {companyData.address.zip} {companyData.address.city}.
                <br />
              </Paragraph>
              <Paragraph color="white">
                {companyData.address.extra}
                <br />
                {companyData.address.extra2}
              </Paragraph>
            </Grid>

            <Grid item xs={12} sm={4} pb={8}>
              <Heading mb={6} level={4} color="white">
                CONTACT
              </Heading>
              <Paragraph color="white">
                <Link
                  href={`tel:${companyData.phone.unformatted}`}
                  color="white"
                  type="hidden"
                >
                  {companyData.phone.formatted}
                </Link>
                <br />
                <Link
                  href={`mailto:${companyData.email}`}
                  color="white"
                  type="hidden"
                >
                  {companyData.email}
                </Link>
              </Paragraph>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Heading mb={6} level={4} color="white">
                GET SOCIAL
              </Heading>

              {/*<SignupForm />*/}

              <Box flexDirection="row" pt={4}>
                <Box mr={5}>
                  <Link
                    href={companyData.social.instagram}
                    als="Instagram"
                    target="_blank"
                  >
                    <Instagram size="22px" fill="white" />
                  </Link>
                </Box>
                <Box mr={5}>
                  <Link
                    href={companyData.social.facebook}
                    als="Facebook"
                    target="_blank"
                  >
                    <Facebook size="22px" fill="white" />
                  </Link>
                </Box>
                <Box mr={5}>
                  <Link
                    href={companyData.social.pinterest}
                    als="Pinterest"
                    target="_blank"
                  >
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
                &nbsp;-&nbsp;
                <Link href="/verkoops-voorwaarden" color="white" type="hidden">
                  Verkoopsvoorwaarden
                </Link>
                &nbsp;-&nbsp;
                {companyData.btw}
              </Text>
            </Grid>
            <Grid item xs={12} sm={6} align={"right"}>
              <Text size="Caption2" color="white" fontFamily="secondary">
                Site by{" "}
                <Link href="http://www.studio94.be" color="white" type="hidden">
                  Studio94
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
