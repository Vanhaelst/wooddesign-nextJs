import React from "react";
import Link from "next/link";

const PromoBar = () => (
  <Link
    href="http://shop.wooddesign.be"
    target="_blank"
    className="relative z-[9960] block w-full bg-charcoal px-4 py-2.5 text-center text-[11px] font-light uppercase tracking-[0.18em] text-ivory transition-colors hover:text-brass md:text-xs"
  >
    Nieuw: bekijk onze webshop voor onderhoudsproducten &amp; accessoires
    &rarr;
  </Link>
);

export default PromoBar;
