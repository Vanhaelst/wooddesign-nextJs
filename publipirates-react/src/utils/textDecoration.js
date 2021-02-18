import { css } from "styled-components";
import PropTypes from "prop-types";

const textDecoration = css`
  text-decoration: ${(props) => props.textDecoration === "inherit" && "inherit"}
    ${(props) => props.textDecoration === "none" && "none"}
    ${(props) => props.textDecoration === "underline" && "underline"}
    ${(props) => props.textDecoration === "line-through" && "line-through"};
`;

textDecoration.propTypes = {
  /** Changes the Caption's text-decoration. */
  decoration: PropTypes.oneOf(["inherit", "none", "underline", "line-through"]),
};

export default textDecoration;
