import { css } from 'styled-components'
import PropTypes from "prop-types";

const position = css`
    position: ${props => (props.position ? props.position : 'relative')};
    ${props => props.top && `top: ${props.top};`}
    ${props => props.right && `right: ${props.right};`}
    ${props => props.bottom && `bottom: ${props.bottom};`}
    ${props => props.left && `left: ${props.left};`}
`

position.propTypes = {
    /** Changes the box's position. */
    position: PropTypes.oneOf(['absolute', 'fixed', 'relative', 'sticky']),

    /** Sets the css bottom property, maps on spacing values. */
    bottom: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),

    /** Sets the css left property, maps on spacing values. */
    left: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),


    /** Sets the css right property, maps on spacing values. */
    right: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),

    /** Sets the css top property, maps on spacing values. */
    top: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
};

export default position;
