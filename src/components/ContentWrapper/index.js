import React from "react";
import styled from "styled-components";
import Box from "@/components/Box";

const ContentWrapper = styled(Box).withConfig({
    shouldForwardProp: (prop) =>
        ['children'].includes(prop),
})`
  margin-top: 48px;
  margin-bottom: 48px;
  @media screen and (min-width: ${(props) => props.theme.grid.breakpointSmall}) {
    margin-top: 96px;
    margin-bottom: 96px;
  }
  @media screen and (min-width: ${(props) => props.theme.grid.breakpointMedium}) {
    margin-top: 192px;
    margin-bottom: 192px;
  }
`;

export default ContentWrapper;
