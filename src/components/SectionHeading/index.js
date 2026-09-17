import React from "react";
import Heading from "@/components/Heading";

const SectionHeading = ({ children, level = 3, as }) => (
  <div className="text-center mb-10">
    <Heading level={level} as={as} textTransform="uppercase" color="#464646">
      {children}
    </Heading>
    <span
      className="inline-block w-10 h-[2px] mt-4"
      style={{ backgroundColor: "#8dc63f" }}
    />
  </div>
);

export default SectionHeading;
