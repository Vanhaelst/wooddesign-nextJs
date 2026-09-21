import React from "react";
import { cx } from "@/utils/cx";

// Top bar: `position="absolute"` overlays the page (hero), `sticky` is the
// compact bar that slides in from the top once `shown` is true.
const NavBar = ({ position, sticky, shown, children }) => (
  <div
    className={cx(
      "z-[9950] mx-auto flex w-full flex-row justify-between transition-all duration-500 ease-out",
      sticky
        ? "fixed left-0 right-0 border-b border-line bg-ivory/90 p-3 backdrop-blur"
        : "bg-white/0 p-8",
      sticky ? (shown ? "top-0" : "top-[-200px]") : null,
      !sticky && (position === "absolute" ? "absolute top-[37px]" : "relative top-0"),
    )}
  >
    {children}
  </div>
);

export default NavBar;
