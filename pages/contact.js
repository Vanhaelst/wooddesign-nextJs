import React, { useState } from "react";
import Head from "next/head";
import meta from "src/data/meta";
import Navigation from "src/components/Navigation";
import Heading from "@/components/Heading";
import Grid from "@/components/Grid";
import Footer from "../src/components/Footer";
import ContentWrapper from "../src/components/ContentWrapper";
import ValidateForm from "../src/utils/ValidateForm";
import { sendContactMail } from "../src/utils/sendMail-contact";
import ContactForm from "../src/components/ContactForm";
import companyData from "../src/data/companyData";
import { canonicalUrl } from "../src/utils/seo";

const mapsUrl = "https://www.google.com/maps?q=51.14379097947675,4.432205851657122";

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
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3a3733]">
                  Contactgegevens
                </span>
                <span
                  className="mt-3 block h-[2px] w-10"
                  style={{ backgroundColor: "#8dc63f" }}
                />
              </div>

              {showHolidayOpenings && (
                <div className="mb-6">
                  <p className="font-semibold text-[#3a3733]">
                    Openingstijden eindejaarsperiode:
                  </p>
                  <p className="text-[#6b6862]">
                    Tijdens de eindejaarsvakantie zijn wij gesloten van 24/12
                    t.e.m. 8/01/2023. Alle contactaanvragen worden behandeld
                    vanaf 9/01/2023.
                  </p>
                </div>
              )}

              <div className="mb-6">
                <p className="font-semibold text-[#3a3733]">Telefoon:</p>
                <a
                  href={`tel:${companyData.phone.unformatted}`}
                  className="text-[#3a3733] underline underline-offset-2 hover:text-[#72a230]"
                >
                  {companyData.phone.formatted}
                </a>
              </div>

              <div className="mb-6">
                <p className="font-semibold text-[#3a3733]">E-mail:</p>
                <a
                  href={`mailto:${companyData.email}`}
                  className="text-[#3a3733] underline underline-offset-2 hover:text-[#72a230]"
                >
                  {companyData.email}
                </a>
              </div>

              <div className="mb-6">
                <p className="font-semibold text-[#3a3733]">Adres:</p>
                <p className="text-[#6b6862]">
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
                  className="text-[#3a3733] underline underline-offset-2 hover:text-[#72a230]"
                >
                  Vind ons op Google Maps
                </a>
              </div>

              <div className="mb-6">
                <p className="font-semibold text-[#3a3733]">
                  Toonzaal / magazijn:
                </p>
                <p className="text-[#6b6862]">Op afspraak te bezoeken.</p>
                <p className="text-[#6b6862]">
                  Dinsdag tem zaterdag van 11u tot 16u.
                </p>
              </div>

              <p className="text-[#6b6862]">
                Gelieve steeds vooraf te contacteren voor afwijkende
                openingsuren of afspraken op andere tijdstippen.
              </p>
            </div>

            <div className="relative min-h-[320px] overflow-hidden rounded-2xl lg:min-h-full">
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
                  className="bg-white px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#3a3733] shadow-sm transition-colors hover:bg-gray-100"
                >
                  Route via Google Maps
                </a>
              </div>
            </div>
          </div>

          <Grid row mt={10}>
            <Grid item xs={12} md={12}>
              <div className="mb-6 mt-10">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3a3733]">
                  Stel je vraag
                </span>
                <span
                  className="mt-3 block h-[2px] w-10"
                  style={{ backgroundColor: "#8dc63f" }}
                />
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
      <Footer />
    </div>
  );
};

export default Contact;
