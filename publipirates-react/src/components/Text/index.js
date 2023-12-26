import styled from "styled-components";
import PropTypes from "prop-types";
import fontWeight from "../../utils/fontWeight";
import color from "../../utils/color";
import textDecoration from "../../utils/textDecoration";
import fontFamily from "../../utils/fontFamily";
import fontStyle from "../../utils/fontStyle";
import textAlign from "../../utils/textAlign";
import textTransform from "../../utils/textTransform";
import level from "../../utils/level";
import size from "../../utils/size";
import getMargin from "../../utils/margin";
import getPadding from "../../utils/padding";
import show from "@/utils/show";

const Text = styled('span').withConfig({
  shouldForwardProp: (prop) =>
      ['children'].includes(prop),
})`
  position: relative;
  ${(props) => props.display && `display: ${props.display};`}
  ${color}
  ${fontFamily}
  ${fontStyle}
  ${fontWeight}
  ${level}
  ${size}
  ${textAlign}
  ${textDecoration}
  ${textTransform}
  ${getMargin}
  ${getPadding}
  line-height: 150%;
  ${show}
`;

Text.propTypes = {
  /** Change the rendered HTML tag e.g. span, p, h1 */
  as: PropTypes.node,

  /** Content for component *required */
  children: PropTypes.node.isRequired,

  /** Extend classNames. */
  className: PropTypes.string,

  /** Changes the Paragraph's color, choose one of the tokens. */
  color: PropTypes.string,

  /** Changes the Caption's text-decoration. */
  decoration: PropTypes.oneOf(["inherit", "none", "underline", "line-through"]),

  /** display setting for element. */
  display: PropTypes.string,

  /** FontFamily of font-system */
  fontFamily: PropTypes.oneOf(["inherit", "primary", "secondary", "system"]),

  /** Sets the css font-style property. */
  fontStyle: PropTypes.oneOf(["inherit", "normal", "italic", "oblique"]),

  /** Sets the css font-weight property. */
  fontWeight: PropTypes.oneOf([
    "inherit",
    "light",
    "regular",
    "medium",
    "bold",
  ]),

  /** Size on the scale */
  size: PropTypes.oneOf([
    "Heading1",
    "Heading2",
    "Heading3",
    "Heading4",
    "Heading5",
    "Heading6",
    "Paragraph",
    "Caption1",
    "Caption2",
  ]),

  /** Extend style */
  style: PropTypes.shape({}),

  /** textAlign css property. */
  textAlign: PropTypes.oneOf(["inherit", "left", "right", "center", "justify"]),

  /** textTransform css property. */
  textTransform: PropTypes.oneOf([
    "inherit",
    "none",
    "capitalize",
    "uppercase",
    "lowercase",
  ]),
};

Text.defaultProps = {
  as: "span",
  size: "Heading6",
  color: "#464646",
  fontWeight: "light",
};

export default Text;
