import React from "react";
import Heading from "@/components/Heading";

// Page intro: a serif page title (the page's <h1>) and a narrow column of
// introductory copy, kept to a comfortable reading width. Eases in on load.
const Breadcrumbs = ({ title, children }) => (
  <div className="container mx-auto max-w-5xl px-4 pb-6 pt-16 text-center md:pt-24 lg:pt-32 [&_p]:mx-auto [&_p]:max-w-3xl [&_p]:text-[17px]">
    <div className="animate-fade-up">
      <Heading level={2} as="h1" className="text-balance">
        {title}
      </Heading>
      <span className="mx-auto my-8 block h-px w-12 bg-brass" />
    </div>
    <div className="animate-fade-up [animation-delay:250ms]">{children}</div>
  </div>
);

export default Breadcrumbs;
