import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Img = styled.img.withConfig({
    shouldForwardProp: (prop) =>
        ['src', 'alt'].includes(prop),
})`
  overflow: hidden;
  max-width: 100%;
  &:hover {
    transition: all 0.5s;
    ${props => props.hover}
  }
  ${(props) =>
    props.objectFit &&
    `
        width: 100%;
        
        height: calc(${props.height});
        @media screen and (min-width: ${props.theme.grid.breakpointSmall}px){
            height: calc(${props.height} / 1.5 );
        }
        @media screen and (min-width: ${props.theme.grid.breakpointMedium}px){
            height: ${props.height};
        }
        
        
        object-fit: cover;
        margin-bottom: 24px;
        transition: all 0.5s;
        &:hover{
            transition: all 0.5s;
            ${props.hover}
        }
    `}
`;

const Image = ({ src, alt, objectFit, height, hover }) => (
  <Img
    src={src}
    alt={alt}
    objectFit={objectFit}
    height={height}
    hover={hover}
  />
);

Image.propTypes = {
  objectFit: PropTypes.bool,
  height: PropTypes.string,
  hover: PropTypes.string,
    className: PropTypes.string,
};

export default Image;
