import React from "react";
import { cx } from "../../utils/cx";

const BASE =
  "inline-block cursor-pointer border-2 border-solid px-8 py-[6px] text-center font-secondary text-[16px] font-medium uppercase leading-[28px] tracking-[0.06em] no-underline transition-all duration-[250ms]";

const APPEARANCE = {
  primary:
    "border-primary bg-primary text-white hover:border-primary-dark hover:bg-primary-dark hover:text-white",
  outline:
    "border-primary bg-transparent text-primary hover:border-primary-dark hover:bg-primary hover:text-white",
  link: "border-transparent bg-transparent text-primary hover:border-transparent hover:bg-transparent hover:underline",
  disabled:
    "border-[rgb(215,215,215)] bg-[rgb(215,215,215)] text-white hover:border-[rgb(215,215,215)] hover:bg-[rgb(215,215,215)]",
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
