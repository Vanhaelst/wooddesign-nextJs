import React from "react";

const Menu = ({ fill, size }) => {
  return (
    <svg
      width={size}
      viewBox="0 -53 384 384"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={fill || "#000000"}
        d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
      />
      <path
        fill={fill || "#000000"}
        d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
      />
      <path
        fill={fill || "#000000"}
        d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
      />
    </svg>
  );
};

export default Menu;
