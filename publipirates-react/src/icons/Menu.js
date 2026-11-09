import React from "react";

// Two thin lines.
const Menu = ({ fill, size }) => (
  <svg
    width={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={fill || "currentColor"}
    strokeWidth="1.25"
    strokeLinecap="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 8h18M3 16h18" />
  </svg>
);

export default Menu;
