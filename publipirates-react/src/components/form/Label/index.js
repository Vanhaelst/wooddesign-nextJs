import React from "react";
import Text from "@/components/Text";
import { cx } from "../../../utils/cx";

// Floating label that sits on the top border of the input below it.
const Label = ({ className, ...props }) => (
  <Text
    fontWeight="regular"
    size="Caption1"
    fontFamily="secondary"
    className={cx(
      "ml-2 inline-block translate-y-1/2 bg-white px-[10px]",
      className,
    )}
    {...props}
  />
);

export default Label;
