import React from "react";
import Heading from "@/components/Heading";
import Box from "@/components/Box";
import Instagram from "@/icons/Instagram";

const Error = () => {
  return (
    <Box height="100%" justifyContent="center" alignItems="center">
      <Box mb={8}>
        <Instagram size="100px" />
      </Box>
      <Heading level={3} textAlign="center">
        Er liep iets mis
      </Heading>
    </Box>
  );
};

export default Error;
