import { css } from "styled-components";
import PropTypes from "prop-types";

const textAlign = css`
  text-align: ${(props) => props.textAlign === "inherit" && "inherit"}
    ${(props) => props.textAlign === "left" && "left"}
    ${(props) => props.textAlign === "right" && "right"}
    ${(props) => props.textAlign === "center" && "center"}
    ${(props) => props.textAlign === "justify" && "justify"};
`;

textAlign.propTypes = {
  /** textAlign css property. */
  textAlign: PropTypes.oneOf(["inherit", "left", "right", "center", "justify"]),
};

export default textAlign;
