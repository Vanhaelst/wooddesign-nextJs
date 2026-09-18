import React from "react";
import { cx } from "../../utils/cx";

const MenuItem = ({ active, color, children, href, target }) => (
  <a
    href={href}
    target={target}
    className={cx(
      "mx-6 font-secondary text-[16px] font-light no-underline hover:text-primary",
      color === "white" ? "text-white" : "text-black",
      active && "!text-primary",
    )}
  >
    {children}
  </a>
);

export default MenuItem;
