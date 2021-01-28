import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";
import Text from '../Text';

const Paragraph = ({ as, className, ...rest }) => (
    <Text
        className={className}
        as={as || 'p'}
        {...rest}
    />
)

Paragraph.propTypes = {
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

Paragraph.defaultProps = {
    fontFamily: 'system',
    fontWeight: 'light',
    textAlign: 'inherit',
    textDecoration: 'none',
    textTransform: 'none',
};

export default Paragraph;
