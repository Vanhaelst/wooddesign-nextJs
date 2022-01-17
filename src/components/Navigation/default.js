import React from "react";
import { useRouter } from "next/router";
import Menu from "@/components/Navigation/Menu";
import MenuItem from "@/components/Navigation/MenuItem";
import NavBar from "@/components/Navigation/NavBar";
import navigation from "./navigation";
import Logo from "src/theme/logo/Logo";
import theme from "src/theme";

const DesktopNavigation = ({ id, shown, sticky }) => {
  const router = useRouter();

  return (
    <NavBar id={id} shown={shown} sticky={sticky}>
      <Logo fill={theme.colors.primary.main} height="40px" />
      <Menu>
        {navigation.map((item) => {
          const active = router.pathname === item.href;
          return (
            <MenuItem
              key={item.href}
              href={item.href}
              active={active}
              target={item.target || "_self"}
            >
              {item.title}
            </MenuItem>
          );
        })}
      </Menu>
    </NavBar>
  );
};

export default DesktopNavigation;
