import React from "react";
import Box from "@/components/Box";

const ContentWrapper = ({ className, ...props }) => (
  <Box className={["my-12", className].filter(Boolean).join(" ")} {...props} />
);

export default ContentWrapper;
