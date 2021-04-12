import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import meta from "src/data/meta";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content={meta.description} />
          <meta name="keywords" content={meta.keywords} />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="p:domain_verify" content={meta.domain_verify_code} />
          <meta name="robots" content="index, follow" />
          {/* CSS STYLES */}
          {/*
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/images/theme/app-icons/apple-icon-57x57.png"
          />{" "}
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/images/theme/app-icons/apple-icon-60x60.png"
          />{" "}
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/images/theme/app-icons/apple-icon-72x72.png"
          />{" "}
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/images/theme/app-icons/apple-icon-76x76.png"
          />{" "}
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/images/theme/app-icons/apple-icon-114x114.png"
          />{" "}
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/images/theme/app-icons/apple-icon-120x120.png"
          />{" "}
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/images/theme/app-icons/apple-icon-144x144.png"
          />{" "}
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/images/theme/app-icons/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/theme/app-icons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/images/theme/app-icons/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/images/theme/app-icons/android-chrome-512x512.png"
          />
          */}
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/theme/app-icons/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/theme/app-icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/images/theme/app-icons/favicon-96x96.png"
          />{" "}
          <link
            rel="shortcut icon"
            href="/style/theme/favicon.ico"
            type="image/x-icon"
          />
          <link
            rel="icon"
            href="/images/theme/favicon.ico"
            type="image/x-icon"
          />
          <link
            rel="manifest"
            href="/images/theme/app-icons/site.webmanifest"
          />
          <link
            rel="mask-icon"
            href="/images/theme/app-icons/safari-pinned-tab.svg"
            color="#8dc63f"
          />
          <meta
            name="msapplication-TileColor"
            content={meta.msapplicationTileColor}
          />
          <meta
            name="msapplication-TileImage"
            content="/images/theme/app-icons/mstile-150x150.png"
          />
          <meta name="theme-color" content={meta.themeColor} />
          {/* OPEN GRAPH VOOR FACEBOOK */}
          <meta property="og:title" content={meta.og.title} />
          <meta property="og:url" content={meta.og.url} />
          <meta property="og:description" content={meta.og.description} />
          <meta property="og:site_name" content={meta.og.site_name} />
          <meta property="og:type" content="Website" />
          <meta property="og:locale" content="nl_NL" />
          <meta property="og:email" content={meta.og.email} />
          <meta property="og:phone_number" content={meta.og.phone} />
          <meta property="og:latitude" content={meta.og.latitude} />
          <meta property="og:longitude" content={meta.og.longitude} />
          <meta property="og:street-address" content={meta.og.streetAddress} />
          <meta property="og:locality" content={meta.og.locality} />
          <meta property="og:region" content={meta.og.region} />
          <meta property="og:postal-code" content={meta.og.postalCode} />
          <meta property="og:country-name" content={meta.og.countryName} />
          {/*<script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"/>*/}
          {/*<script src="https://connect.facebook.net/signals/config/326302681241847?v=2.9.33&amp;r=stable" async=""/>
                    {/*<script async="" src="https://connect.facebook.net/en_US/fbevents.js"/>*/}
          {/*<script async="" src={`https://www.googletagmanager.com/gtm.js?id=${meta.GoogleTagManagerCode}`} />*/}
          <link rel="canonical" href={meta.url} />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@200;400;600;700&display=swap"
            rel="stylesheet"
          />
          <script
              type="text/javascript"
              src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
