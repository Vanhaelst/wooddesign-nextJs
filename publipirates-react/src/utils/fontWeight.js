import { css } from "styled-components";
import PropTypes from "prop-types";

const fontWeight = css`
  font-weight: ${(props) => props.fontWeight === "inherit" && "inherit"}
    ${(props) => props.fontWeight === "light" && props.theme.font.weight.light}
    ${(props) =>
      props.fontWeight === "regular" && props.theme.font.weight.regular}
    ${(props) =>
      props.fontWeight === "medium" && props.theme.font.weight.medium}
    ${(props) => props.fontWeight === "bold" && props.theme.font.weight.bold};
`;

fontWeight.propTypes = {
  /** Sets the css font-weight property. */
  fontWeight: PropTypes.oneOf([
    "inherit",
    "light",
    "regular",
    "medium",
    "bold",
  ]),
};

export default fontWeight;
