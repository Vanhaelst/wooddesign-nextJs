import { css } from "styled-components";
import PropTypes from "prop-types";
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

const getPadding = ({ p, pb, pl, pr, pt, px, py }) => {
  const paddingBottom = getFirstMatchingValue(possibleProps, [pb, py, p]);
  const paddingLeft = getFirstMatchingValue(possibleProps, [pl, px, p]);
  const paddingRight = getFirstMatchingValue(possibleProps, [pr, px, p]);
  const paddingTop = getFirstMatchingValue(possibleProps, [pt, py, p]);

  return css`
    ${(props) =>
      paddingTop && `padding-top: ${props.theme.spaces[paddingTop]}`};
    ${(props) =>
      paddingRight && `padding-right: ${props.theme.spaces[paddingRight]}`};
    ${(props) =>
      paddingBottom && `padding-bottom: ${props.theme.spaces[paddingBottom]}`};
    ${(props) =>
      paddingLeft && `padding-left: ${props.theme.spaces[paddingLeft]}`};
  `;
};

export default getPadding;
