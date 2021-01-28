import { css } from 'styled-components'
import PropTypes from "prop-types";




export const level1 = css`
  font-size: ${props => props.theme.font.heading1.size};
  line-height: ${props => props.theme.font.heading1.lineHeight};
  @media screen and (min-width: ${props => props.theme.grid.breakpointSmall}px) {
    font-size: ${props => props.theme.font.heading1.largeSize};
    line-height: ${props => props.theme.font.heading1.largeLineHeight};
  }
`

export const level2 = css`
  font-size: ${props => props.theme.font.heading2.size};
  line-height: ${props => props.theme.font.heading2.lineHeight};
  @media screen and (min-width: ${props => props.theme.grid.breakpointSmall}px) {
    font-size: ${props => props.theme.font.heading2.largeSize};
    line-height: ${props => props.theme.font.heading2.largeLineHeight};
  }
`

export const level3 = css`
  font-size: ${props => props.theme.font.heading3.size};
  line-height: ${props => props.theme.font.heading3.lineHeight};
  @media screen and (min-width: ${props => props.theme.grid.breakpointSmall}px) {
    font-size: ${props => props.theme.font.heading3.largeSize};
    line-height: ${props => props.theme.font.heading3.largeLineHeight};
  }
`

export const level4 = css`
  font-size: ${props => props.theme.font.heading4.largeSize};
  line-height: ${props => props.theme.font.heading4.largeLineHeight};
  @media screen and (min-width: ${props => props.theme.grid.breakpointSmall}px) {
    font-size: ${props => props.theme.font.heading4.largeSize};
    line-height: ${props => props.theme.font.heading4.largeLineHeight};
  }
`

export const level5 = css`
  font-size: ${props => props.theme.font.heading5.size};
  line-height: ${props => props.theme.font.heading5.lineHeight};
  @media screen and (min-width: ${props => props.theme.grid.breakpointSmall}px) {
    font-size: ${props => props.theme.font.heading5.largeSize};
    line-height: ${props => props.theme.font.heading5.largeLineHeight};
  }
`

export const level6 = css`
  font-size: ${props => props.theme.font.heading6.largeSize};
  line-height: ${props => props.theme.font.heading6.largeLineHeight};
  @media screen and (min-width: ${props => props.theme.grid.breakpointSmall}px) {
    font-size: ${props => props.theme.font.heading6.largeSize};
    line-height: ${props => props.theme.font.heading6.largeLineHeight};
  }
`

const level = css`
  ${props => props.level === 1 && level1}
  ${props => props.level === 2 && level2}
  ${props => props.level === 3 && level3}
  ${props => props.level === 4 && level4}
  ${props => props.level === 5 && level5}
  ${props => props.level === 6 && level6}
`

level.propTypes = {
    /** Changes the Caption's text-decoration. */
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6])};

export default level;
