import React from "react";

const Instagram = ({ fill, size }) => (
  <svg
    width={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={fill || "currentColor"}
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.5 6.5h.01" />
  </svg>
);

export default Instagram;
