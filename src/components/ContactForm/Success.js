import React from "react";
import styled from "styled-components";
import Text from "@/components/Text";

const Foo = styled.div.withConfig({
  shouldForwardProp: (prop) =>
      ['children'].includes(prop),
})`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fade 0.3s @keyframes fade {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .success-message {
    display: block;
    text-align: center;
  }

  .success-message > div {
    width: 100%;
    opacity: 0;
    animation: reveal 1s 1s forwards;
    text-align: center;
  }
  /* Appear animation for success message */
  @keyframes reveal {
    0%,
    75% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  /* 'SUCCESS!' check animation */
  svg.checkmark {
    width: 100px;
    height: 100px;
    margin: 2em auto;
    border-radius: 50%;
    display: block;
    stroke-width: 4;
    stroke: ${(props) => props.theme.colors.primary.main};
    stroke-miterlimit: 10;
    box-shadow: inset 0px 0px 0px #7ac142;
    transition: 1s all ease;
  }

  /* Trigger animation we add 'active' class via JS */
  svg.checkmark.active {
    animation: moveupwards 1s 1s forwards;
  }

  @keyframes moveupwards {
    0%,
    75% {
      width: 100px;
      height: 100px;
      margin: 2em auto;
    }

    100% {
      width: 75px;
      height: 75px;
      margin: 1em auto;
    }
  }

  svg > .checkmark-circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 3;
    stroke-miterlimit: 10;
    stroke: ${(props) => props.theme.colors.primary.main};
    fill: none;
    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  }

  svg > .checkmark-check {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-width: 3;
    stroke-dashoffset: 48;
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
  }

  @keyframes stroke {
    100% {
      stroke-dashoffset: 0;
    }
  }

  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    .success-message svg {
      display: none;
    }
  }

  @supports (-ms-ime-align: auto) {
    .success-message svg {
      display: none;
    }
  }
`;

const Success = () => {
  return (
    <Foo>
      <div className="subscribe-container">
        <div className="success-message">
          <svg
            className="checkmark active"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
            width="70"
          >
            <circle
              className="checkmark-circle"
              cx="26"
              cy="26"
              r="23"
              fill="none"
            />
            <path
              className="checkmark-check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
          <div>
            <Text fontFamily="secondary">
              Uw contactverzoek werd succesvol verzonden. <br />
              Wij nemen zo snel mogelijk met u contact op.
            </Text>
          </div>
        </div>
      </div>
    </Foo>
  );
};

export default Success;
