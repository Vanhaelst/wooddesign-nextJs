import React from "react";
import styled from "styled-components";
import { Heading } from "../../../index";

const HeroImage = styled.div`
  background-image: url("${(props) => props.backgroundImage}");
  height: ${(props) => props.height};
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled(Heading)`
  font-size: 104px;
  color: white;
  margin: 0;
  font-weight: 500;
  margin-bottom: 32px;
`;

const SubTitle = styled(Heading)`
  font-size: 44px;
  color: white;
  margin: 0;
  font-weight: 100;
`;

const Hero = ({
  children,
  backgroundImage = "/images/placeholder-image.webp",
  title,
  subtitle,
  height = "75vh",
}) => {
  return (
    <HeroImage backgroundImage={backgroundImage} height={height}>
      {children}
      {title && <Title level={1}>{title}</Title>}
      {subtitle && <SubTitle level={2}>{subtitle}</SubTitle>}
    </HeroImage>
  );
};

export default Hero;
