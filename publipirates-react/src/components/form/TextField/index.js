import React from 'react';
import styled from 'styled-components';
import Label from "@/components/form/Label";

const TextField = styled.textarea`
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
    height: 100px;
    resize: vertical;
    &:focus {
        border-color: ${props => props.theme.colors.primary.main};
    }
`;

const TextArea = ({ label }, props) => (
    <div>
        <Label>{label}</Label>
        <TextField  {...props} />
    </div>
)

export default TextArea;
