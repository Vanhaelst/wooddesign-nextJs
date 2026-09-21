import React, { Fragment } from "react";
import "../styles/globals.css";
import DefaultPage from "src/components/DefaultPage";
import { GlobalContextProvider } from "src/context/GlobalContextProvider";
import Head from "next/head";
import meta from "../src/data/meta";
import "./globals.css";
import { Cormorant_Garamond, Inter } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500"],
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <title>
          {meta.og.title} - {meta.tagline}
        </title>
        <meta name="viewport" content={meta.viewport} />
      </Head>
      <GlobalContextProvider>
        <main
          className={`${display.variable} ${sans.variable} min-h-screen bg-ivory font-sans text-body antialiased`}
        >
          <DefaultPage>
            <Component {...pageProps} />
          </DefaultPage>
        </main>
      </GlobalContextProvider>
    </Fragment>
  );
};

export default MyApp;
