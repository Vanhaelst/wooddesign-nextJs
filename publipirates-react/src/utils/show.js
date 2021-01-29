import { css } from 'styled-components'
import PropTypes from "prop-types";

const show = css`
    ${props => (props.show && `
        
        ${typeof props.show.sm === 'boolean' ? `
            ${props.show.xs ? `
                display: block;
                    ` : `
                display: none;
            `}
        ` : `` }
        
        ${typeof props.show.sm === 'boolean' ? `
            ${props.show.sm ? `
                @media screen and (min-width: ${props.theme.grid.breakpointSmall}px){
                    display: block;
                } 
                ` : `
                @media screen and (min-width: ${props.theme.grid.breakpointSmall}px){
                    display: none;
                }
            `}
        ` : `` }
    
        ${typeof props.show.md === 'boolean' ? `
            ${props.show.md ? `
                @media screen and (min-width: ${props.theme.grid.breakpointMedium}px){
                    display: block;
                }
                ` : ` 
                @media screen and (min-width: ${props.theme.grid.breakpointMedium}px){
                    display: none;
                }
            `}
        ` : `` }
        
         ${typeof props.show.lg === 'boolean' ? `
             ${props.show.lg ? `
                @media screen and (min-width: ${props.theme.grid.breakpointLarge}px){
                    display: block;
                }
                ` : `
                @media screen and (min-width: ${props.theme.grid.breakpointLarge}px){
                    display: none;
                }
            `}
        ` : `` }
        
         ${typeof props.show.xl === 'boolean' ? `
             ${props.show.xl ? `
                @media screen and (min-width: ${props => props.theme.grid.breakpointXLarge}px){
                    display: block;
                }
                ` : `
                @media screen and (min-width: ${props => props.theme.grid.breakpointXLarge}px){
                    display: none;
                }
            `}
        ` : `` }
    `)}
  ;
`

show.propTypes = {
    /** textAlign css property. */
    show: PropTypes.object,
};

export default show;
