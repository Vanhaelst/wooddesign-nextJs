import React, { useEffect, useRef, useState } from "react";
import { cx } from "@/utils/cx";

const VARIANTS = {
  up: {
    hidden: "translate-y-8 opacity-0",
    shown: "translate-y-0 opacity-100",
  },
  fade: {
    hidden: "opacity-0",
    shown: "opacity-100",
  },
  // For photos: the wrapper fades in while the image settles from a slight zoom.
  image: {
    hidden:
      "overflow-hidden opacity-0 [&_img]:scale-[1.12] [&_img]:transition-transform [&_img]:duration-[1800ms] [&_img]:ease-out",
    shown:
      "overflow-hidden opacity-100 [&_img]:scale-100 [&_img]:transition-transform [&_img]:duration-[1800ms] [&_img]:ease-out",
  },
};

// Reveals its children once when scrolled into view. Starts visible when the
// user prefers reduced motion or IntersectionObserver is unavailable.
const Reveal = ({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className,
  style,
  children,
  ...rest
}) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const state = VARIANTS[variant] || VARIANTS.up;

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={cx(
        "transition-[opacity,transform] duration-[1000ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]",
        shown ? state.shown : state.hidden,
        className,
      )}
      style={delay ? { transitionDelay: `${delay}ms`, ...style } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
