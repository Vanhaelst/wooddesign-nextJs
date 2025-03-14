import React from "react";
import styled from "styled-components";
import Heading from "@/components/Heading";

const breadcrumbWidth = 400;

const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => ["children"].includes(prop),
})`
  background-color: #333;
  display: flex;

  flex-direction: column;
  ${(props) =>
    props.variant === 2 &&
    `
         @media screen and (max-width: ${props.theme.grid.breakpointSmall}px){
            flex-direction: column-reverse;
         }
    `}
  @media screen and (min-width: ${(props) =>
    props.theme.grid.breakpointSmall}px) {
    flex-direction: row;
  }
`;

const Point = styled.div.withConfig({
  shouldForwardProp: (prop) => [""].includes(prop),
})`
  width: 4px;
  height: 4px;
  background-color: ${(props) => props.theme.colors.primary.main};
  display: block;
  margin-left: 4px;
  position: absolute;
  bottom: 12px;
  right: -8px;
`;

const Breadcrumb = styled.div.withConfig({
  shouldForwardProp: (prop) => ["children"].includes(prop),
})`
  padding: 25px;
  @media screen and (min-width: ${(props) =>
      props.theme.grid.breakpointSmall}px) {
    padding: 50px;
  }
  @media screen and (min-width: ${(props) =>
      props.theme.grid.breakpointMedium}px) {
    padding: 0px;
    width: ${breadcrumbWidth}px;
  }
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.variant === 1 &&
    `
         @media screen and (max-width: ${props.theme.grid.breakpointSmall}px){
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 100;
            width: 100%;
            background-color: rgba(20, 20, 20, 0.5);
            height: 100%;
         }
    `}
`;

const Image = styled.div.withConfig({
  shouldForwardProp: (prop) => [""].includes(prop),
})`
  width: 100%;
  @media screen and (min-width: ${(props) =>
      props.theme.grid.breakpointSmall}px) {
    width: calc(100% - 50px);
  }
  @media screen and (min-width: ${(props) =>
      props.theme.grid.breakpointMedium}px) {
    width: 100%;
  }
  background-image: url("${(props) =>
    props.image ||
    "https://www.belgiqa.be/images/home/_homeSplashImage/belgiqa-homepage-banner2-1.jpg"}");
  background-size: cover;
  background-position: center center;

  height: 200px;
  @media screen and (min-width: ${(props) =>
      props.theme.grid.breakpointMedium}px) {
    height: 300px;
  }
`;

const Breadcrumbs = ({ title, children }) => {
  return (
    <div className="container max-w-5xl mx-auto px-4 text-center py-10">
      <Heading level={3} textTransform="uppercase">
        {title}
      </Heading>
      <div className="border-b-2 my-4 border-solid border-gray-300" />
      {children}
    </div>
  );
};

export default Breadcrumbs;
