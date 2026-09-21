import React, { useState } from "react";
import Head from "next/head";
import meta from "src/data/meta";
import Navigation from "src/components/Navigation";
import Heading from "@/components/Heading";
import Grid from "@/components/Grid";
import Footer from "../src/components/Footer";
import ValidateForm from "../src/utils/ValidateForm";
import { sendContactMail } from "../src/utils/sendMail-contact";
import ContactForm from "../src/components/ContactForm";
import companyData from "../src/data/companyData";
import { canonicalUrl } from "../src/utils/seo";

const { mapsUrl } = companyData;

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
    return await ValidateForm({ setErrors, data }); // wait until the promise resolves (*)
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
        <title>Contact | Wooddesign Kontich</title>
        <meta
          name="description"
          content="Contacteer Wooddesign voor parket, gevelbekleding of een houten terras. Vraag een vrijblijvende offerte aan of bezoek onze toonzaal in Kontich, op afspraak."
        />
        <link rel="canonical" href={canonicalUrl("/contact")} />
        <meta property="og:title" content="Contact | Wooddesign Kontich" key="title" />
        <meta
          property="og:description"
          content="Contacteer Wooddesign voor parket, gevelbekleding of een houten terras. Vraag een vrijblijvende offerte aan of bezoek onze toonzaal in Kontich, op afspraak."
        />
        <meta property="og:url" content={canonicalUrl("/contact")} />
      </Head>
      <Navigation />

      <div className="mt-24">
        <Grid container>
          <Grid row mb={6}>
            <Grid item xs={12} md={10}>
              <Heading level={2}>Contact</Heading>
            </Grid>
          </Grid>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 ">
            <div>
              <div className="mb-8">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-ink">
                  Contactgegevens
                </span>
                <span className="mt-3 block h-px w-10 bg-brass" />
              </div>

              {showHolidayOpenings && (
                <div className="mb-6">
                  <p className="font-semibold text-ink">
                    Openingstijden eindejaarsperiode:
                  </p>
                  <p className="text-body">
                    Tijdens de eindejaarsvakantie zijn wij gesloten van 24/12
                    t.e.m. 8/01/2023. Alle contactaanvragen worden behandeld
                    vanaf 9/01/2023.
                  </p>
                </div>
              )}

              <div className="mb-6">
                <p className="font-semibold text-ink">Telefoon:</p>
                <a
                  href={`tel:${companyData.phone.unformatted}`}
                  className="text-ink underline underline-offset-2 hover:text-primary"
                >
                  {companyData.phone.formatted}
                </a>
              </div>

              <div className="mb-6">
                <p className="font-semibold text-ink">E-mail:</p>
                <a
                  href={`mailto:${companyData.email}`}
                  className="text-ink underline underline-offset-2 hover:text-primary"
                >
                  {companyData.email}
                </a>
              </div>

              <div className="mb-6">
                <p className="font-semibold text-ink">Adres:</p>
                <p className="text-body">
                  {companyData.address.street} {companyData.address.number}
                  {companyData.address.bus}, {companyData.address.zip}{" "}
                  {companyData.address.city}.
                  <br />
                  {companyData.address.extra} - {companyData.address.extra2}
                </p>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline underline-offset-2 hover:text-primary"
                >
                  Vind ons op Google Maps
                </a>
              </div>

              <div className="mb-6">
                <p className="font-semibold text-ink">
                  Toonzaal / magazijn:
                </p>
                <p className="text-body">Op afspraak te bezoeken.</p>
                <p className="text-body">
                  Dinsdag tem zaterdag van 11u tot 16u.
                </p>
              </div>

              <p className="text-body">
                Gelieve steeds vooraf te contacteren voor afwijkende
                openingsuren of afspraken op andere tijdstippen.
              </p>
            </div>

            <div className="relative min-h-[320px] overflow-hidden rounded-sm lg:min-h-full">
              <img
                src="/images/toonzaal.jpeg"
                alt="Toonzaal van Wooddesign in Kontich"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-ivory px-9 py-4 text-xs font-medium uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-white"
                >
                  Route via Google Maps
                </a>
              </div>
            </div>
          </div>

          <Grid row mt={10}>
            <Grid item xs={12} md={12}>
              <div className="mb-6 mt-10">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-ink">
                  Stel je vraag
                </span>
                <span className="mt-3 block h-px w-10 bg-brass" />
              </div>
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
      </div>

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
      <Footer visit={false} />
    </div>
  );
};

export default Contact;
