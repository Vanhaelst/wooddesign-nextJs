import React from "react";
import { cx } from "@/utils/cx";

// Typographic logo lockup: widely spaced serif capitals with the four
// disciplines underneath. `tone` is "dark" (on light) or "light" (on photos or
// the dark footer); `compact` drops the descriptor for tight spaces.
const Wordmark = ({ tone = "dark", compact = false, className }) => (
  <span
    className={cx(
      "inline-flex flex-col items-center leading-none",
      tone === "light"
        ? "text-white [text-shadow:0_1px_14px_rgb(0_0_0/0.45)]"
        : "text-ink",
      className,
    )}
  >
    <span
      className={cx(
        "font-display font-semibold uppercase tracking-[0.34em]",
        compact ? "text-[19px]" : "text-[24px]",
      )}
    >
      Wooddesign
    </span>
    {!compact && (
      <span className="mt-2 text-[8px] font-semibold uppercase tracking-[0.34em] opacity-90">
        Parket · Gevel · Terras · Vinyl
      </span>
    )}
  </span>
);

export default Wordmark;
