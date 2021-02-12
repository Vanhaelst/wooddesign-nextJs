import { css } from "styled-components";
import PropTypes from "prop-types";

const color = css`
  ${(props) =>
    props.color && props.color === "primary"
      ? `color: ${props.theme.colors.primary.main};`
      : `color: ${props.color};`};
`;

color.propTypes = {
  /** Changes the Paragraph's color, choose one of the tokens. */
  color: PropTypes.string,
};

export default color;
