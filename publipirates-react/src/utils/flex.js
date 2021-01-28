import { css } from 'styled-components'
import PropTypes from "prop-types";

const flex = css`
  ${props => props.flex && `display: flex;`}
  ${props => props.alignContent && `align-content: ${props.alignContent};`}
  ${props => props.alignItems && `align-items: ${props.alignItems};`}
  ${props => props.alignSelf && `align-self: ${props.alignSelf};`}
  ${props => props.flexBasis && `flex-basis: ${props.flexBasis};`}
  ${props => props.flexDirection && `flex-direction: ${props.flexDirection};`}
  ${props => props.flexGrow && `flex-grow: ${props.flexGrow};`}
  ${props => props.flexShrink && `flex-shrink: ${props.flexShrink};`}
  ${props => props.flexWrap && `flex-wrap: ${props.flexWrap};`}
  ${props => props.justifyContent && `justify-content: ${props.justifyContent};`}
`

flex.propTypes = {
    /** Changes the Paragraph's color, choose one of the tokens. */
    flex: PropTypes.string,
  alignContent: PropTypes.string,
  alignItems: PropTypes.string,
  alignSelf: PropTypes.string,
  flexDirection: PropTypes.string,
  flexGrow: PropTypes.string,
  flexShrink: PropTypes.string,
  flexWrap: PropTypes.string,
  justifyContent: PropTypes.string,
};

export default flex;
