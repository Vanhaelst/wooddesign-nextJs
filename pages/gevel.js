import React, { useState } from "react";
import { GraphQLClient } from "graphql-request";
import Head from "next/head";
import meta from "src/data/meta";
import Navigation from "src/components/Navigation";
import Grid from "@/components/Grid";
import Footer from "../src/components/Footer";
import Breadcrumbs from "../src/components/Breadcrumbs";
import ContentWrapper from "../src/components/ContentWrapper";
import companyData from "../src/data/companyData";
import { Paragraph } from "../publipirates-react";
import Masonry from "../src/components/Masonry";
import Button from "@/components/Button";
import Link from "@/components/Link";
import { API_SLUG } from "../src/data/api";
import { CallToAction } from "../src/components/CallToAction";
import Faq from "../src/components/Faq";
import { canonicalUrl, faqJsonLd } from "../src/utils/seo";

const faqItems = [
  {
    question: "Welke materialen gebruikt Wooddesign voor gevelbekleding?",
    answer:
      "Naast hout plaatsen we ook duurzame materialen zoals composiet, thermowood, trespa, aluminium, volkern en vezelcement. Welk materiaal het beste past, hangt af van het gewenste uitzicht, onderhoud en budget. We adviseren u hier graag over in onze toonzaal.",
  },
  {
    question:
      "Wat is het verschil tussen composiet, thermowood en trespa gevelbekleding?",
    answer:
      "Composiet gevelbekleding is een onderhoudsarm mengsel van hout en kunststof dat niet vergrijst of rot. Thermowood is hittebehandeld hout dat daardoor extra stabiel en duurzaam wordt zonder chemische verduurzaming. Trespa (HPL) is een hoogwaardige plaat die bestand is tegen weersinvloeden en verkrijgbaar in veel kleuren. We bespreken de voor- en nadelen van elke soort graag tijdens het adviesgesprek.",
  },
  {
    question: "Is houten gevelbekleding onderhoudsvriendelijk?",
    answer:
      "Onbehandeld hout vergrijst op een natuurlijke manier, wat door velen net gewaardeerd wordt. Wilt u de oorspronkelijke kleur behouden, dan kan de gevel periodiek behandeld worden. We bespreken de onderhoudsbehoefte van elke houtsoort of materiaal graag tijdens het adviesgesprek.",
  },
  {
    question: "Kan Wooddesign ook de isolatie van mijn gevel verzorgen?",
    answer:
      "Ja. We besteden bijzondere aandacht aan de isolatie achter de gevelbekleding, zodat uw woning niet alleen mooi oogt, maar ook optimaal presteert op vlak van energieverbruik.",
  },
  {
    question: "In welke regio plaatst Wooddesign gevelbekleding?",
    answer:
      "Vanuit onze showroom in Kontich plaatsen we gevelbekleding in de hele regio, onder andere in Antwerpen, Mechelen, Lier en Edegem, voor zowel particulieren als bouwprojecten.",
  },
];

const graphcms = new GraphQLClient(API_SLUG);
const category = ["Gevel"];
const enums = {
  INITAL_AMOUNT: 9,
  EXTRA_AMOUNT: 6,
  ALL: "all",
};

const Gevel = ({ realisations, pagination }) => {
  const [paginatedRealisations, setPaginatedRealisations] =
    useState(realisations);
  const [hasNextPage, setNextPage] = useState(pagination.hasNextPage);

  const handleLoadMore = () => {
    const data = graphcms.request(`{
      realisations(
        first: ${enums.EXTRA_AMOUNT}, 
        skip: ${paginatedRealisations.length} 
        orderBy: createdAt_DESC
        ${category ? `, where: { categories_contains_all: [${category}] }` : ""}
      ) {
        title
        slug
        categories
        customer
        images{
          url
        }
      }
      realisationsConnection(
        first: ${enums.EXTRA_AMOUNT}, 
        skip: ${paginatedRealisations.length} 
        where: { categories_contains_all: [${category}] }
      ) {
        pageInfo {
          hasNextPage
        }
      }
    }`);

    data.then((data) => {
      setPaginatedRealisations((prevState) => [
        ...prevState,
        ...data.realisations,
      ]);
      setNextPage(() => data?.realisationsConnection?.pageInfo?.hasNextPage);
    });
  };

  return (
    <div>
      <Head>
        <title>Gevelbekleding Antwerpen & Kontich | Wooddesign</title>
        <meta
          name="description"
          content="Gevelbekleding in composiet, thermowood, trespa, hout of aluminium, geplaatst in Antwerpen, Kontich en omstreken. Wooddesign combineert esthetiek met isolatie op maat."
        />
        <link rel="canonical" href={canonicalUrl("/gevel")} />
        <meta
          property="og:title"
          content="Gevelbekleding Antwerpen & Kontich | Wooddesign"
          key="title"
        />
        <meta
          property="og:description"
          content="Gevelbekleding in composiet, thermowood, trespa, hout of aluminium, geplaatst in Antwerpen, Kontich en omstreken. Wooddesign combineert esthetiek met isolatie op maat."
        />
        <meta property="og:url" content={canonicalUrl("/gevel")} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd(faqItems)),
          }}
        />
      </Head>
      <Navigation />
      <Breadcrumbs title="Gevelbekleding: een duurzame, onderhoudsvriendelijke gevel met karakter">
        <Paragraph className="mb-3">
          Gevelbekleding van Wooddesign combineert esthetiek met
          energie-efficiëntie. Afgewerkt in hoogwaardige houtsoorten of
          duurzame materialen zoals composiet, thermowood, trespa, aluminium,
          vezelcement en volkern is uw gevel bestand tegen alle
          weersomstandigheden. We besteden bijzondere aandacht aan de
          isolatie, zodat uw woning niet alleen mooi oogt, maar ook optimaal
          presteert op vlak van energieverbruik.
        </Paragraph>
        <Paragraph className="mb-3">
          Met onze jarenlange ervaring in gevelbekleding in Antwerpen, Kontich
          en omstreken staan wij voor kwaliteit, duurzaamheid en maatwerk. Wij
          adviseren u graag over de beste keuze voor uw gevel, zodat deze zowel
          esthetisch als functioneel optimaal presteert.
        </Paragraph>
        <Paragraph>
          Ontdek de diverse mogelijkheden in onze toonzaal te Kontich en geef uw
          gevel de uitstraling die het verdient!
        </Paragraph>
      </Breadcrumbs>

      <ContentWrapper>
        <Grid container>
          <Grid row mb={5}>
            <Grid item xs={12}>
              <Masonry items={paginatedRealisations} />
            </Grid>
            {hasNextPage && (
              <Grid item xs={12}>
                <Button appearance="primary" onClick={handleLoadMore}>
                  Load more
                </Button>
              </Grid>
            )}
          </Grid>

          <Grid row mb={9}>
            <Grid item xs={12} md={10}>
              <Paragraph>
                Naast gevelbekleding plaatsen we ook{" "}
                <Link href="/parket" type="hidden">
                  parketvloeren
                </Link>{" "}
                en{" "}
                <Link href="/terras" type="hidden">
                  houten terrassen
                </Link>
                . Zo bent u voor uw volledige project aan één specialist
                verbonden.
              </Paragraph>
            </Grid>
          </Grid>
        </Grid>
      </ContentWrapper>

      <ContentWrapper>
        <Grid container>
          <Grid row>
            <Grid item xs={12}>
              <Faq
                title="Veelgestelde vragen over gevelbekleding"
                items={faqItems}
              />
            </Grid>
          </Grid>
        </Grid>
      </ContentWrapper>

      <CallToAction
        title="Graag een offerte voor uw gevel?"
        description="Benieuwd naar de mogelijkheden voor jouw project? Vraag vandaag nog een vrijblijvende offerte aan en ontdek hoe wij jou kunnen helpen."
        button={{ cta: "Ik wil een offerte", href: "/contact" }}
      />

      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  let { realisations, realisationsConnection } = await graphcms.request(
    `{
      realisations(
        first: ${enums.INITAL_AMOUNT}, 
        orderBy: createdAt_DESC, 
        where: { categories_contains_all: [${category}] }
      ) {
        title
        slug
        categories
        customer
        images{
          url
        }
      }
      
      realisationsConnection(
        first: ${enums.INITAL_AMOUNT}, 
        orderBy: createdAt_DESC
        where: { categories_contains_all: [${category}] }
      ) {
        pageInfo {
          hasNextPage
        }
      }
    }`,
  );

  return {
    props: {
      realisations: realisations || "No realisations",
      pagination: realisationsConnection?.pageInfo || {
        hasNextPage: false,
      },
    },
  };
}

export default Gevel;
