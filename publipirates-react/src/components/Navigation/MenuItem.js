import styled from "styled-components";

const MenuItem = styled('a').withConfig({
    shouldForwardProp: (prop) =>
        ['children', 'href', "target"].includes(prop),
})`
  margin: 0 24px;
  font-size: 16px;
  font-weight: 300;
  color: #141c3a;
  font-family: ${(props) => props.theme.font.family.secondary};
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.primary.main};
  }
  ${(props) =>
    props.active &&
    `
      color: color: ${props.theme.colors.primary.main} !important;
   `}
`;

export default MenuItem;
