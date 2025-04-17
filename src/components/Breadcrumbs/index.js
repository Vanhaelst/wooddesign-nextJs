import React from "react";
import Heading from "@/components/Heading";

const Breadcrumbs = ({ title, children }) => {
  return (
    <div className="container max-w-5xl mx-auto px-4 text-center py-10 mt-10 lg:mt-20">
      <Heading level={3} textTransform="uppercase">
        {title}
      </Heading>
      <div className="border-b-2 my-4 border-solid border-gray-300" />
      {children}
    </div>
  );
};

export default Breadcrumbs;
