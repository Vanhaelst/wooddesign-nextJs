import React from "react";
import { cx } from "../../utils/cx";

const UnorderedList = ({ children, listStyleType = "none" }) => (
  <ul className={cx(listStyleType === "none" ? "list-none" : "list-disc pl-6")}>
    {children}
  </ul>
);

export default UnorderedList;
