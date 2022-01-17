import React, { useState, useEffect } from "react";
import Head from "next/head";
import meta from "src/data/meta";
import Navigation from "src/components/Navigation";
import Heading from "@/components/Heading";
import Grid from "@/components/Grid";
import Footer from "../src/components/Footer";
import Breadcrumbs from "../src/components/Breadcrumbs";
import UnorderedList from "@/components/List/UnorderedList";
import ListItem from "@/components/List/ListItem";
import Text from "@/components/Text";
import Link from "@/components/Link";
import ContentWrapper from "../src/components/ContentWrapper";
import ValidateForm from "../src/utils/ValidateForm";
import { sendContactMail } from "../src/utils/sendMail-contact";
import ContactForm from "../src/components/ContactForm";
import companyData from "../src/data/companyData";

const Contact = ({ SENDINBLUE_API_KEY, SENDINBLUE_EMAIL_TO }) => {
  const [mailState, setMailState] = useState(undefined);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    postalCode: "",
    extra: "",
  });

  const [errors, setErrors] = useState({
    hasError: true,
    firstName: "",
    lastName: "",
    email: false,
    phone: false,
    street: false,
    city: false,
    postalCode: false,
    extra: false,
  });

  /* =========================
    *
    * Form Functions
    *  - Validation: async func
    *  - HandleSend: func
    *  - HandleDataChange: func
    *
    ========================= */
  async function validate() {
    const validation = await ValidateForm({ setErrors, data }); // wait until the promise resolves (*)
    return validation;
  }

  const handleSend = () => {
    validate()
      .then((response) => {
        if (!response.hasError) {
          sendContactMail({
            SENDINBLUE_API_KEY,
            SENDINBLUE_EMAIL_TO,
            data,
            onSuccess: () => {
              setMailState("success");
              setData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                street: "",
                city: "",
                postalCode: "",
                extra: "",
              });
            },
          }).catch(() => setMailState("error"));
        }
      })
      .catch(() => setMailState("error"));
  };
  const handleChangeData = (event) => {
    setErrors({ ...errors, [event.target.name]: "" });
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Head>
        <title>Wooddesign - Contact</title>
        <meta property="og:title" content="Wooddesign - Contact" key="title" />
      </Head>
      <Navigation />
      <Breadcrumbs
        page="Contact"
        variant={1}
        image={"images/hero-contact.jpeg"}
      />
      <ContentWrapper>
        <Grid container>
          <Grid row>
            <Grid item xs={12} lg={6}>
              <Grid row mb={6}>
                <Grid item xs={12} md={10}>
                  <Heading level={2}>Contact</Heading>
                </Grid>
              </Grid>
              <Grid row>
                <Grid item xs={12} md={10}>
                  <UnorderedList>
                    <ListItem>
                      <Text fontWeight="bold" style={{ display: "block" }}>
                        Telefoon:
                      </Text>
                      <Link
                        href={`tel:${companyData.phone.unformatted}`}
                        fontFamily="secondary"
                        type="hidden"
                      >
                        {companyData.phone.formatted}
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Text fontWeight="bold" style={{ display: "block" }}>
                        E-mail:
                      </Text>
                      <Link
                        href={`mailto:${companyData.email}`}
                        fontFamily="secondary"
                        type="hidden"
                      >
                        {companyData.email}
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Text fontWeight="bold" style={{ display: "block" }}>
                        Adres:
                      </Text>
                      <Text fontFamily="secondary">
                        {companyData.address.street}{" "}
                        {companyData.address.number}
                        {companyData.address.bus}, {companyData.address.zip}{" "}
                        {companyData.address.city}.
                        <br />
                        {companyData.address.extra} -{" "}
                        {companyData.address.extra2}
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text fontWeight="bold" style={{ display: "block" }}>
                        Toonzaal / magazijn:
                      </Text>
                      <Text fontFamily="secondary">
                        Op afspraak te bezoeken van dinsdag tem zaterdag van 11u
                        tot 16u.
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text fontFamily="secondary">
                        Gelieve steeds vooraf te contacteren voor afwijkende
                        openingsuren of afspraken op andere tijdstippen.
                      </Text>
                    </ListItem>
                  </UnorderedList>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={6}>
              <ContactForm
                mailState={mailState}
                errors={errors}
                data={data}
                handleChangeData={handleChangeData}
                handleSend={handleSend}
              />
            </Grid>
          </Grid>
        </Grid>
      </ContentWrapper>

      <iframe
        style={{ border: 0, marginTop: "50px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.084601596891!2d4.432205851657122!3d51.14379097947675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f08c663734e1%3A0x3eb1b6f5fbed88e7!2sWOODDESIGN%20bvba%2C%202550%20Kontich!5e0!3m2!1sen!2sbe!4v1611580402327!5m2!1sen!2sbe"
        width="100%"
        height="450"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
      <Footer />
    </div>
  );
};

export default Contact;

export const getServerSideProps = async () => {
  return {
    props: {
      // Returning value of Environment
      // variable as prop
      SENDINBLUE_API_KEY: process.env.SENDINBLUE_API_KEY,
      SENDINBLUE_EMAIL_TO: process.env.SENDINBLUE_EMAIL_TO,
    },
  };
};
