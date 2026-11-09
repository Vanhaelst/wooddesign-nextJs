import React from "react";
import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import Grid from "@/components/Grid";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Footer from "src/components/Footer";
import Box from "@/components/Box";
import Link from "@/components/Link";
import { cx } from "@/utils/cx";
import Button from "@/components/Button";
import CookieBanner from "@/components/Card";
import meta from "src/data/meta";
import Navigation from "src/components/Navigation";
import ContentWrapper from "src/components/ContentWrapper";
import { services } from "../src/data/services/overview";

const homeServices = [
  ...services,
  {
    title: "Vinyl",
    image: "images/vinylvloer/vinylvloer.jpg",
    slug: "/vinyl",
  },
  {
    title: "Onderhoud",
    image: "images/webshop.png",
    slug: "https://shop.wooddesign.be",
    target: "_blank",
  },
];
import useGlobalContext from "../src/context/hooks/useGlobalContext";

import { API_SLUG } from "../src/data/api";
import { Row } from "../src/components/Row";
import { CallToAction } from "../src/components/CallToAction";
import { canonicalUrl } from "../src/utils/seo";
import SectionHeading from "../src/components/SectionHeading";
import ProjectCard from "../src/components/ProjectCard";
import Reveal from "../src/components/Reveal";

const tileClasses =
  "group relative block aspect-[4/5] overflow-hidden rounded-[2px] bg-sand";

const trustPoints = [
  {
    title: "25+ jaar ervaring",
    description: "Van eenmanszaak tot specialist in parket, gevel en terras.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#a98a5a" strokeWidth="1.25" className="mx-auto h-9 w-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Eigen vakmensen",
    description: "Plaatsing door ons eigen team, geen onderaannemers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#a98a5a" strokeWidth="1.25" className="mx-auto h-9 w-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L1.5 3l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75" />
      </svg>
    ),
  },
  {
    title: "Gratis offerte",
    description: "Vrijblijvend advies en een offerte op maat van uw project.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#a98a5a" strokeWidth="1.25" className="mx-auto h-9 w-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75M3.75 4.5h16.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75V5.25a.75.75 0 01.75-.75z" />
      </svg>
    ),
  },
];

const graphcms = new GraphQLClient(API_SLUG);

const Section = ({ className, ...props }) => (
  <Box className={cx("py-16 md:py-28", className)} {...props} />
);

const Eyebrow = ({ children }) => (
  <span className="mb-6 block text-[11px] font-medium uppercase tracking-[0.3em] text-muted">
    {children}
  </span>
);

const Home = ({ realisations = [] }) => {
  const { isMobile } = useGlobalContext();

  return (
    <div>
      <Head>
        <title>
          Wooddesign - Parket, Gevelbekleding, Terrassen & Vinyl Antwerpen
        </title>
        <meta
          name="description"
          content="Wooddesign is dé specialist in parketvloeren, gevelbekleding, houten terrassen en vinylvloeren in Kontich, Antwerpen en omstreken. 25+ jaar ervaring, één aannemer voor uw volledige project. Vraag een offerte aan."
        />
        <meta name="viewport" content={meta.viewport} />
        <link rel="canonical" href={canonicalUrl("/")} />
        <meta
          property="og:title"
          content="Wooddesign - Specialist Parket, Gevelbekleding, Terrassen & Vinyl"
          key="title"
        />
        <meta
          property="og:description"
          content="Dé specialist in parketvloeren, gevelbekleding, houten terrassen en vinylvloeren in Kontich, Antwerpen en omstreken. 25+ jaar ervaring, één aannemer voor uw volledige project."
        />
        <meta property="og:url" content={canonicalUrl("/")} />
      </Head>
      <Navigation color="white" position="absolute" />

      {/* Hero */}
      <div className="relative flex min-h-[88svh] w-full items-center justify-center overflow-hidden px-4 text-center">
        <div
          className="photo-grade absolute inset-0 animate-hero-zoom bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('images/bram-kaat-low-18.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
        <div className="relative z-10 mx-auto max-w-4xl pt-24">
          <span className="mb-6 block animate-fade-up text-[11px] font-light uppercase tracking-[0.4em] text-white/80 [animation-delay:300ms]">
            Welkom bij
          </span>
          <h1 className="animate-fade-up font-display text-[clamp(52px,13vw,128px)] font-medium leading-[0.95] text-white [animation-delay:500ms]">
            Wooddesign
            <span className="mx-auto mt-8 block max-w-2xl text-balance font-sans text-[15px] font-light normal-case leading-relaxed tracking-normal text-white/90 md:text-lg">
              Specialist in parket, gevelbekleding, terrassen &amp; vinyl in
              Antwerpen, Kontich en omgeving
            </span>
          </h1>
          <div className="mt-10 flex animate-fade-up flex-col items-center justify-center gap-4 sm:flex-row [animation-delay:800ms]">
            <a
              href="/contact"
              className="inline-block bg-ivory px-9 py-[15px] text-[12px] font-medium uppercase leading-[1.2] tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-white"
            >
              Vraag een offerte
            </a>
            <a
              href="/realisaties"
              className="inline-block border border-white/60 px-9 py-[15px] text-[12px] font-medium uppercase leading-[1.2] tracking-[0.2em] text-white transition-colors duration-300 hover:bg-white hover:text-ink"
            >
              Bekijk realisaties
            </a>
          </div>
        </div>
        <span
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 hidden h-14 w-px -translate-x-1/2 animate-fade-up bg-white/50 [animation-delay:1200ms] md:block"
        />
      </div>

      {/* Diensten */}
      <Section>
        <Grid container>
          <SectionHeading eyebrow="Wat we doen">Onze diensten</SectionHeading>
        </Grid>
        <Reveal className="relative mx-auto w-full max-w-[1800px] overflow-hidden px-4" delay={150}>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-ivory to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-ivory to-transparent sm:w-24" />
          <div className="overflow-x-auto px-10 pb-4 sm:px-24 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-4 sm:gap-6">
              {homeServices.map((service) => (
                <Link
                  key={service.slug}
                  href={service.slug}
                  target={service.target}
                  rel={service.target ? "noopener noreferrer" : undefined}
                  className={cx(
                    tileClasses,
                    "w-[78%] shrink-0 sm:w-[55%] md:w-[38%] lg:w-[calc((100%-3*1.5rem)/3.5)]",
                  )}
                >
                  <img
                    src={`/${service.image.replace(/^\//, "")}`}
                    alt=""
                    className="photo-grade absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
                  <span className="absolute bottom-6 left-6 z-[1]">
                    <span className="block font-display text-[30px] font-medium leading-none text-white">
                      {service.title}
                    </span>
                    <span className="mt-4 block h-px w-8 bg-white/70 transition-all duration-500 group-hover:w-16" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      <ContentWrapper flush>
        <CookieBanner />

        {/* Intro */}
        <Section>
          <Grid container>
            <Row
              isEven={false}
              image="images/intro2.jpeg"
              alt="Interieur met parketvloer geplaatst door Wooddesign"
            >
              <Eyebrow>Ons verhaal</Eyebrow>
              <p className="mb-8 font-display text-[26px] leading-[1.3] text-ink md:text-[32px]">
                Wat meer dan 25 jaar geleden begon als eenmanszaak in
                parketvloeren en terrassen, is ondertussen uitgegroeid tot een
                toonaangevend bedrijf gespecialiseerd in zowel parket, terras en
                gevel.
              </p>
              <Paragraph mb={4}>
                In tegenstelling tot wat onze naam doet vermoeden, plaatsen we
                niet enkel houtproducten, maar zijn we in de loop van de tijd
                geëvolueerd door de plaatsing van duurzame materialen zoals
                aluminium, volkern, vezelcement en composiet. Zo werken we met
                houtsoorten als eik, ipé, padoek, bangkirai en afzelia, naast
                duurzame alternatieven voor gevel en terras.
              </Paragraph>
              <Paragraph>
                Onze kracht ligt dan ook in de combinatie van jarenlange
                expertise, diepgaande materiaalkennis en het gebruik van
                kwaliteitsproducten. Of het nu gaat om een stijlvolle
                parketvloer, duurzame gevelbekleding of een prachtig terras, wij
                staan garant voor een hoog afwerkingsniveau en een service die
                verder reikt dan de plaatsing door eigen vakmensen. En omdat we
                parket, gevel én terras zelf in huis hebben, bent u voor uw
                volledige project aan één specialist verbonden.
              </Paragraph>
            </Row>
          </Grid>
        </Section>

        {/* Recente realisaties */}
        {realisations.length > 0 && (
          <Section className="bg-sand">
            <Grid container>
              <SectionHeading eyebrow="Portfolio">
                Recente realisaties
              </SectionHeading>
              <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                {realisations.map((item, index) => (
                  <Reveal key={item.slug} delay={index * 120}>
                    <ProjectCard
                      item={item}
                      eyebrow={
                        item.categories?.length
                          ? [].concat(item.categories).join(" · ")
                          : undefined
                      }
                    />
                  </Reveal>
                ))}
              </div>
              <div className="mt-14 text-center">
                <Button outline href="/realisaties">
                  Alle realisaties
                </Button>
              </div>
            </Grid>
          </Section>
        )}

        {/* Toonzaal */}
        <Section>
          <Grid container>
            <Row
              isEven={true}
              image="images/toonzaal.jpeg"
              alt="Toonzaal van Wooddesign in Kontich met houtsoorten en materialen"
            >
              <Eyebrow>Toonzaal</Eyebrow>
              <Heading level={3} mb={6}>
                Bezoek onze toonzaal in Kontich
              </Heading>
              <Paragraph mb={4}>
                Laat je inspireren door ons uitgebreid aanbod aan houtsoorten en
                duurzame materialen voor gevelbekleding, terrassen en
                parketvloeren.
              </Paragraph>
              <Paragraph mb={8}>
                Bij <strong>Wooddesign</strong> zetten we samen met jou de stap
                van idee naar realisatie. Jouw project, onze passie!
              </Paragraph>
              <Button outline href="/contact" block={isMobile}>
                Maak een afspraak
              </Button>
            </Row>
          </Grid>
        </Section>

        {/* Trust row */}
        <Section className="bg-sand">
          <Grid container>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-line">
              {trustPoints.map((point, index) => (
                <Reveal
                  key={point.title}
                  delay={index * 150}
                  className="px-6 text-center md:px-10"
                >
                  {point.icon}
                  <Heading level={4} mt={5} mb={3}>
                    {point.title}
                  </Heading>
                  <Paragraph>{point.description}</Paragraph>
                </Reveal>
              ))}
            </div>
          </Grid>
        </Section>

        <CallToAction
          title="Ontdek onze webshop"
          description="Bezoek onze webshop voor een breed assortiment aan producten en materialen voor parketvloeren, gevelbekleding en terrassen. Kies voor kwalitatieve materialen en maak jouw project tot een succes!"
          button={{
            cta: "Bekijk onze webshop",
            href: "https://shop.wooddesign.be",
          }}
        />
      </ContentWrapper>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  let { realisations } = await graphcms.request(
    `{
      realisations(orderBy: createdAt_DESC, first: 4) {
        title
        slug
        categories
        customer
        images{
          url
        }
      }
    }`,
  );

  return {
    props: {
      realisations: realisations || "No realisations",
    },
  };
}

export default Home;
