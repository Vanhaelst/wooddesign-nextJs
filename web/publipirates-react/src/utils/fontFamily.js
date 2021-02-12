import { css } from "styled-components";
import PropTypes from "prop-types";

const fontFamily = css`
  font-family: ${(props) => props.fontFamily === "inherit" && "inherit"}
    ${(props) =>
      props.fontFamily === "primary" && props.theme.font.family.primary}
    ${(props) =>
      props.fontFamily === "secondary" && props.theme.font.family.secondary}
    ${(props) =>
      props.fontFamily === "system" && props.theme.font.family.system};
`;

fontFamily.propTypes = {
  /** FontFamily of font-system */
  fontFamily: PropTypes.oneOf(["inherit", "primary", "secondary", "system"]),
};

export default fontFamily;
