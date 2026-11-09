import React from "react";
import { cx } from "../../utils/cx";

const MenuItem = ({ active, color, children, href, target }) => (
  <a
    href={href}
    target={target}
    className={cx(
      "relative mx-6 font-secondary text-[15px] font-light tracking-[0.04em] no-underline transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-500 hover:text-brass hover:after:w-full",
      color === "white" ? "text-white" : "text-ink",
      active && "!text-primary after:w-full",
    )}
  >
    {children}
  </a>
);

export default MenuItem;
