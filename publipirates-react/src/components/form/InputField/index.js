import React from "react";
import Label from "@/components/form/Label";
import Text from "@/components/Text";
import { cx } from "../../../utils/cx";

const InputField = ({ label, placeholder, onChange, name, error, value }) => (
  <div>
    <Label>
      {label} <sup>*</sup>
    </Label>
    <input
      className={cx(
        "box-border h-12 w-full rounded border border-solid px-4 py-3 font-secondary text-[16px] outline-none",
        error
          ? "border-error"
          : "mb-6 border-black/20 focus:border-primary",
      )}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
    />
    {error && (
      <Text fontFamily="secondary" size="Caption2" color="#F84F31">
        {error}
      </Text>
    )}
  </div>
);

export default InputField;
