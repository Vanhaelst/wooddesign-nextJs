import React, { Fragment } from "react";
import "../styles/globals.css";
import DefaultPage from "src/components/DefaultPage";
import { GlobalContextProvider } from "src/context/GlobalContextProvider";
import Head from "next/head";
import meta from "../src/data/meta";
import "./globals.css";
import { Cabin } from "next/font/google";

const cabin = Cabin({
  subsets: ["latin"],
  variable: "--font-cabin",
  display: "swap",
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
        <main className={cabin.variable}>
          <DefaultPage>
            <Component {...pageProps} />
          </DefaultPage>
        </main>
      </GlobalContextProvider>
    </Fragment>
  );
};

export default MyApp;
