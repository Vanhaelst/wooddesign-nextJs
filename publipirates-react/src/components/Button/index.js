import React from "react";
import { cx } from "../../utils/cx";

const BASE =
  "inline-block cursor-pointer border border-solid px-9 py-[15px] text-center font-secondary text-[12px] font-medium uppercase leading-[1.2] tracking-[0.2em] no-underline transition-colors duration-300";

const APPEARANCE = {
  primary:
    "border-primary bg-primary text-ivory hover:border-primary-dark hover:bg-primary-dark hover:text-ivory",
  outline:
    "border-primary bg-transparent text-primary hover:bg-primary hover:text-ivory",
  link: "border-transparent bg-transparent px-0 text-primary underline-offset-4 hover:underline",
  disabled: "border-line bg-line text-muted",
};

// Renders an <a> when given an `href`, otherwise a <button>.
const Button = ({
  appearance,
  outline,
  block,
  disabled,
  href,
  className,
  children,
  as: _as, // eslint-disable-line no-unused-vars
  type: _type, // eslint-disable-line no-unused-vars
  ...rest
}) => {
  const variant = disabled
    ? "disabled"
    : appearance === "link"
      ? "link"
      : outline
        ? "outline"
        : "primary";

  const classes = cx(
    BASE,
    APPEARANCE[variant],
    block
      ? "w-full whitespace-normal"
      : "w-fit max-w-full whitespace-normal xs:whitespace-nowrap",
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;
