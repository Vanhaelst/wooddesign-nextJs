import React from "react";
import Heading from "@/components/Heading";
import Reveal from "../Reveal";

// Centered section title: brass hairline, optional small-caps eyebrow, then a
// serif heading in sentence case.
const SectionHeading = ({ children, eyebrow, level = 2, as }) => (
  <Reveal className="mb-12 text-center md:mb-16">
    <span className="mx-auto mb-6 block h-px w-12 bg-brass" />
    {eyebrow && (
      <span className="mb-4 block text-[11px] font-medium uppercase tracking-[0.25em] text-muted">
        {eyebrow}
      </span>
    )}
    <Heading level={level} as={as}>
      {children}
    </Heading>
  </Reveal>
);

export default SectionHeading;
