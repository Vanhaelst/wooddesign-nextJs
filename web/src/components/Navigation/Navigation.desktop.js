import React, { Fragment, useState } from "react";
import DesktopNavigation from "./default";

const Navigation = ({ shown }) => {
  const [sticky, setSticky] = useState(false);

  if (typeof document !== "undefined") {
    const navigation = document.getElementById("nav");
    document.addEventListener("scroll", (e) => {
      const navigation = document.getElementById("nav");
      let position = navigation.getBoundingClientRect().top;

      if (navigation) {
        if (position <= 0) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      }
    });
  }

  return (
    <Fragment>
      <DesktopNavigation sticky shown={shown} />
      <DesktopNavigation id="nav" />
    </Fragment>
  );
};

export default Navigation;
