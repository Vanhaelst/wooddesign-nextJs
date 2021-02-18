import { css } from "styled-components";
import PropTypes from "prop-types";

const fontStyle = css`
  font-style: ${(props) => props.fontStyle === "inherit" && "inherit"}
    ${(props) => props.fontStyle === "normal" && "normal"}
    ${(props) => props.fontStyle === "italic" && "italic"}
    ${(props) => props.fontStyle === "oblique" && "oblique"};
`;

fontStyle.propTypes = {
  /** Sets the css font-style property. */
  fontStyle: PropTypes.oneOf(["inherit", "normal", "italic", "oblique"]),
};

export default fontStyle;
