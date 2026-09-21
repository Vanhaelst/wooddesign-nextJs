import React from "react";
import Label from "@/components/form/Label";
import Text from "@/components/Text";
import { cx } from "../../../utils/cx";

const TextArea = ({ label, onChange, name, error, value }) => (
  <div>
    <Label>
      {label} <sup>*</sup>
    </Label>
    <textarea
      className={cx(
        "box-border h-[100px] w-full resize-y rounded-[2px] border border-solid bg-white px-4 py-3 font-secondary text-[16px] outline-none",
        error
          ? "border-error"
          : "mb-6 border-stone focus:border-primary",
      )}
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

export default TextArea;
