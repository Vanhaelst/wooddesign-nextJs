import React from "react";
import Link from "next/link";

const PromoBar = () => (
  <Link
    href="http://shop.wooddesign.be"
    target="_blank"
    className="relative z-[9960] block w-full py-2 text-center text-xs md:text-sm  uppercase tracking-wide text-white hover:opacity-90 font-light"
    style={{ backgroundColor: "#8dc63f" }}
  >
    Nieuw: bekijk onze webshop voor onderhoudsproducten &amp; accessoires &rarr;
  </Link>
);

export default PromoBar;
