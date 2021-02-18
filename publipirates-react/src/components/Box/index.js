import styled from "styled-components";
import PropTypes from "prop-types";
import getMargin from "../../utils/margin";
import getPadding from "../../utils/padding";
import color from "../../utils/color";
import fontFamily from "../../utils/fontFamily";
import fontStyle from "../../utils/fontStyle";
import fontWeight from "../../utils/fontWeight";
import textAlign from "../../utils/textAlign";
import textDecoration from "../../utils/textDecoration";
import textTransform from "../../utils/textTransform";
import border from "../../utils/border";
import flex from "../../utils/flex";
import position from "../../utils/position";

const Box = styled.div`
  ${(props) => props.display && `display: ${props.display};`}
  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor};`}
   
    ${color}
    ${fontFamily}
    ${fontStyle}
    ${fontWeight}
    ${textAlign}
    ${textDecoration}
    ${textTransform}
    ${border}
    ${flex}
    ${position}
    
    ${(props) => props.height && `height: ${props.height};`}
    ${(props) => props.width && `width: ${props.width};`}
    ${(props) => props.maxHeight && `max-height: ${props.maxHeight};`}
    ${(props) => props.maxWidth && `max-width: ${props.maxWidth};`}

    
    ${getMargin}
    ${getPadding}
`;

Box.propTypes = {
  /** Changes the compônents backgroundColor, choose one of the tokens. */
  backgroundColor: PropTypes.string,

  /** Changes the Paragraph's color, choose one of the tokens. */
  color: PropTypes.string,

  /** The float CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning). */
  float: PropTypes.oneOf(["left", "right", "none"]),

  /** Changes the Paragraph's color, choose one of the tokens. */
  flex: PropTypes.bool,
  alignContent: PropTypes.string,
  alignItems: PropTypes.string,
  alignSelf: PropTypes.string,
  flexDirection: PropTypes.string,
  flexGrow: PropTypes.string,
  flexShrink: PropTypes.string,
  flexWrap: PropTypes.string,
  justifyContent: PropTypes.string,

  /** FontFamily of font-system */
  fontFamily: PropTypes.oneOf(["inherit", "primary", "secondary", "system"]),

  /** Controls Box's height property. */
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, "auto", "full"]),
  ]),

  /** Controls Box's maxHeight property. */
  maxHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, "auto", "full"]),
  ]),

  /** Controls Box's maxWidth property. */
  maxWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, "auto", "full"]),
  ]),

  /** Controls the order in which flex items appear in the flex container. */
  order: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Style attribute */
  style: PropTypes.object, // eslint-disable-line

  /** Controls Box's width property. */
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, "auto", "full"]),
  ]),

  /** Controls Box's zIndex property. */
  zIndex: PropTypes.oneOf([0, 100, 200, 300, 400, 500, 600, 700, 800, 900]),
};

Box.defaultProps = {
  display: "flex",
  flexDirection: "column",
  position: "relative",
};

export default Box;
