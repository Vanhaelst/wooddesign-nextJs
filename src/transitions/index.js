import React from "react";
import styled from "styled-components";

export const Transition = styled.div`
  transition: all 1s;
  transition-delay: ${(props) => props.transitionDelay || ".5s"};
  top: 100px;
  opacity: 0;

  ${(props) =>
    props.transition &&
    `
        top: 0;
        opacity: 1;
    `}
`;

export const TransitionSlide = styled.div`
  transition: all 1s;
  transition-delay: ${(props) => props.transitionDelay || "0.25s"};

  ${(props) =>
    props.slideTo === "right" &&
    `
        left: -300px;
        opacity: ${props.fade ? 0 : 1};
        ${
          props.transition &&
          `
            left: 0;
            opacity: 1;
        `
        }
    `}

  ${(props) =>
    props.slideTo === "left" &&
    `
        left: 300px;
        opacity: ${props.fade ? 0 : 1};
        ${
          props.transition &&
          `
            left: 0;
            opacity: 1;
        `
        }
    `}
`;
