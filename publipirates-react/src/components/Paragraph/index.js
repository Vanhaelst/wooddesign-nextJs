import React from "react";
import Text from "../Text";

const Paragraph = ({
  as = "p",
  fontFamily = "system",
  fontWeight = "light",
  textTransform = "none",
  children,
  ...rest
}) => (
  <Text
    as={as}
    fontFamily={fontFamily}
    fontWeight={fontWeight}
    textTransform={textTransform}
    {...rest}
  >
    {children}
  </Text>
);

export default Paragraph;
