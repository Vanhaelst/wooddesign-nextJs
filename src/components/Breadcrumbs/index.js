import React from "react";
import Heading from "@/components/Heading";

const Breadcrumbs = ({ title, children }) => {
  return (
    <div className="container max-w-5xl mx-auto px-4 text-center py-10 mt-10 lg:mt-20">
      {/* Rendered as a real <h1>: this is the main (and only) heading on
          every page that uses Breadcrumbs. `level={3}` is kept so the
          visual size doesn't change. */}
      <Heading level={3} as="h1" textTransform="uppercase">
        {title}
      </Heading>
      <div className="border-b-2 my-4 border-solid border-gray-300" />
      {children}
    </div>
  );
};

export default Breadcrumbs;
