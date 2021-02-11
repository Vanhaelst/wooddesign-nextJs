import React from 'react';
import styled from 'styled-components';
import Label from "@/components/form/Label";
import TextInput from "@/components/form/input/TextInput";
import Text from "@/components/Text";
import theme from "../../../../../src/theme";

const TextField = styled.textarea`
    box-sizing: border-box;
    font-family: ${props => props.theme.font.family.secondary};
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    outline: none;
    border-radius: 4px;
    font-size: 16px;
    padding: 12px 16px;
    width: 100%;
    height: 100px;
    resize: vertical;
    &:focus {
        border-color: ${props => props.theme.colors.primary.main};
    }
    
    ${props => !props.error && `
        margin-bottom: 24px;
    `}
    
    ${props => props.error && `
        border-color: ${theme.colors.error} !important;
    `}
`;

const TextArea = ({ label, onChange, name, error, value }, props) => (
    <div>
        <Label>{label} <sup>*</sup></Label>
        <TextField
            onChange={onChange}
            name={name}
            error={error}
            value={value}
            {...props}
        />
        {error && (<Text fontFamily="secondary" size="Caption2" color={theme.colors.error}>{error}</Text>)}
    </div>
)

export default TextArea;
