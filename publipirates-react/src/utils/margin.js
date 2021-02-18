import { css } from "styled-components";
import getFirstMatchingValue from "./getFirstMatchingValue";

const possibleProps = [
  -11,
  -10,
  -9,
  -8,
  -7,
  -6,
  -5,
  -4,
  -3,
  -2,
  -1,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  "auto",
];

const getMargin = ({ m, mb, ml, mr, mt, mx, my }) => {
  const marginBottom = getFirstMatchingValue(possibleProps, [mb, my, m]);
  const marginLeft = getFirstMatchingValue(possibleProps, [ml, mx, m]);
  const marginRight = getFirstMatchingValue(possibleProps, [mr, mx, m]);
  const marginTop = getFirstMatchingValue(possibleProps, [mt, my, m]);

  return css`
    ${(props) => marginTop && `margin-top: ${props.theme.spaces[marginTop]}`};
    ${(props) =>
      marginRight && `margin-right: ${props.theme.spaces[marginRight]}`};
    ${(props) =>
      marginBottom && `margin-bottom: ${props.theme.spaces[marginBottom]}`};
    ${(props) =>
      marginLeft && `margin-left: ${props.theme.spaces[marginLeft]}`};
  `;
};

export default getMargin;
