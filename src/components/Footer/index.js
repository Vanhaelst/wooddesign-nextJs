import React from "react";
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
import regions from "../../data/regions";
import guides from "../../data/guides";

const Footer = () => {
  const { isMobile } = useGlobalContext();

  return (
    <div className="bg-[#3a3733]">
      <Grid className="bg-[#3a3733]" pt={11} pb={8}>
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
                    aria-label="Instagram"
                    target="_blank"
                  >
                    <Instagram size="22px" fill="white" />
                  </Link>
                </Box>
                <Box mr={5}>
                  <Link
                    href={companyData.social.facebook}
                    aria-label="Facebook"
                    target="_blank"
                  >
                    <Facebook size="22px" fill="white" />
                  </Link>
                </Box>
                <Box mr={5}>
                  <Link
                    href={companyData.social.pinterest}
                    aria-label="Pinterest"
                    target="_blank"
                  >
                    <Pinterest size="22px" fill="white" />
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid row pt={8}>
            <Grid item xs={12} sm={6} pb={8}>
              <Heading mb={4} level={5} color="white">
                Werkgebied
              </Heading>
              <Paragraph color="white">
                {regions.map((region, index) => (
                  <React.Fragment key={region.slug}>
                    <Link
                      href={`/regio/${region.slug}`}
                      color="white"
                      type="hidden"
                    >
                      {region.name}
                    </Link>
                    {index < regions.length - 1 && (
                      <span className="mx-2">-</span>
                    )}
                  </React.Fragment>
                ))}
              </Paragraph>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Heading mb={4} level={5} color="white">
                Kennisbank
              </Heading>
              <Paragraph color="white">
                {guides.map((guide, index) => (
                  <React.Fragment key={guide.slug}>
                    <Link
                      href={`/gids/${guide.slug}`}
                      color="white"
                      type="hidden"
                    >
                      {guide.title}
                    </Link>
                    {index < guides.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </Paragraph>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid className="bg-[#2a2825] py-[15px]">
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
      </Grid>
    </div>
  );
};

export default Footer;
