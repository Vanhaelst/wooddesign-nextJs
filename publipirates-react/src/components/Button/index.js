import React from 'react';
import styled from 'styled-components'
import PropTypes from "prop-types";
import Text from "@/components/Text";
import theme from "src/theme";

const style = {
    paddingX: "6px",
    paddingY: "2em",
    fontSize: "16px",
}

const StyledButton = styled.a`
    ${props => props.display && `display: ${props.display};`}
    text-decoration: none;
    background-color: white;
    border-color: #dbdbdb;
    border-width: 1px;
    color: ${props => props.theme.colors.black};
    cursor: pointer;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: ${style.fontSize};
        color: #FFFFFF;
    font-family: ${props => props.theme.font.family.secondary};
    font-weight: 200;
    line-height: calc(${style.fontSize} + ${style.paddingX} + ${style.paddingX});
    padding-bottom: ${style.paddingX};
    padding-left: ${style.paddingY};
    padding-right: ${style.paddingY};
    padding-top: ${style.paddingX};
    text-align: center;
    border-width: 2px;
    border-style: solid;
    border-color: transparent;
    white-space: nowrap;
    transition: all .25s;
    &:hover{
        transition: all .25s;
    }
    
    background-color: ${props => props.theme.colors.primary.main};
    border-color: ${props => props.theme.colors.primary.main};
    color: ${props => props.theme.colors.primary.text};
    &:hover{
        background-color: ${props => props.theme.colors.primary.dark};
        border-color: ${props => props.theme.colors.primary.dark};
        color: ${props => props.theme.colors.primary.text};
    }
    
    ${props => props.appearance === "disabled" || props.disabled && `
        background-color: ${props.theme.colors.grey[30]};
        border-color: ${props.theme.colors.grey[30]};
        color: ${props.theme.colors.primary.text};
        &:hover{
            background-color: ${props.theme.colors.grey[30]};
            border-color: ${props.theme.colors.grey[30]};
            color: ${props.theme.colors.primary.text};
        }
    `}
    
    
    ${props => props.appearance === "link" && `
        background-color: transparent;
        border-color: transparent;
        color: ${props.theme.colors.primary.main};
        &:hover{
            background-color: transparent;
            border-color: transparent;
            color: ${props.theme.colors.primary.main};
            text-decoration: underline;
        }
    `}
   
   
    ${props => props.rounded && `
        border-radius: 290486px;
    `};
    
    ${props => props.outline && `
        background-color: transparent;
        border-style: solid;
        border-color: ${props.theme.colors.grey[50]};
        color: ${props.theme.colors.grey[50]};
        &:hover{
            border-color: ${props.theme.colors.primary.main};
            background-color: transparent;
            color: ${props.theme.colors.primary.main};
        }
        ${props.appearance === "primary" && `
            border-color: ${props.theme.colors.primary.main};
            color: ${props.theme.colors.primary.main};
        `}
    `};

`;

const Button = ({ appearance, children, display, href, outline, rounded, color, onClick }) => {
    const textColor = color ? color : appearance === 'primary' ? theme.colors.white : theme.colors.grey[50];
    return(
        <StyledButton
            href={href}
            appearance={appearance}
            display={display}
            rounded={rounded}
            outline={outline}
            onClick={onClick}
        >
            {children}
        </StyledButton>
    )
}


Button.propTypes = {
    appearance: PropTypes.oneOf(['primary']),
    display: PropTypes.oneOf(['inline', 'block', 'inline-block']),
    rounded: PropTypes.bool,
    outline: PropTypes.bool,
}

Button.defaultProps = {
    display: 'inline-block'
}


export default Button;
