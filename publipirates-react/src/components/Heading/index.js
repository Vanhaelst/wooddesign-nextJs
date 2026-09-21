import React from "react";
import Text from "../Text";

const Heading = ({
  as,
  level = 1,
  fontFamily = "primary",
  fontWeight = "bold",
  color = "ink",
  textTransform = "none",
  children,
  ...rest
}) => (
  <Text
    as={as || `h${level}`}
    size={`Heading${level}`}
    fontFamily={fontFamily}
    fontWeight={fontWeight}
    color={color}
    textTransform={textTransform}
    {...rest}
  >
    {children}
  </Text>
);

export default Heading;
