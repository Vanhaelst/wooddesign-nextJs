import React from "react";
import { cx } from "../../utils/cx";

// With `objectFit` the image fills its column and crops to cover; `height`
// only supports the "100%" used by the two-column Row.
const Image = ({ src, alt, objectFit, height, className }) => (
  <img
    src={src}
    alt={alt}
    className={cx(
      "photo-grade max-w-full overflow-hidden",
      objectFit &&
        "mb-6 w-full object-cover transition-all duration-500 h-full xs:h-[calc(100%/1.5)] md:h-full",
      className,
    )}
    style={objectFit && height && height !== "100%" ? { height } : undefined}
  />
);

export default Image;
