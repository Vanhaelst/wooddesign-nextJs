import React from "react";
import { cx } from "../../utils/cx";

// Top bar: `position="absolute"` overlays the page (hero), `sticky` is the
// compact bar that slides in from the top once `shown` is true.
const NavBar = ({ position, sticky, shown, children }) => (
  <div
    className={cx(
      "z-[9950] mx-auto flex w-full flex-row justify-between transition-all duration-300",
      sticky
        ? "fixed left-0 right-0 bg-white/75 p-3 shadow-[0_2px_4px_rgb(0_0_0/12%)]"
        : "bg-white/0 p-8",
      sticky ? (shown ? "top-0" : "top-[-200px]") : null,
      !sticky && (position === "absolute" ? "absolute top-[37px]" : "relative top-0"),
    )}
  >
    {children}
  </div>
);

export default NavBar;
