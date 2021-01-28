import React, { Fragment } from "react";
import '../styles/globals.css'
import DefaultPage from "src/components/DefaultPage";
import { GlobalContextProvider } from "src/context/GlobalContextProvider";
import Head from "next/head";
import meta from "../src/data/meta";

const MyApp = ({ Component, pageProps }) => {
  return (
      <Fragment>
          <Head>
              <title>{meta.title} - {meta.tagline}</title>
              <meta name="viewport" content={meta.viewport} />
          </Head>
          <GlobalContextProvider>
            <DefaultPage>
              <Component {...pageProps} />
            </DefaultPage>
          </GlobalContextProvider>
      </Fragment>
  )
}

export default MyApp;
