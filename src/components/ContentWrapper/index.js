import React from "react";
import Box from "@/components/Box";

// Vertical rhythm between page sections. `flush` removes the outer margin
// for pages whose sections manage their own spacing.
const ContentWrapper = ({ className, flush, ...props }) => (
  <Box
    className={[flush ? "" : "my-16 md:my-24", className]
      .filter(Boolean)
      .join(" ")}
    {...props}
  />
);

export default ContentWrapper;
