import React from "react";
import Link from "@/components/Link";
import Instagram from "@/icons/Instagram";
import Facebook from "@/icons/Facebook";
import Pinterest from "@/icons/Pinterest";
import Reveal from "../Reveal";
import Wordmark from "../Wordmark";
import companyData from "../../data/companyData";
import regions from "../../data/regions";
import guides from "../../data/guides";

const Eyebrow = ({ children }) => (
  <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.25em] text-brass">
    {children}
  </p>
);

const linkClasses =
  "text-[15px] font-light leading-8 !text-ivory/70 transition-colors duration-300 hover:!text-white";

const socials = [
  { label: "Instagram", href: companyData.social.instagram, Icon: Instagram },
  { label: "Facebook", href: companyData.social.facebook, Icon: Facebook },
  { label: "Pinterest", href: companyData.social.pinterest, Icon: Pinterest },
];

// `visit` shows the showroom-visit call to action above the columns.
const Footer = ({ visit = true }) => (
  <footer className="bg-charcoal text-ivory">
    {visit && (
      <div className="border-b border-white/10 px-4 py-20 text-center md:py-28">
        <Reveal className="mx-auto max-w-2xl">
          <span className="mb-6 block text-[11px] font-medium uppercase tracking-[0.3em] text-brass">
            Toonzaal Kontich
          </span>
          <h2 className="font-display text-[36px] font-medium leading-[1.1] text-ivory md:text-[52px]">
            Kom langs in onze toonzaal
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[16px] font-light leading-[1.8] text-ivory/70">
            Bekijk houtsoorten, staalstukken en afwerkingen in het echt en
            bespreek jouw project met onze vakmensen. Op afspraak, dinsdag tot
            zaterdag van 11u tot 16u.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-block bg-ivory px-9 py-[15px] text-[12px] font-medium uppercase leading-[1.2] tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-white"
            >
              Maak een afspraak
            </a>
            <a
              href={companyData.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/50 px-9 py-[15px] text-[12px] font-medium uppercase leading-[1.2] tracking-[0.2em] text-ivory transition-colors duration-300 hover:bg-ivory hover:text-ink"
            >
              Route
            </a>
          </div>
        </Reveal>
      </div>
    )}

    <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1200px] gap-12 py-16 md:grid-cols-2 md:py-24 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
      <div>
        <Wordmark tone="light" />
        <p className="mt-8 max-w-xs text-[15px] font-light leading-[1.8] text-ivory/70">
          Parket, gevelbekleding, terrassen en vinyl, geplaatst door eigen
          vakmensen in Antwerpen, Kontich en omstreken.
        </p>
        <div className="mt-8 flex items-center gap-5">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-ivory/70 transition-colors duration-300 hover:text-brass"
            >
              <Icon size="22px" />
            </a>
          ))}
        </div>
      </div>

      <div>
        <Eyebrow>Contact</Eyebrow>
        <address className="not-italic">
          <p className="text-[15px] font-light leading-8 text-ivory/70">
            {companyData.address.street} {companyData.address.number}
            {companyData.address.bus}
            <br />
            {companyData.address.zip} {companyData.address.city}
          </p>
          <p className="mt-4 text-[15px] font-light leading-8 text-ivory/70">
            <a
              href={`tel:${companyData.phone.unformatted}`}
              className="transition-colors duration-300 hover:text-white"
            >
              {companyData.phone.formatted}
            </a>
            <br />
            <a
              href={`mailto:${companyData.email}`}
              className="transition-colors duration-300 hover:text-white"
            >
              {companyData.email}
            </a>
          </p>
        </address>
      </div>

      <div>
        <Eyebrow>Werkgebied</Eyebrow>
        <ul>
          {regions.map((region) => (
            <li key={region.slug}>
              <Link
                href={`/regio/${region.slug}`}
                type="hidden"
                className={linkClasses}
              >
                {region.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Eyebrow>Kennisbank</Eyebrow>
        <ul>
          {guides.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={`/gids/${guide.slug}`}
                type="hidden"
                className={linkClasses}
              >
                {guide.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="border-t border-white/10 py-6">
      <div className="mx-auto flex w-[calc(100%-32px)] max-w-[1200px] flex-col items-center justify-between gap-2 text-[12px] font-light text-ivory/50 sm:flex-row">
        <p>
          <Link href="/cookie-verklaring" type="hidden" className="hover:text-white">
            Cookieverklaring
          </Link>
          &nbsp;·&nbsp;
          <Link href="/verkoops-voorwaarden" type="hidden" className="hover:text-white">
            Verkoopsvoorwaarden
          </Link>
          &nbsp;·&nbsp;
          {companyData.btw}
        </p>
        <p>
          Site by{" "}
          <Link href="http://www.studio94.be" type="hidden" className="hover:text-white">
            Studio94
          </Link>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
