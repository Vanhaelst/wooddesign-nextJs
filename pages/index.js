import React from "react";
import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import Grid from "@/components/Grid";
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

const tileClasses =
  "relative block h-[320px] overflow-hidden rounded-[4px] bg-cover bg-center after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/55 after:to-transparent after:to-45% after:content-[''] hover:opacity-[.92]";

const trustPoints = [
  {
    title: "25+ jaar ervaring",
    description: "Van eenmanszaak tot specialist in parket, gevel en terras.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4a7322" strokeWidth="1.5" className="w-8 h-8 mx-auto">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Eigen vakmensen",
    description: "Plaatsing door ons eigen team, geen onderaannemers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4a7322" strokeWidth="1.5" className="w-8 h-8 mx-auto">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L1.5 3l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75" />
      </svg>
    ),
  },
  {
    title: "Gratis offerte",
    description: "Vrijblijvend advies en een offerte op maat van uw project.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4a7322" strokeWidth="1.5" className="w-8 h-8 mx-auto">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75M3.75 4.5h16.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75V5.25a.75.75 0 01.75-.75z" />
      </svg>
    ),
  },
];

const graphcms = new GraphQLClient(API_SLUG);

const Section = ({ className, ...props }) => (
  <Box className={cx("py-12 md:py-24", className)} {...props} />
);

const Home = () => {
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

      <div
        className="relative w-full h-[75vh] bg-cover bg-no-repeat bg-center flex justify-center items-center flex-col"
        style={{ backgroundImage: `url('images/bram-kaat-low-18.jpg')` }}
      >
        <div className="absolute top-90 left-0 w-full h-full bg-black/50" />
        <span className="text-xl uppercase text-white">Welkom bij</span>
        <h1 className="text-[clamp(32px,11.5vw,60px)] md:text-7xl uppercase text-white text-center leading-tight px-4">
          Wooddesign
          <span className="block text-lg md:text-2xl normal-case tracking-normal mt-3">
            Specialist in parket, gevelbekleding, terrassen &amp; vinyl in
            Antwerpen, Kontich en omgeving
          </span>
        </h1>
      </div>

      {/* Collecties-style quick nav */}
      <Section>
        <Grid container>
          <SectionHeading>Onze diensten</SectionHeading>
        </Grid>
        <div className="relative max-w-[1800px] w-full px-4 mx-auto overflow-hidden ">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-24" />
          <div className="overflow-x-auto md:px-10 pb-4 sm:px-24 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <span className="absolute bottom-[18px] left-5 z-[1] font-secondary text-[16px] font-medium uppercase tracking-[0.08em] text-white">
                    {service.title}
                  </span>
                </Link>
              ))}{" "}
            </div>
          </div>
        </div>
      </Section>

      <ContentWrapper>
        <CookieBanner />

        {/* Intro */}
        <Section>
          <Grid container>
            <Row
              isEven={false}
              image="images/intro2.jpeg"
              alt="Interieur met parketvloer geplaatst door Wooddesign"
            >
              <Paragraph mb={2}>
                Wat meer dan 25 jaar geleden begon als eenmanszaak in
                parketvloeren en terrassen, is ondertussen uitgegroeid tot een
                toonaangevend bedrijf gespecialiseerd in zowel parket, terras en
                gevel.
              </Paragraph>
              <Paragraph mb={6}>
                In tegenstelling tot wat onze naam doet vermoeden, plaatsen we
                niet enkel houtproducten, maar zijn we in de loop van de tijd
                geëvolueerd door de plaatsing van duurzame materialen zoals
                aluminium, volkern, vezelcement en composiet. Zo werken we met
                houtsoorten als eik, ipé, padoek, bangkirai en afzelia, naast
                duurzame alternatieven voor gevel en terras.
              </Paragraph>
              <Paragraph mb={6}>
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
            <Row
              isEven={true}
              image="images/toonzaal.jpeg"
              alt="Toonzaal van Wooddesign in Kontich met houtsoorten en materialen"
            >
              <Paragraph mb={6}>
                <strong>Bezoek onze toonzaal in Kontich</strong> en laat je
                inspireren door ons uitgebreid aanbod aan houtsoorten en
                duurzame materialen voor gevelbekleding, terrassen en
                parketvloeren.
              </Paragraph>
              <Paragraph mb={6}>
                Bij <strong>Wooddesign</strong> zetten we samen met jou de stap
                van idee naar realisatie. Jouw project, onze passie!
              </Paragraph>
              <Button outline as={Link} href="/contact" block={isMobile}>
                Maak een afspraak
              </Button>
            </Row>
          </Grid>
        </Section>

        {/* Diensten */}
        {/* <Section backgroundColor="#fafafa">
          <Grid container>
            {services.map((service, index) => (
              <Row
                isEven={index % 2 !== 0}
                image={service.image}
                alt={service.alt}
                key={service.slug}
              >
                <Heading level={3} color="#464646">
                  {service.title}
                </Heading>
                <Paragraph mt={2} mb={2} fontWeight="bold">
                  {service.subtitle}
                </Paragraph>
                <Paragraph mb={6}>{service.description}</Paragraph>
                <Button outline as={Link} href={service.slug} block={isMobile}>
                  {service.cta}
                </Button>
              </Row>
            ))}
          </Grid>
        </Section>*/}

        {/* Trust row */}
        <Section backgroundColor="#fafafa">
          <Grid container>
            <Grid row>
              {trustPoints.map((point) => (
                <Grid item xs={12} sm={4} mb={6} key={point.title}>
                  <div className="text-center">
                    {point.icon}
                    <Paragraph
                      mt={3}
                      mb={1}
                      fontWeight="bold"
                      className="uppercase tracking-wide"
                    >
                      {point.title}
                    </Paragraph>
                    <Paragraph fontFamily="secondary">
                      {point.description}
                    </Paragraph>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Section>

        {/* Werkgebied */}
        {/*
        <Section>
          <Grid container>
            <SectionHeading>
              Actief in Antwerpen, Kontich en de hele regio
            </SectionHeading>
            <Grid row>
              <Grid item xs={12} className="text-center">
                <Paragraph mb={4}>
                  Vanuit onze showroom in Kontich plaatsen we parketvloeren,
                  gevelbekleding en terrassen voor particulieren en
                  bouwprojecten in de hele provincie Antwerpen, onder andere
                  in:
                </Paragraph>
                <Paragraph mb={2}>
                  {regions.map((region, index) => (
                    <React.Fragment key={region.slug}>
                      <Link href={`/regio/${region.slug}`} type="hidden">
                        {region.name}
                      </Link>
                      {index < regions.length - 1 && (
                        <span className="mx-2">|</span>
                      )}
                    </React.Fragment>
                  ))}
                </Paragraph>
              </Grid>
            </Grid>
          </Grid>
        </Section>*/}

        <CallToAction
          title="Ontdek onze webshop."
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
