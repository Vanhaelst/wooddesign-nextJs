import React from "react";
import { cx } from "@/utils/cx";
import { spacingProps } from "@/utils/spacing";
import {
  COLOR,
  FONT_FAMILY,
  FONT_STYLE,
  FONT_WEIGHT,
  TEXT_ALIGN,
  TEXT_DECORATION,
  TEXT_TRANSFORM,
} from "@/utils/typography";

// Serif display scale for headings (h4 and below are sub-headings) and a
// relaxed sans scale for running text. Every entry carries its own
// line-height so no separate `leading-*` class is needed.
const SIZE = {
  Heading1: "text-[44px] leading-[1.05] md:text-[68px]",
  Heading2: "text-[36px] leading-[1.1] md:text-[52px]",
  Heading3: "text-[30px] leading-[1.15] md:text-[38px]",
  Heading4: "text-[24px] leading-[1.25]",
  Heading5: "text-[20px] leading-[1.3]",
  Heading6: "leading-[1.75]",
  Paragraph: "text-[16px] leading-[1.75]",
  Caption1: "text-[14px] leading-[1.6]",
  Caption2: "text-[12px] leading-[1.6]",
};

const DISPLAY = {
  block: "block",
  inline: "inline",
  "inline-block": "inline-block",
  flex: "flex",
  none: "hidden",
};

const Text = ({
  as: Tag = "span",
  size = "Heading6",
  color = "body",
  fontWeight = "light",
  fontFamily,
  fontStyle,
  textAlign,
  textDecoration,
  textTransform,
  display,
  className,
  style,
  children,
  ...props
}) => {
  const [spacing, rest] = spacingProps(props);
  const colorClass = COLOR[color];

  return (
    <Tag
      className={cx(
        "relative break-words",
        colorClass,
        FONT_FAMILY[fontFamily],
        FONT_STYLE[fontStyle],
        FONT_WEIGHT[fontWeight],
        SIZE[size],
        TEXT_ALIGN[textAlign],
        TEXT_DECORATION[textDecoration],
        TEXT_TRANSFORM[textTransform],
        DISPLAY[display],
        spacing,
        className,
      )}
      style={colorClass ? style : { color, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Text;
