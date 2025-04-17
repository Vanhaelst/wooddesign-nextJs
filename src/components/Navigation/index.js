import React from "react";
import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";

const Nav = ({ color, position }) => {
  const Navigation = dynamic(
    () =>
      isMobile ? import("./Navigation.mobile") : import("./Navigation.desktop"),
    { ssr: false },
  );

  return <Navigation color={color} position={position} />;
};

export default Nav;
