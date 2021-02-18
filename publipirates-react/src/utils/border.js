import { css } from "styled-components";
import PropTypes from "prop-types";

const border = css`
  ${(props) => props.borderColor && `border-color: ${props.borderColor};`}
  ${(props) => props.borderStyle && `border-style: ${props.borderStyle};`}
    ${(props) => props.borderWidth && `border-width: ${props.borderWidth};`}

    ${(props) =>
    props.borderBottomColor &&
    `border-bottom-color: ${props.borderBottomColor};`}
    ${(props) =>
    props.borderBottomStyle &&
    `border-bottom-style: ${props.borderBottomStyle};`}
    ${(props) =>
    props.borderBottomWidth &&
    `border-bottom-width: ${props.theme.borders[props.borderBottomWidth]};`}
        
    ${(props) =>
    props.borderLeftColor && `border-left-color: ${props.borderLeftColor};`}
    ${(props) =>
    props.borderLeftStyle && `border-left-style: ${props.borderLeftStyle};`}
    ${(props) =>
    props.borderLeftWidth &&
    `border-left-width: ${props.theme.borders[props.borderLeftWidth]};`}
    
    ${(props) =>
    props.borderRightColor && `border-right-color: ${props.borderRightColor};`}
    ${(props) =>
    props.borderRightStyle && `border-right-style: ${props.borderRightStyle};`}
    ${(props) =>
    props.borderRightWidth &&
    `border-right-width: ${props.theme.borders[props.borderRightWidth]};`}
    
    ${(props) =>
    props.borderTopColor && `border-top-color: ${props.borderTopColor};`}
    ${(props) =>
    props.borderTopStyle && `border-top-style: ${props.borderTopStyle};`}
    ${(props) =>
    props.borderTopWidth &&
    `border-top-width: ${props.theme.borders[props.borderTopWidth]};`}
`;

border.propTypes = {
  /** Sets the border-color style, must be one of the system. */
  borderColor: PropTypes.string,

  /** Sets the border-width style. */
  borderWidth: PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Sets the border-style value. */
  borderStyle: PropTypes.oneOf([
    "none",
    "hidden",
    "dotted",
    "dashed",
    "solid",
    "double",
    "groove",
    "ridge",
    "inset",
    "outset",
    "initial",
    "inherit",
  ]),

  /** Sets the css border-radius property, maps on spacing values + fill, + sides. */
  borderRadius: PropTypes.oneOf([
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
    "fill",
    "sides",
  ]),

  /** Sets the border-bottom-color style, must be one of the system. */
  borderBottomColor: PropTypes.string,

  /** Sets the border-bottom-style value. */
  borderBottomStyle: PropTypes.oneOf([
    "none",
    "hidden",
    "dotted",
    "dashed",
    "solid",
    "double",
    "groove",
    "ridge",
    "inset",
    "outset",
    "initial",
    "inherit",
  ]),

  /** Sets the border-bottom-width style. */
  borderBottomWidth: PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Sets the border-left-color style, must be one of the system. */
  borderLeftColor: PropTypes.string,

  /** Sets the border-left-style value. */
  borderLeftStyle: PropTypes.oneOf([
    "none",
    "hidden",
    "dotted",
    "dashed",
    "solid",
    "double",
    "groove",
    "ridge",
    "inset",
    "outset",
    "initial",
    "inherit",
  ]),

  /** Sets the border-bottom-width style. */
  borderLeftWidth: PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Sets the border-right-color style, must be one of the system. */
  borderRightColor: PropTypes.string,

  /** Sets the border-right-style value. */
  borderRightStyle: PropTypes.oneOf([
    "none",
    "hidden",
    "dotted",
    "dashed",
    "solid",
    "double",
    "groove",
    "ridge",
    "inset",
    "outset",
    "initial",
    "inherit",
  ]),

  /** Sets the border-right-width style. */
  borderRightWidth: PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Sets the border-top-color style, must be one of the system. */
  borderTopColor: PropTypes.string,

  /** Sets the border-top-style value. */
  borderTopStyle: PropTypes.oneOf([
    "none",
    "hidden",
    "dotted",
    "dashed",
    "solid",
    "double",
    "groove",
    "ridge",
    "inset",
    "outset",
    "initial",
    "inherit",
  ]),

  /** Sets the border-top-width style. */
  borderTopWidth: PropTypes.oneOf([0, 1, 2, 3, 4]),
};

export default border;
