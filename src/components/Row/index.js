import React from "react";
import Image from "@/components/Image";
import Grid from "@/components/Grid";
import Reveal from "../Reveal";

const Picture = ({ image, alt }) => (
  <Grid item xs={12} sm={6} lg={6}>
    <Reveal variant="image" className="rounded-sm">
      <Image
        src={image}
        alt={alt}
        objectFit
        height="100%"
        className="aspect-[4/5] rounded-sm xs:mb-0"
      />
    </Reveal>
  </Grid>
);

// Text next to an image. `isEven` puts the image first (and on top on mobile).
export const Row = ({ image, alt, isEven, children }) => {
  if (isEven) {
    return (
      <Grid row className="mb-16 flex-col-reverse items-center last:mb-0 xs:flex-row md:mb-28">
        <Picture image={image} alt={alt} />
        <Grid
          item
          xs={12}
          sm={6}
          lg={6}
          flex
          justifyContent="flex-end"
          flexDirection="column"
          className="mb-8 xs:mb-0 lg:px-14"
        >
          <Reveal delay={150}>{children}</Reveal>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid row className="mb-16 items-center last:mb-0 md:mb-28">
      <Grid
        item
        xs={12}
        sm={6}
        lg={6}
        flex
        justifyContent="flex-start"
        flexDirection="column"
        className="mb-8 xs:mb-0 lg:px-14"
      >
        <Reveal>{children}</Reveal>
      </Grid>
      <Picture image={image} alt={alt} />
    </Grid>
  );
};
