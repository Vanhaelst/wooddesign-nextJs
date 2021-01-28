import React from "react";
import Head from "next/head";

const HtmlHead = ({ meta }) => (
    <Head>
        <title>Publipirates - {meta.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <meta
            property="og:title"
            content={`Publipirates - ${meta.title}`}
            key="title"
        />
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={meta.url}/>
        {meta.image && <meta property="og:image" content={meta.image}/>}
        <meta property="og:description" content={meta.description}/>
        <meta property="og:locale" content="nl_BE"/>
    </Head>
);

export default HtmlHead;
