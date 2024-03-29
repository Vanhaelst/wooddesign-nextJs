import styled from "styled-components";

export const Transition = styled('div').withConfig({
    shouldForwardProp: (prop) =>
        ['children'].includes(prop),
})`
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

export const TransitionSlide = styled('div').withConfig({
    shouldForwardProp: (prop) =>
        ['children'].includes(prop),
})`
  transition: all 0.5s;
  @media screen and (min-width: ${(props) =>
      props.theme.grid.breakpointLarge}px) {
    transition: all 1s;
  }
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
    
    ${(props) =>
    props.slideTo === "up" &&
    `
        top: 100px;
        @media screen and (min-width: ${props.theme.grid.breakpointLarge}px){
            top: 300px;
        }
        opacity: ${props.fade ? 0 : 1};
        ${
          props.transition &&
          `
            top: 0 !important;
            opacity: 1;
        `
        }
    `}
`;
