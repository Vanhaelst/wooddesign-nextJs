import React from 'react';
import PropTypes from "prop-types";
import Text from '../Text';

const Heading = ({ as, level, className, ...rest }) => (
    <Text
        className={className}
        as={as || `h${level}`}
        {...rest}
        size={`Heading${level}`}
    />
)

Heading.propTypes = {
    /** Change the rendered HTML tag e.g. span, p, h1 */
    as: PropTypes.node,

    /** Content for component *required */
    children: PropTypes.node.isRequired,

    /** Extend classNames. */
    className: PropTypes.string,

    /** Changes the Paragraph's color, choose one of the tokens. */
    color: PropTypes.string,

    /** FontFamily of font-system */
    fontFamily: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'system']),

    /** Sets the css font-style property. */
    fontStyle: PropTypes.oneOf(['inherit', 'normal', 'italic', 'oblique']),

    /** Sets the css font-weight property. */
    fontWeight: PropTypes.oneOf(['inherit', 'light', 'regular', 'medium', 'bold']),

    /** Maps token scale to font-size, line-height & font-weight */
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),

    /** Extend style */
    style: PropTypes.shape({}),

    /** textAlign css property. */
    textAlign: PropTypes.oneOf(['inherit', 'left', 'right', 'center', 'justify']),

    /** Changes the Caption's text-decoration. */
    textDecoration: PropTypes.oneOf(['inherit', 'none', 'underline', 'line-through']),

    /** textTransform css property. */
    textTransform: PropTypes.oneOf([
        'inherit',
        'none',
        'capitalize',
        'uppercase',
        'lowercase',
    ]),
};

Heading.defaultProps = {
    fontFamily: 'primary',
    fontWeight: 'bold',
    level: 1,
    textAlign: 'inherit',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#464646',
};

export default Heading;
