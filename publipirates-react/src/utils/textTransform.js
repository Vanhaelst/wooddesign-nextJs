import { css } from 'styled-components'
import PropTypes from "prop-types";

const textTransform = css`
  text-transform: 
    ${props => (props.textTransform === 'inherit' && 'inherit')}
    ${props => (props.textTransform === 'none' && 'none')}
    ${props => (props.textTransform === 'capitalize' && 'capitalize')}
    ${props => (props.textTransform === 'uppercase' && 'uppercase')}
    ${props => (props.textTransform === 'lowercase' && 'lowercase')}
  ;
`

textTransform.propTypes = {
    /** textTransform css property. */
    textTransform: PropTypes.oneOf([
        'inherit',
        'none',
        'capitalize',
        'uppercase',
        'lowercase',
    ]),
};

export default textTransform;
