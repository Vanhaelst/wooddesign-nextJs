import companyData from "src/data/companyData";
import meta from "src/data/meta";

export const SITE_URL = "https://www.wooddesign.be";

/**
 * Build a self-referencing canonical URL for a given path.
 * Always pass the path starting with "/" (e.g. "/parket", "/realisaties/foo").
 */
export const canonicalUrl = (path = "/") => {
  const cleanPath = path === "/" ? "/" : `/${path.replace(/^\/+/, "")}`;
  return `${SITE_URL}${cleanPath}`;
};

/**
 * Sitewide LocalBusiness / HomeAndConstructionBusiness structured data.
 * Rendered once in _document.js so every page carries consistent NAP data.
 */
export const localBusinessJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: companyData.companyName,
  legalName: "Wooddesign BV",
  url: SITE_URL,
  image: `${SITE_URL}/images/bram-kaat-low-18.jpg`,
  telephone: companyData.phone.unformatted,
  email: companyData.email,
  vatID: companyData.btw,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${companyData.address.street} ${companyData.address.number}${companyData.address.bus}`,
    addressLocality: companyData.address.city,
    postalCode: companyData.address.zip,
    addressCountry: "BE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: meta.og.latitude,
    longitude: meta.og.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "11:00",
      closes: "16:00",
      description: "Toonzaal en magazijn, uitsluitend op afspraak.",
    },
  ],
  sameAs: [
    companyData.social.instagram,
    companyData.social.facebook,
    companyData.social.pinterest,
  ],
  areaServed: [
    "Kontich",
    "Antwerpen",
    "Mechelen",
    "Lier",
    "Edegem",
    "Provincie Antwerpen",
  ].map((name) => ({ "@type": "City", name })),
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Parketvloeren leggen, schuren en renoveren",
        url: `${SITE_URL}/parket`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Houten en duurzame gevelbekleding plaatsen",
        url: `${SITE_URL}/gevel`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Houten terrassen aanleggen",
        url: `${SITE_URL}/terras`,
      },
    },
  ],
});

/**
 * FAQPage structured data. Pass an array of { question, answer } objects
 * (plain text answers, no markup).
 */
export const faqJsonLd = (faqs = []) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
});

/**
 * Flattens a Hygraph/GraphCMS rich-text `raw` AST into plain text, for use
 * in a meta description. Truncates to `maxLength` on a word boundary.
 */
export const richTextToPlainText = (raw, maxLength = 155) => {
  const collect = (node) => {
    if (!node) return "";
    if (typeof node.text === "string") return node.text;
    if (Array.isArray(node.children)) {
      return node.children.map(collect).join(" ");
    }
    return "";
  };

  const text = (raw?.children || []).map(collect).join(" ").replace(/\s+/g, " ").trim();

  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).replace(/\s+\S*$/, "")}…`;
};

/**
 * BreadcrumbList structured data. Pass an array of { name, path }.
 */
export const breadcrumbJsonLd = (items = []) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(({ name, path }, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name,
    item: canonicalUrl(path),
  })),
});
