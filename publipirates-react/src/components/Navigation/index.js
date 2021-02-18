import React from "react";
import NavBar from "./NavBar";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

const Navigation = ({ children }) => {
  return (
    <NavBar container>
      <img
        src="https://mattfarley.ca/img/mf-logo.svg"
        alt="logo"
        style={{ height: "35px" }}
      />
      <Menu>{children && children.map((el) => <MenuItem>{el}</MenuItem>)}</Menu>
    </NavBar>
  );
};

export default Navigation;
