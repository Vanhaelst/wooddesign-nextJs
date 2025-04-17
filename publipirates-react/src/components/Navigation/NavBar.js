import styled from "styled-components";
import Grid from "../Grid";

const Navbar = styled(Grid)`
  
  background-color: rgba(255,255,255,0);
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 32px;
  display: flex;
    
    transition: all;
    transition-duration: 300ms;
    
    position: relative;
    top: 37px;
    z-index: 9950;
    width: 100%;

  ${(props) =>
    props.position === "absolute" && `
        position: absolute;
    `}
    
    ${(props) =>
    props.sticky &&
    `
          background-color: rgba(255,255,255,0.75);
          box-shadow: rgb(0 0 0 / 12%) 0px 2px 4px;
        position: fixed;
        top: -200px;
        left: 0;
        right: 0;
        padding: 12px;
        ${
          props.shown &&
          `
            top: 0;
        `
        }
    `}
`;

export default Navbar;
