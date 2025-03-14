import React, { useState } from "react";
import Head from "next/head";
import meta from "src/data/meta";
import Navigation from "src/components/Navigation";
import Heading from "@/components/Heading";
import Grid from "@/components/Grid";
import Footer from "../src/components/Footer";
import UnorderedList from "@/components/List/UnorderedList";
import ListItem from "@/components/List/ListItem";
import Text from "@/components/Text";
import Link from "@/components/Link";
import ContentWrapper from "../src/components/ContentWrapper";
import ValidateForm from "../src/utils/ValidateForm";
import { sendContactMail } from "../src/utils/sendMail-contact";
import ContactForm from "../src/components/ContactForm";
import companyData from "../src/data/companyData";

const Contact = () => {
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

  const today = new Date();
  const endDate = new Date("2023-01-09");

  const showHolidayOpenings = today < endDate;

  return (
    <div>
      <Head>
        <title>{companyData.companyName} - Contact</title>
        <meta
          name="description"
          content={`${companyData.companyName} - Contact`}
        />
      </Head>
      <Navigation />

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
                    {showHolidayOpenings && (
                      <ListItem>
                        <Text fontWeight="bold" style={{ display: "block" }}>
                          Openingstijden eindejaarsperiode:
                        </Text>
                        Tijdens de eindejaarsvakantie zijn wij gesloten van
                        24/12 t.e.m. 8/01/2023. Alle contactaanvragen worden
                        behandeld vanaf 9/01/2023.
                      </ListItem>
                    )}
                    <ListItem>
                      <Text
                        as="p"
                        fontWeight="bold"
                        style={{ display: "block" }}
                      >
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
                      <Text
                        as="p"
                        fontWeight="bold"
                        style={{ display: "block" }}
                      >
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
                      <Text
                        as="p"
                        fontWeight="bold"
                        style={{ display: "block" }}
                      >
                        Adres:&nbsp;
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
                      <Text
                        as="p"
                        fontWeight="bold"
                        style={{ display: "block" }}
                      >
                        Toonzaal / magazijn:
                      </Text>
                      <Text as="p" fontFamily="secondary">
                        Op afspraak te bezoeken.
                      </Text>
                      <Text as="p" fontFamily="secondary">
                        Dinsdag tem zaterdag van 11u tot 16u.
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
