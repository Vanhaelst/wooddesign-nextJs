// Tailwind class lookups for the typography props shared by Text and Link.
// Every class name is spelled out in full so Tailwind's scanner picks it up.
export const FONT_FAMILY = {
  inherit: "[font-family:inherit]",
  primary: "font-primary",
  secondary: "font-secondary",
  system: "font-system",
};

export const FONT_WEIGHT = {
  inherit: "[font-weight:inherit]",
  light: "font-extralight",
  regular: "font-normal",
  medium: "font-medium",
  bold: "font-medium",
};

export const FONT_STYLE = {
  inherit: "[font-style:inherit]",
  normal: "not-italic",
  italic: "italic",
  oblique: "[font-style:oblique]",
};

export const TEXT_ALIGN = {
  left: "text-left",
  right: "text-right",
  center: "text-center",
  justify: "text-justify",
};

export const TEXT_DECORATION = {
  none: "no-underline",
  underline: "underline",
  "line-through": "line-through",
};

export const TEXT_TRANSFORM = {
  none: "normal-case",
  capitalize: "capitalize",
  uppercase: "uppercase",
  lowercase: "lowercase",
};

export const COLOR = {
  white: "text-white",
  "#ffffff": "text-white",
  "#fff": "text-white",
  "#464646": "text-[#464646]",
  "#676b6d": "text-[#676b6d]",
  "#000000": "text-black",
  primary: "text-primary",
  "#8dc63f": "text-primary",
  "#F84F31": "text-error",
  inherit: "text-inherit",
};
