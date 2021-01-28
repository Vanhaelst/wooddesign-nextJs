import React from 'react';
import styled from 'styled-components'
import Grid from "../Grid";

const Navbar = styled(Grid)`
    box-shadow: rgb(0 0 0 / 12%) 0px 2px 4px;
    background-color: white;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    padding: 32px;
    display: flex;
   
   ${props => props.sticky && `
        z-index: 10000;
        position: fixed;
        top: -200px;
        left: 0;
        right: 0;
        ${props.shown && `
            top: 0;
        `}
    `}
    
    
`

export default Navbar;
