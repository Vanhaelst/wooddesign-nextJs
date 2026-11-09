import React, { useState } from "react";
import Grid from "@/components/Grid";
import { cx } from "@/utils/cx";
import { navigation } from "./navigation";
import { useRouter } from "next/router";
import Paragraph from "@/components/Paragraph";
import Text from "@/components/Text";
import CloseIcon from "@/icons/Close";
import MenuIcon from "@/icons/Menu";
import Wordmark from "../Wordmark";
import Facebook from "@/icons/Facebook";
import Pinterest from "@/icons/Pinterest";
import Instagram from "@/icons/Instagram";
import Cart from "@/icons/cart";
import Link from "next/link";
import PromoBar from "./PromoBar";

const menuItemClasses =
  "relative text-left font-secondary font-extralight uppercase tracking-[2px] text-muted no-underline p-[12px_10px] hover:bg-primary hover:text-white";

const Line = () => (
  <div className="mb-4 w-full border-b border-solid border-[rgb(215,215,215)] pt-4" />
);

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="block w-full">
      <PromoBar />
      <Grid
        container
        className="relative z-[500] mt-2 flex items-center justify-between bg-ivory px-6 py-2"
      >
        <Link href="/">
          <Wordmark tone="dark" compact />
        </Link>
        <div onClick={handleClick}>
          <MenuIcon size="24px" />
        </div>
      </Grid>
      <div
        className={cx(
          "fixed left-0 top-0 z-[500] h-full w-full bg-black/50",
          isOpen ? "block" : "hidden",
        )}
      />
      <div
        className={cx(
          "fixed bottom-0 top-0 z-[10000] flex h-full w-full flex-col bg-white pb-8 pl-4 pr-4 pt-16 transition-all duration-500 xs:w-[350px]",
          isOpen ? "right-0" : "right-[-110vw]",
        )}
      >
        <div className="absolute right-6 top-6 z-[10000]" onClick={handleClick}>
          <CloseIcon size="20px" />
        </div>
        {navigation.map((item) => {
          const active = router.pathname === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              className={cx(menuItemClasses, active && "!text-primary")}
            >
              {item.title}
            </a>
          );
        })}
        <Line />
        <Link
          href="http://shop.wooddesign.be"
          className="flex items-center gap-2 mx-[12px] my-[10px] font-medium uppercase tracking-wide"
          style={{ color: "#61993b" }}
          target="_blank"
        >
          <Cart className="w-5 h-5" stroke="#61993b" />
          Bezoek onze webshop
        </Link>
        <Line />
        <div className="mx-[12px]">
          {" "}
          <Paragraph color="#676b6d">
            Wooddesign bvba
            <br />
            <Text size="Caption2" fontWeight="bold" color="primary">
              <Link href="mailto:info@wooddesign.be" type="hidden">
                info@wooddesign.be
              </Link>
            </Text>
            <br />
            <Text size="Caption2" fontWeight="bold" color="primary">
              <Link href="tel:+32477208484" type="hidden">
                +32 (0)477 20 84 84
              </Link>
            </Text>
          </Paragraph>
        </div>

        <div className="absolute bottom-6 z-[10000] flex w-[calc(100%-32px)] items-center justify-center [&_svg]:m-2">
          <Facebook size="20px" />
          <Instagram size="20px" />
          <Pinterest size="20px" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
