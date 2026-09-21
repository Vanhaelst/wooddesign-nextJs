import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import meta from "src/data/meta";
import { localBusinessJsonLd } from "src/utils/seo";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/*
            No sitewide <meta name="description"> here on purpose: every page
            sets its own unique, keyword-targeted description via next/head.
            A shared default here previously made pages fall back to (or, on
            some Next.js versions, keep) the same generic description.
          */}
          <noscript>
            <style>{`[data-reveal]{opacity:1!important;transform:none!important}[data-reveal] img{transform:none!important}`}</style>
          </noscript>
          <meta name="keywords" content={meta.keywords} />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="p:domain_verify" content={meta.domain_verify_code} />
          {/*
            No sitewide robots meta here either: "index, follow" is the
            default when the tag is absent, and keeping it here produced a
            second, conflicting <meta name="robots"> on pages (like the
            legal pages) that set their own "noindex".
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
            color="#61993b"
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
          {/*
            OPEN GRAPH VOOR FACEBOOK. og:title, og:description and og:url are
            NOT set here on purpose (they used to be, hardcoded to the
            homepage) - every page sets its own via next/head so shares of
            /parket, /gevel, etc. show the right title/URL instead of the
            homepage's.
          */}
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
          {/*
            No sitewide canonical link here either: it used to hardcode the
            homepage URL on every page (meta.url), which told Google every
            subpage was a duplicate of the homepage and should be dropped
            from the index. Each page now sets its own self-referencing
            canonical via next/head.
          */}
          <link rel="icon" href="/favicon.ico" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(localBusinessJsonLd()),
            }}
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
