import React from "react";
import styled from "styled-components";

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
  title,
  subtitle,
}) => {
  return (
    <div className="w-full bg-cover
 bg-no-repeat bg-center flex justify-center items-center flex-col" style={{ backgroundImage: `url('${backgroundImage}')`, height: "75vh"}}>`
      {children}
      {title && <Title level={1}>{title}</Title>}
      {subtitle && <SubTitle level={2}>{subtitle}</SubTitle>}
    </div>
  );
};

export default Hero;
