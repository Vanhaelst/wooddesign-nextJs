import React from 'react';
import styled from 'styled-components';
import Label from "@/components/form/Label";


const FormInput = styled.input`
    box-sizing: border-box;
    font-family: ${props => props.theme.font.family.secondary};
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    outline: none;
    margin-bottom: 24px;
    border-radius: 4px;
    font-size: 16px;
    padding: 12px 16px;
    width: 100%;
    height: 48px;
    &:focus {
        border-color: ${props => props.theme.colors.primary.main};
    }
    
    
    ${props => props.variant === "light" && `
        height: 24px;
        background-color: transparent;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 0;
        color: white;
        padding-left: 0;
        font-weight: 300;
        opacity: 1;
        &:focus {
            border-color: transparent;
            border-bottom-color: ${props.theme.colors.primary.main};
        }
    `}
`;

const InputField = ({ label, variant, placeholder }, props) => (
    <div>
        <Label>{label}</Label>
        <FormInput  {...props} variant={variant} placeholder={placeholder} />
    </div>
)

export default InputField;
