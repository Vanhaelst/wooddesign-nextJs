import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Menu from "@/components/Navigation/Menu";
import MenuItem from "@/components/Navigation/MenuItem";
import NavBar from "@/components/Navigation/NavBar";
import { navigation } from "./navigation";
import Logo from "src/theme/logo/Logo";
import Link from "next/link";

const DesktopNavigation = ({ color, position }) => {
  const router = useRouter();

  const [shown, setShown] = useState(false);

  const onScroll = () => {
    const someDiv = document.getElementById("top")?.getBoundingClientRect().top;
    if (someDiv <= -200) {
      setShown(true);
    } else {
      setShown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div id="top" />

      <NavBar position={position}>
        <Link href="/">
          <Logo fill={color || "BLACK"} height="40px" />
        </Link>
        <Menu>
          {navigation.map((item) => {
            const active = router.pathname === item.href;
            return (
              <MenuItem
                key={item.href}
                href={item.href}
                active={active}
                target={item.target || "_self"}
                color={color}
              >
                {item.title}
              </MenuItem>
            );
          })}
        </Menu>
      </NavBar>

      <NavBar shown={shown} sticky={true}>
        <Link href="/">
          <Logo fill={"black"} height="32px" />
        </Link>
        <Menu>
          {navigation.map((item) => {
            const active = router.pathname === item.href;
            return (
              <MenuItem
                key={item.href}
                href={item.href}
                active={active}
                target={item.target || "_self"}
                sticky={true}
              >
                {item.title}
              </MenuItem>
            );
          })}
        </Menu>
      </NavBar>
    </>
  );
};

export default DesktopNavigation;
