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
import { sendContactMail } from "../src/utils/senMail-contact";
import ContactForm from "../src/components/ContactForm";

const Realisations = () => {
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
    setTimeout(() => {
      setMailState(undefined);
    }, [3500])

    validate()
      .then((response) => {
        if (!response.hasError) {
          sendContactMail({
            data,
            onSuccess: () => setMailState("success"),
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

  useEffect(() => {
    if (mailState === "success") {
      setTimeout(() => {
        setMailState(undefined);
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
      }, [5000]);
    }
  }, [mailState]);

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
            <Grid item xs={12} lg={6}>
              <Grid row mb={6}>
                <Grid item xs={12} md={10}>
                  <Heading level={2}>Contactgegevens en openingsuren</Heading>
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
                        href="tel:+32477208484"
                        fontFamily="secondary"
                        type="hidden"
                      >
                        +32(0) 477.20.84.84
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Text fontWeight="bold" style={{ display: "block" }}>
                        E-mail:
                      </Text>
                      <Link
                        href="mailto:info@wooddesign.be"
                        fontFamily="secondary"
                        type="hidden"
                      >
                        info@wooddesign.be
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Text fontWeight="bold" style={{ display: "block" }}>
                        Toonzaal:{" "}
                        <Text fontWeight="light" size="Caption2">
                          (steeds op afspraak)
                        </Text>
                      </Text>
                      <Text fontFamily="secondary">
                        Prins Boudewijnlaan 21T, 2550 Kontich.
                        <br />
                        Car-Wash XL oprijden – signalisatie KMO-Park XL volgen.
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text fontWeight="bold" style={{ display: "block" }}>
                        Openingsuren:
                      </Text>
                      <table>
                        <tbody>
                          <tr>
                            <td style={{ padding: "10px 10px 5px 0" }}>
                              <Text fontFamily="secondary">Ma - Vrij</Text>
                            </td>
                            <td style={{ padding: "10px 10px 5px 0" }}>
                              <Text fontFamily="secondary">15u - 18u</Text>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "5px 10px 10px 0" }}>
                              <Text fontFamily="secondary">Za</Text>
                            </td>
                            <td style={{ padding: "5px 10px 10px 0" }}>
                              <Text fontFamily="secondary">11u - 15u30</Text>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </ListItem>
                    <ListItem>
                      <Text fontWeight="bold" style={{ display: "block" }}>
                        Belangrijk:{" "}
                      </Text>
                      <Text fontFamily="secondary">
                        Graag steeds vooraf even contacteren voor afwijkende
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

export default Realisations;
