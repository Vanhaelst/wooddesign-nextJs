import React from "react";
import styled from "styled-components";
import Text from "@/components/Text";

const FormLabel = styled(Text)`
  display: inline-block;
  padding: 0 10px;
  background-color: white;
  margin-left: 8px;
  transform: translateY(50%);
`;

const Label = (props) => (
  <FormLabel fontWeight="regular" size="Caption1" {...props} />
);

Label.defaultProps = {
  fontFamily: "secondary",
};

export default Label;
