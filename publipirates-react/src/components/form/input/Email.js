import React from "react";
import Input from "@/components/form/InputField";

const EmailInput = ({ label, onChange, name, error, value }) => {
  return (
    <Input
      label={label}
      onChange={onChange}
      name={name}
      error={error}
      value={value}
    />
  );
};

export default EmailInput;
