import React from "react";
import { useRouter } from "next/router";
import Menu from "@/components/Navigation/Menu";
import MenuItem from "@/components/Navigation/MenuItem";
import NavBar from "@/components/Navigation/NavBar";
import { navigation, topbar } from "./navigation";
import Logo from "src/theme/logo/Logo";
import theme from "src/theme";
import Link from "next/link";
import Pin from "@/icons/pin";
import { PhoneIcon, EmailIcon, WarningIcon } from "@chakra-ui/icons";

const DesktopNavigation = ({ id, shown, sticky }) => {
  const router = useRouter();

  return (
    <>
      <div className="bg-[#8dc63f] px-[44px] py-2 flex justify-end">
        <div className="flex items-center">
          <Pin size="18px" fill="white" />
          <Link
            href="#"
            className="text-s text-white ml-[8px] text-[14px] font-thin hover:underline"
          >
            Prins Boudewijnlaan 21T, 2550 Kontich.
          </Link>
        </div>

        <div className="border-r-[1px] border-solid border-white mx-[12px]" />

        <div className="flex items-center mx-[12px]">
          <EmailIcon color={"white"} />
          <Link
            href="mailto:info@wooddesign.be"
            className="text-s text-white ml-[8px] text-[14px] font-thin hover:underline"
          >
            info@wooddesign.be
          </Link>
        </div>

        <div className="border-r-[1px] border-solid border-white mx-[12px]" />

        <div className="flex items-center mx-[12px]">
          <PhoneIcon color={"white"} />
          <Link
            href="tel:+32477208484"
            className="text-s text-white ml-[8px] text-[14px] font-thin hover:underline"
          >
            +32(0) 477.20.84.84
          </Link>
        </div>

        <div className="border-r-[1px] border-solid border-white mx-[12px]" />

        <div className="flex items-center mx-[12px]">
          <Link
            href="+32477208484"
            className="text-s text-white text-[14px] font-thin hover:underline"
          >
            {" "}
            Shop online
          </Link>
        </div>
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
