import React from "react";
import styled from "styled-components";
const HeroImage = styled.div`
  @media screen and (min-width: 997px){
    background-image: url("${(props) => props.backgroundImage}");
  }
  background-image: url("${(props) => props.mobileBackgroundImage}");
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

import { Heading } from "../../../index";

const Title = styled(Heading)`
  color: white;
  margin: 0;
  font-weight: 500;

  font-size: 44px;
  @media screen and (min-width: 997px){
    font-size: 104px;
    // margin-bottom: 32px;
  }
  
  background-color: rgba(0,0,0, 0.75);
    line-height: 100%;
    padding: 8px 24px;
}
  
`;

const SubTitle = styled(Heading)`
  color: white;
  margin: 0;
  font-weight: 100;
  font-size: 32px;
  @media screen and (min-width: 997px){
    font-size: 44px;
  }
  
  background-color: rgba(0,0,0, 0.75);
    line-height: 100%;
    padding: 8px 24px;
`;

const Hero = ({
  children,
  backgroundImage = "/images/placeholder-image.webp",
  mobileBackgroundImage,
  title,
  subtitle,
  height = "75vh",
}) => {
  return (
    <HeroImage backgroundImage={backgroundImage} mobileBackgroundImage={mobileBackgroundImage || backgroundImage} height={height}>
      {children}
      {title && <Title level={1}>{title}</Title>}
      {subtitle && <SubTitle level={2}>{subtitle}</SubTitle>}
    </HeroImage>
  );
};

export default Hero;
