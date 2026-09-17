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
import Link from "@/components/Link";
import { API_SLUG } from "../src/data/api";
import { CallToAction } from "../src/components/CallToAction";
import Faq from "../src/components/Faq";
import useInfiniteScroll from "../src/hooks/useInfiniteScroll";
import { canonicalUrl, faqJsonLd } from "../src/utils/seo";

const faqItems = [
  {
    question: "Wat is het verschil tussen massief en meerlaags parket?",
    answer:
      "Massief parket bestaat volledig uit hout en kan meerdere keren geschuurd worden, wat het extra duurzaam maakt. Meerlaags parket heeft een houten toplaag op een stabiele onderconstructie, waardoor het minder werkt bij temperatuur- en vochtschommelingen. Welke keuze het beste past, hangt af van uw ondervloer, ruimte en wensen. We adviseren u hier graag over.",
  },
  {
    question: "Kan een bestaande parketvloer geschuurd en behandeld worden?",
    answer:
      "In de meeste gevallen wel. Een versleten of beschadigde parketvloer kan vaak worden opgeschuurd en opnieuw behandeld met olie of vernis, waardoor ze er weer als nieuw uitziet zonder dat u de volledige vloer moet vervangen. We bekijken dit graag ter plaatse.",
  },
  {
    question: "In welke regio plaatst Wooddesign parketvloeren?",
    answer:
      "Vanuit onze showroom in Kontich plaatsen we parketvloeren in de hele regio, onder andere in Antwerpen, Mechelen, Lier en Edegem, voor zowel particulieren als bouwprojecten.",
  },
  {
    question: "Hoe vraag ik een offerte aan voor mijn parketvloer?",
    answer:
      "Via ons contactformulier of telefonisch. We bespreken uw project, komen indien nodig ter plaatse langs en bezorgen u een vrijblijvende offerte op maat.",
  },
];

const graphcms = new GraphQLClient(API_SLUG);
const category = ["Parket"];
const enums = {
  INITAL_AMOUNT: 9,
  EXTRA_AMOUNT: 6,
  ALL: "all",
};

const Services = ({ realisations, pagination }) => {
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
        <title>Parketvloeren Antwerpen & Kontich | Wooddesign</title>
        <meta
          name="description"
          content="Parketvloer laten leggen, schuren of renoveren in Antwerpen, Kontich en omstreken? Wooddesign is uw parketteur voor massief en meerlaags parket, visgraat en hongaarse punt."
        />
        <link rel="canonical" href={canonicalUrl("/parket")} />
        <meta
          property="og:title"
          content="Parketvloeren Antwerpen & Kontich | Wooddesign"
          key="title"
        />
        <meta
          property="og:description"
          content="Parketvloer laten leggen, schuren of renoveren in Antwerpen, Kontich en omstreken? Wooddesign is uw parketteur voor massief en meerlaags parket, visgraat en hongaarse punt."
        />
        <meta property="og:url" content={canonicalUrl("/parket")} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd(faqItems)),
          }}
        />
      </Head>

      <Navigation />
      <Breadcrumbs title="PARKET, tijdloze elegantie en natuurlijke warmte">
        <Paragraph className="mb-3">
          Voor wie waarde hecht aan een warme, sfeervolle uitstraling, is parket
          de ideale keuze. Deze vloeren combineren duurzaamheid met tijdloze
          klasse en worden niet alleen nieuw geplaatst, maar ook vaak
          gerenoveerd. Door ze te schuren, behandelen of op te frissen, blijft
          uw parketvloer jarenlang in topconditie en behoudt ze haar authentieke
          charme.
        </Paragraph>
        <Paragraph className="mb-3">
          Als parketteur in Antwerpen, Kontich en omstreken laten we u zowel
          massief als meerlaags parket plaatsen, van klassieke stroken tot
          visgraat en hongaarse punt in eik en andere houtsoorten. Wilt u uw
          parketvloer laten leggen of een bestaande vloer laten renoveren?
          Bij ons kan het allebei.
        </Paragraph>
        <Paragraph className="mb-6">
          Verken onze collectie, ontdek de mogelijkheden voor uw woning of
          project, en laat u inspireren door de schoonheid van parketvloeren.
          Wij helpen u graag verder bij het maken van de juiste keuze in onze
          toonzaal te Kontich.
        </Paragraph>
        <Paragraph>
          Naast parket plaatsen we ook{" "}
          <Link href="/gevel" type="hidden">
            duurzame gevelbekleding
          </Link>{" "}
          en{" "}
          <Link href="/terras" type="hidden">
            houten terrassen
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
        title="Graag een offerte voor uw parket?"
        description="Benieuwd naar de mogelijkheden voor jouw project? Vraag vandaag nog een vrijblijvende offerte aan en ontdek hoe wij jou kunnen helpen."
        button={{ cta: "Ik wil een offerte", href: "/contact" }}
      />

      <ContentWrapper>
        <Grid container>
          <Grid row>
            <Grid item xs={12}>
              <Faq
                title="Veelgestelde vragen over parketvloeren"
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

export default Services;
