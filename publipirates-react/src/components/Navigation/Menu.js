import React from "react";
import styled from "styled-components";

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding-left: 0;
  align-items: center;

  ${(props) =>
    props.isMobile &&
    `
      display: flex;
      flex-direction: column;
   `}
`;
export default Menu;
