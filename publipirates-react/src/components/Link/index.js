import React from "react";
import { cx } from "@/utils/cx";
import {
  COLOR,
  FONT_FAMILY,
  FONT_WEIGHT,
  TEXT_DECORATION,
  TEXT_TRANSFORM,
} from "@/utils/typography";

const BASE_COLOR = {
  branded: "text-primary",
  hidden: "text-inherit",
  disabled: "text-[#d7d7d7]",
};

const HOVER_COLOR = {
  branded: "hover:text-primary-dark",
  hidden: "hover:text-primary-dark",
  disabled: "hover:text-[#d7d7d7]",
};

// `type`: "branded" | "hidden" (inherits the surrounding colour, no underline)
// | "disabled". `color` overrides the resting colour.
const Link = ({
  type,
  color,
  fontFamily,
  fontWeight,
  textDecoration,
  textTransform,
  className,
  style,
  children,
  ...rest
}) => {
  const colorClass = COLOR[color];

  return (
    <a
      className={cx(
        "cursor-pointer hover:bg-transparent hover:[&_svg_path]:fill-primary-dark",
        colorClass || BASE_COLOR[type] || "text-primary",
        HOVER_COLOR[type] || "hover:text-primary-dark",
        type === "hidden" && "no-underline",
        FONT_FAMILY[fontFamily],
        FONT_WEIGHT[fontWeight],
        TEXT_DECORATION[textDecoration],
        TEXT_TRANSFORM[textTransform],
        className,
      )}
      style={color && !colorClass ? { color, ...style } : style}
      {...rest}
    >
      {children}
    </a>
  );
};

export default Link;
