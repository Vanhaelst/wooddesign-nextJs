import React, { useState } from "react";
import { GraphQLClient } from "graphql-request";
import Head from "next/head";
import meta from "src/data/meta";
import Navigation from "src/components/Navigation";
import Grid from "@/components/Grid";
import Footer from "../src/components/Footer";
import Breadcrumbs from "../src/components/Breadcrumbs";
import ContentWrapper from "../src/components/ContentWrapper";
import { ServiceDetail } from "../src/components/Service/Detail";
import terrassen from "../src/data/services/terrassen";
import companyData from "../src/data/companyData";
import { API_SLUG } from "../src/data/api";
import Masonry from "../src/components/Masonry";
import Link from "@/components/Link";
import { Paragraph } from "../publipirates-react";
import { CallToAction } from "../src/components/CallToAction";
import Faq from "../src/components/Faq";
import useInfiniteScroll from "../src/hooks/useInfiniteScroll";
import { canonicalUrl, faqJsonLd } from "../src/utils/seo";

const faqItems = [
  {
    question: "Welke houtsoorten gebruikt Wooddesign voor terrassen?",
    answer:
      "We werken met duurzame, weersbestendige hardhoutsoorten zoals ipé, padoek, bangkirai en afzelia, en desgewenst met duurzame alternatieven zoals composiet. Elke houtsoort heeft een eigen uitstraling en onderhoudsbehoefte, waar we u graag in adviseren.",
  },
  {
    question: "Hoeveel onderhoud vraagt een houten terras?",
    answer:
      "Dat hangt af van de gekozen houtsoort en de gewenste look. Onbehandeld hardhout vergrijst mooi en vraagt weinig onderhoud; wilt u de oorspronkelijke kleur behouden, dan is periodieke behandeling met olie aangewezen. We bespreken de onderhoudsbehoefte van elke optie tijdens het adviesgesprek.",
  },
  {
    question:
      "Kan Wooddesign ook een terras op een plat dak of rond een zwembad plaatsen?",
    answer:
      "Ja. We plaatsen terrassen op het dak, in de tuin of rond het zwembad, telkens met materialen die bestand zijn tegen de specifieke omstandigheden van die locatie.",
  },
  {
    question:
      "Kan Wooddesign in hetzelfde project ook de gevel of parketvloer verzorgen?",
    answer:
      "Zeker. Naast terrassen plaatsen we ook parketvloeren en gevelbekleding, zodat u voor uw volledige project bij één specialist terecht kan in plaats van meerdere aannemers te moeten coördineren.",
  },
];

const graphcms = new GraphQLClient(API_SLUG);
const category = ["Terras"];
const enums = {
  INITAL_AMOUNT: 9,
  EXTRA_AMOUNT: 6,
  ALL: "all",
};

const Terras = ({ realisations, pagination }) => {
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

    return data.then((data) => {
      setPaginatedRealisations((prevState) => [
        ...prevState,
        ...data.realisations,
      ]);
      setNextPage(() => data?.realisationsConnection?.pageInfo?.hasNextPage);
    });
  };

  const loadMoreRef = useInfiniteScroll(handleLoadMore, hasNextPage);

  return (
    <div>
      <Head>
        <title>Houten Terras Antwerpen & Kontich | Wooddesign</title>
        <meta
          name="description"
          content="Houten terras laten aanleggen in Antwerpen, Kontich en omstreken? Wooddesign plaatst hardhouten terrassen in ipé, padoek, bangkirai en afzelia, duurzaam en weersbestendig."
        />
        <link rel="canonical" href={canonicalUrl("/terras")} />
        <meta
          property="og:title"
          content="Houten Terras Antwerpen & Kontich | Wooddesign"
          key="title"
        />
        <meta
          property="og:description"
          content="Houten terras laten aanleggen in Antwerpen, Kontich en omstreken? Wooddesign plaatst hardhouten terrassen in ipé, padoek, bangkirai en afzelia, duurzaam en weersbestendig."
        />
        <meta property="og:url" content={canonicalUrl("/terras")} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd(faqItems)),
          }}
        />
      </Head>
      <Navigation />
      <Breadcrumbs title="Een terras is meer dan een buitenruimte, het is een verlengstuk van je woning">
        <Paragraph className="mb-3">
          Een mooi terras vergroot uw wooncomfort en creëert een plek om tot
          rust te komen – op het dak, in de tuin of rond het zwembad.
        </Paragraph>
        <Paragraph className="mb-6">
          We werken met duurzame en weersbestendige hardhoutsoorten zoals ipé,
          padoek, bangkirai en afzelia, die mooi verouderen en jarenlang meegaan
          – met minimale onderhoudsbehoefte. Voor terrassen in Antwerpen,
          Kontich en omstreken bent u bij ons aan het juiste adres.
        </Paragraph>
        <Paragraph>
          Naast terrassen plaatsen we ook{" "}
          <Link href="/parket" type="hidden">
            parketvloeren
          </Link>{" "}
          en{" "}
          <Link href="/gevel" type="hidden">
            gevelbekleding
          </Link>
          . Zo bent u voor uw volledige project aan één specialist verbonden.
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
                <div ref={loadMoreRef} />
              </Grid>
            )}
          </Grid>
        </Grid>
      </ContentWrapper>

      <CallToAction
        title="Graag een offerte voor uw terras?"
        description="Benieuwd naar de mogelijkheden voor jouw project? Vraag vandaag nog een vrijblijvende offerte aan en ontdek hoe wij jou kunnen helpen."
        button={{ cta: "Ik wil een offerte", href: "/contact" }}
      />

      <ContentWrapper>
        <Grid container>
          <Grid row>
            <Grid item xs={12}>
              <Faq
                title="Veelgestelde vragen over houten terrassen"
                items={faqItems}
              />
            </Grid>
          </Grid>
        </Grid>
      </ContentWrapper>

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

export default Terras;
