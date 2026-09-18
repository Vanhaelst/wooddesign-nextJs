import React from "react";
import { COLUMN_WIDTHS } from "../../utils/columns";
import { cx } from "../../utils/cx";
import { flexProps } from "../../utils/flex";
import { spacingProps } from "../../utils/spacing";
import { TEXT_ALIGN } from "../../utils/typography";

const columns = (value) =>
  typeof value === "object" && value !== null ? value.width : value;

// 12 column grid: <Grid container><Grid row><Grid item xs={12} sm={6} />
const Grid = ({
  container,
  row,
  item,
  xs,
  sm,
  md,
  lg,
  flex,
  align,
  backgroundColor,
  className,
  style,
  children,
  ...props
}) => {
  const [spacing, withoutSpacing] = spacingProps(props);
  const [flexClasses, rest] = flexProps(withoutSpacing);

  return (
    <div
      className={cx(
        container &&
          "mx-auto w-[calc(100%-32px)] max-w-[calc(100%-32px)] md:max-w-[1200px]",
        row && "-mx-4 flex w-[calc(100%+32px)] flex-wrap",
        item && "max-w-full px-4",
        item && !xs && "w-full",
        COLUMN_WIDTHS.xs[columns(xs)],
        COLUMN_WIDTHS.sm[columns(sm)],
        COLUMN_WIDTHS.md[columns(md)],
        COLUMN_WIDTHS.lg[columns(lg)],
        flex && "flex",
        flexClasses,
        TEXT_ALIGN[align],
        spacing,
        className,
      )}
      style={backgroundColor ? { backgroundColor, ...style } : style}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Grid;
