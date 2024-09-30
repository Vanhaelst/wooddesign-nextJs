import React from "react";
import { useRouter } from "next/router";
import Menu from "@/components/Navigation/Menu";
import MenuItem from "@/components/Navigation/MenuItem";
import NavBar from "@/components/Navigation/NavBar";
import { navigation, topbar } from "./navigation";
import Logo from "src/theme/logo/Logo";
import theme from "src/theme";
import Link from "next/link";

const DesktopNavigation = ({ id, shown, sticky }) => {
  const router = useRouter();

  return (
    <>
      <div className="bg-[#8dc63f] px-[44px] py-2 flex justify-end">
        {topbar.map((item) => {
          return (
            <Link
              key={item.href}
              href={item.href}
              className="text-s hover:underline text-white mx-[12px]"
              target={item.target || "_self"}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
      <NavBar id={id} shown={shown} sticky={sticky}>
        <Link href="/">
          <Logo fill={theme.colors.primary.main} height="40px" />
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
