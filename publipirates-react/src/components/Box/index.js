import React from "react";
import { cx } from "../../utils/cx";
import { flexProps, FLEX_DIRECTION } from "../../utils/flex";
import { spacingProps } from "../../utils/spacing";

// A flex column by default. Height/width/backgroundColor are applied inline
// because they take arbitrary values.
const Box = ({
  as: Tag = "div",
  height,
  width,
  maxHeight,
  maxWidth,
  backgroundColor,
  flexDirection,
  flex, // eslint-disable-line no-unused-vars
  className,
  style,
  children,
  ...props
}) => {
  const [spacing, withoutSpacing] = spacingProps(props);
  const [flexClasses, rest] = flexProps({ ...withoutSpacing, flexDirection });

  return (
    <Tag
      className={cx(
        "relative flex",
        !FLEX_DIRECTION[flexDirection] && "flex-col",
        flexClasses,
        spacing,
        height === "100%" && "h-full",
        className,
      )}
      style={{
        ...(height && height !== "100%" ? { height } : null),
        ...(width ? { width } : null),
        ...(maxHeight ? { maxHeight } : null),
        ...(maxWidth ? { maxWidth } : null),
        ...(backgroundColor ? { backgroundColor } : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Box;
