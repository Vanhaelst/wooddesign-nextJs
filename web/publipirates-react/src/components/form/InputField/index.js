import React from "react";
import styled from "styled-components";
import Label from "@/components/form/Label";
import TextInput from "@/components/form/input/TextInput";
import { ErrorMessage } from "next/dist/build/webpack/plugins/webpack-conformance-plugin/checks/react-sync-scripts-conformance-check";
import Text from "@/components/Text";
import theme from "../../../../../src/theme";

const FormInput = styled.input`
  box-sizing: border-box;
  font-family: ${(props) => props.theme.font.family.secondary};
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  outline: none;
  border-radius: 4px;
  font-size: 16px;
  padding: 12px 16px;
  width: 100%;
  height: 48px;
  &:focus {
    border-color: ${(props) => props.theme.colors.primary.main};
  }

  ${(props) =>
    props.variant === "light" &&
    `
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

  ${(props) =>
    !props.error &&
    `
        margin-bottom: 24px;
    `}
    
    ${(props) =>
    props.error &&
    `
        border-color: ${theme.colors.error} !important;
    `}
`;

const InputField = (
  { label, variant, placeholder, onChange, name, error, value, optional },
  props
) => {
  return (
    <div>
      <Label>
        {label} {variant !== "light" && <sup>*</sup>}
      </Label>
      <FormInput
        variant={variant}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        error={error}
        value={value}
        {...props}
      />
      {error && (
        <Text fontFamily="secondary" size="Caption2" color={theme.colors.error}>
          {error}
        </Text>
      )}
    </div>
  );
};

export default InputField;
