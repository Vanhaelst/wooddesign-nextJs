import styled from "styled-components";
import PropTypes from "prop-types";
import flex from "../../utils/flex";

const Flex = styled.div`   
    ${flex}
`;

Flex.propTypes = {
    /** Flex alignContent. */
    alignContent: PropTypes.oneOfType([
        PropTypes.oneOf([
            'center',
            'flex-end',
            'flex-start',
            'space-around',
            'space-between',
            'space-evenly',
            'stretch',
        ]),
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.shape({
            xs: PropTypes.string,
            sm: PropTypes.string,
            md: PropTypes.string,
            lg: PropTypes.string,
            xl: PropTypes.string,
        }),
    ]),

    /** Flex alignItems. */
    alignItems: PropTypes.oneOfType([
        PropTypes.oneOf([
            'baseline',
            'center',
            'flex-end',
            'flex-start',
            'stretch',
        ]),
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.shape({
            xs: PropTypes.string,
            sm: PropTypes.string,
            md: PropTypes.string,
            lg: PropTypes.string,
            xl: PropTypes.string,
        }),
    ]),

    /** Extend classNames. */
    className: PropTypes.string,

    /** Display flex or inline-flex */
    display: PropTypes.oneOf(['flex', 'inline-flex']),

    /** Flex flexDirection. */
    flexDirection: PropTypes.oneOfType([
        PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row']),
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.shape({
            xs: PropTypes.string,
            sm: PropTypes.string,
            md: PropTypes.string,
            lg: PropTypes.string,
            xl: PropTypes.string,
        }),
    ]),

    /** Flex flexWrap. */
    flexWrap: PropTypes.oneOfType([
        PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.shape({
            xs: PropTypes.string,
            sm: PropTypes.string,
            md: PropTypes.string,
            lg: PropTypes.string,
            xl: PropTypes.string,
        }),
    ]),

    /** Flex justifyContent. */
    justifyContent: PropTypes.oneOfType([
        PropTypes.oneOf([
            'center',
            'flex-end',
            'flex-start',
            'space-around',
            'space-between',
            'stretch',
            'space-evenly',
        ]),
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.shape({
            xs: PropTypes.string,
            sm: PropTypes.string,
            md: PropTypes.string,
            lg: PropTypes.string,
            xl: PropTypes.string,
        }),
    ]),
};

Flex.defaultProps = {
    display: 'flex',
};

export default Flex;
