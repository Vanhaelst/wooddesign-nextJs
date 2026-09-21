import React from "react";
import { cx } from "../../utils/cx";
import { spacingProps } from "../../utils/spacing";
import {
  COLOR,
  FONT_FAMILY,
  FONT_STYLE,
  FONT_WEIGHT,
  TEXT_ALIGN,
  TEXT_DECORATION,
  TEXT_TRANSFORM,
} from "../../utils/typography";

// font-size / line-height scale. The base line-height is always 1.5; the
// larger heading sizes switch to a fixed line-height from 480px (xs) up.
const SIZE = {
  Heading1: "text-[28px] xs:text-[40px] xs:leading-[44px]",
  Heading2: "text-[24px] xs:text-[32px] xs:leading-[40px]",
  Heading3: "text-[22px] xs:text-[24px] xs:leading-[32px]",
  Heading4: "",
  Heading5: "text-[18px]",
  Heading6: "",
  Paragraph: "text-[16px]",
  Caption1: "text-[14px]",
  Caption2: "text-[12px]",
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
  color = "#464646",
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
        "relative break-words leading-normal",
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
