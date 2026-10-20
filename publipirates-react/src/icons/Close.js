import React from "react";

const Close = ({ fill, size }) => (
  <svg
    width={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={fill || "currentColor"}
    strokeWidth="1.25"
    strokeLinecap="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 5l14 14M19 5L5 19" />
  </svg>
);

export default Close;
