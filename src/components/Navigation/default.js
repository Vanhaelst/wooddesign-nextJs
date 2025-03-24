import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Menu from "@/components/Navigation/Menu";
import MenuItem from "@/components/Navigation/MenuItem";
import NavBar from "@/components/Navigation/NavBar";
import { navigation } from "./navigation";
import Logo from "src/theme/logo/Logo";
import Link from "next/link";

const DesktopNavigation = () => {
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
      {/*
      <div className="bg-[#8dc63f] px-[44px] py-2 flex justify-end">
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
          <Cart className="h-5 w-5" />
          <Link
            target="_blank"
            href="https://shop.wooddesign.be"
            className="text-s text-white text-[14px] ml-[8px] font-thin hover:underline"
          >
            Shop online
          </Link>
        </div>
      </div>
      */}
      <NavBar>
        <Link href="/">
          <Logo fill={"white"} height="40px" />
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
