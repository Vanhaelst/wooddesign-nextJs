import React from "react";
import Image from "@/components/Image";
import Grid from "@/components/Grid";

const Picture = ({ image, alt }) => (
  <Grid item xs={12} sm={6} lg={6}>
    <Image
      src={image}
      alt={alt}
      objectFit
      height="100%"
      className="rounded-lg xs:mb-0 xs:min-h-[400px]"
    />
  </Grid>
);

// Text next to an image. `isEven` puts the image first (and on top on mobile).
export const Row = ({ image, alt, isEven, children }) => {
  if (isEven) {
    return (
      <Grid row className="mb-[60px] flex-col-reverse items-center xs:flex-row">
        <Picture image={image} alt={alt} />
        <Grid
          item
          xs={12}
          sm={6}
          lg={6}
          flex
          justifyContent="flex-end"
          flexDirection="column"
          className="mb-6 xs:mb-0"
        >
          {children}
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid row className="mb-[60px] items-center">
      <Grid
        item
        xs={12}
        sm={6}
        lg={6}
        flex
        justifyContent="flex-start"
        flexDirection="column"
        className="mb-6 xs:mb-0"
      >
        {children}
      </Grid>
      <Picture image={image} alt={alt} />
    </Grid>
  );
};
