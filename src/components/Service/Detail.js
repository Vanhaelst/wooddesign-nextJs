import React from "react";
import { handleViewport } from "react-in-viewport";
import styled from "styled-components";
import Grid from "@/components/Grid";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Image from "@/components/Image";
import { TransitionSlide } from "../../transitions";

const Row = styled.div`
  @media screen and (min-width: ${(props) =>
      props.theme.grid.breakpointSmall}px) {
    ${(props) => !props.isFirst && ` margin-top: -40px;`}
    flex-direction: ${(props) => (props.even ? "row-reverse" : "row")};
  }

  @media screen and (min-width: ${(props) =>
      props.theme.grid.breakpointMedium}px) {
    ${(props) => !props.isFirst && ` margin-top: -75px;`}
  }
`;

const Block = ({
  title,
  description,
  image,
  index,
  enterCount,
  forwardedRef,
}) => {
  const isEven = index % 2 === 0;
  const isFirst = index === 1;

  return (
    <Row as={Grid} row even={isEven} isFirst={isFirst}>
      <Grid
        item
        xs={12}
        sm={6}
        lg={isEven ? { width: 6, push: 1 } : { width: 6 }}
        flex
        justifyContent={isFirst ? "center" : "center"}
        flexDirection="column"
        mb={isFirst && 10}
        my={isFirst ? 0 : 10}
      >
        <TransitionSlide
          transition={enterCount}
          ref={forwardedRef}
          slideTo={isEven ? "right" : "left"}
          fade
        >
          <Heading level={3} textTransform="uppercase" mb={5}>
            {title}
          </Heading>
          {typeof description === "function" ? (
            description()
          ) : (
            <Paragraph>{description}</Paragraph>
          )}
        </TransitionSlide>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        lg={isEven ? { width: 5 } : { width: 5, push: 1 }}
      >
        <TransitionSlide
          transition={enterCount}
          ref={forwardedRef}
          slideTo={isEven ? "left" : "right"}
          fade
        >
          <Image src={image} objectFit height="600px" />
        </TransitionSlide>
      </Grid>
    </Row>
  );
};

const ViewportBlock = handleViewport(Block /** options: {}, config: {} **/);

export const ServiceDetail = ({ title, description, image, index }) => (
  <ViewportBlock
    index={index}
    title={title}
    image={image}
    description={description}
  />
);
