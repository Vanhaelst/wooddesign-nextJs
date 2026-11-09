import React from "react";

const Pinterest = ({ fill, size, style }) => (
  <svg
    width={size}
    style={style}
    viewBox="0 0 24 24"
    fill="none"
    stroke={fill || "currentColor"}
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="9.5" />
    <path d="M10.4 17.6l1.5-6.4M9.2 11.4c-.5-2 .8-3.9 2.9-3.9 1.7 0 2.9 1.1 2.9 2.7 0 1.9-1.1 3.4-2.6 3.4-.8 0-1.4-.5-1.6-1.1" />
  </svg>
);

export default Pinterest;
