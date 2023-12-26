import React from "react";
import styled from "styled-components";

const Ul = styled.ul.withConfig({
  shouldForwardProp: (prop) =>
      ['children'].includes(prop),
})`
  list-style-type: ${(props) => props.listStyleType};
  padding-left: 24px;
  ${(props) =>
    props.listStyleType === "none" &&
    `
        padding-left: 0;
    `}
`;

const UnorderedList = ({ children, listStyleType = "none" }) => {
  return <Ul listStyleType={listStyleType}>{children}</Ul>;
};

export default UnorderedList;
