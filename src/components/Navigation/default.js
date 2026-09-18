import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Menu from "@/components/Navigation/Menu";
import MenuItem from "@/components/Navigation/MenuItem";
import NavBar from "@/components/Navigation/NavBar";
import { navigation } from "./navigation";
import Logo from "src/theme/logo/Logo";
import Link from "next/link";
import Cart from "@/icons/cart";
import PromoBar from "./PromoBar";

const ShopLink = ({ color, sticky }) => (
  <Link
    href="http://shop.wooddesign.be"
    target="_blank"
    className="flex items-center ml-6 gap-2 shrink-0"
    aria-label="Naar de Wooddesign webshop"
  >
    <Cart
      className="w-5 h-5"
      stroke={sticky ? "#464646" : color === "white" ? "white" : "#464646"}
    />
    <span
      className="text-sm uppercase tracking-wide font-medium"
      style={{ color: sticky ? "#464646" : color === "white" ? "white" : "#464646" }}
    >
      Shop
    </span>
  </Link>
);

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
    <div style={{ position: "relative" }}>
      <PromoBar />
      <div id="top" />

      <NavBar position={position}>
        <Link href="/">
          <Logo fill={color || "BLACK"} height="32px" />
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
          <ShopLink color={color} />
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
          <ShopLink sticky />
        </Menu>
      </NavBar>
    </div>
  );
};

export default DesktopNavigation;
