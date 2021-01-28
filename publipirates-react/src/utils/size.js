import { css } from 'styled-components'
import PropTypes from "prop-types";
import { level1, level2, level3, level4, level5, level6 } from "./level"

const Heading1 = css`
    ${level1}
`

const Heading2 = css`
    ${level2}
`

const Heading3 = css`
    ${level3}
`

const Heading4 = css`
    ${level4}
`

const Heading5 = css`
    ${level5}
`

const Heading6 = css`
    ${level6}
`

const Paragraph = css`
  font-size: ${props => props.theme.font.paragraph.size};
  line-height: ${props => props.theme.font.paragraph.lineHeight};
`

const Caption1 = css`
  font-size: ${props => props.theme.font.caption1.size};
  line-height: ${props => props.theme.font.caption1.lineHeight};
`

const Caption2 = css`
  font-size: ${props => props.theme.font.caption2.size};
  line-height: ${props => props.theme.font.caption2.lineHeight};
`

const size = css`
  ${props => props.size === "Heading1" && Heading1}
  ${props => props.size === "Heading2" && Heading2}
  ${props => props.size === "Heading3" && Heading3}
  ${props => props.size === "Heading4" && Heading4}
  ${props => props.size === "Heading5" && Heading5}
  ${props => props.size === "Heading6" && Heading6}
  ${props => props.size === "Paragraph" && Paragraph}
  ${props => props.size === "Caption1" && Caption1}
  ${props => props.size === "Caption2" && Caption2}
`

size.propTypes = {
    /** Size on the scale */
    size: PropTypes.oneOf([
        'Heading1',
        'Heading2',
        'Heading3',
        'Heading4',
        'Heading5',
        'Heading6',
        'Paragraph',
        'Caption1',
        'Caption2',
    ]),
};

export default size;
