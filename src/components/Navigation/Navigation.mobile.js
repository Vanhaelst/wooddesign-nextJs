import React, { useState } from "react";
import styled from "styled-components";
import Grid from "@/components/Grid";
import navigation from "./navigation";
import { useRouter } from "next/router";
import Paragraph from "@/components/Paragraph";
import Text from "@/components/Text";
import Link from "@/components/Link";
import CloseIcon from "@/icons/Close";
import MenuIcon from "@/icons/Menu";
import Logo from "../../theme/logo/Logo";
import Facebook from "@/icons/Facebook";
import Pinterest from "@/icons/Pinterest";
import Instagram from "@/icons/Instagram";

const Wrapper = styled('div').withConfig({
  shouldForwardProp: (prop) =>
      ['children'].includes(prop),
})`
  width: 100%;
  display: block;
`;

const Navbar = styled('div').withConfig({
  shouldForwardProp: (prop) =>
      ['children'].includes(prop),
})`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) =>
    !props.isOpen &&
    `
        // box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 4px;
    `}
  background-color: white;
  z-index: 500;
  position: relative;
  padding: 8px 24px;
`;

const Backdrop = styled('div').withConfig({
  shouldForwardProp: (prop) =>
      ['children'].includes(prop),
})`

  ${(props) =>
      props.isOpen
          ? `display: block;`
          : `display: none;`
  }
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 500;
`;

const Menu = styled('div').withConfig({
  shouldForwardProp: (prop) =>
      ['children'].includes(prop),
})`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  transition: all 0.5s;
  padding: 64px 16px 32px 16px;
 
  @media screen and (min-width: ${(props) =>
      props.theme.grid.breakpointSmall}px) {
    width: 350px;
  }
 
  ${(props) =>
    props.isOpen
      ? `right: 0;`
      : ` right: -110vw;`
  }
`;



const MenuItem = styled.a`
  font-family: ${(props) => props.theme.font.family.secondary};
  text-decoration: none;
  color: #676b6d;
  font-weight: ${(props) => props.theme.font.weight.light};
  letter-spacing: 2px;
  padding: 12px 10px;
  position: relative !important;
  text-align: left;
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary.main};
    color: white;
  }
  ${(props) =>
    props.active &&
    `
      color: ${props.theme.colors.primary.main} !important;
   `}
`;

const CloseWrapper = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 10000;
`;

const SocialWrapper = styled.div`
  position: absolute;
  bottom: 24px;
  width: calc(100% - 32px);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin: 8px;
  }
`;

const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey[30]};
  padding-top: ${(props) => props.theme.spaces[5]};
  margin-bottom: ${(props) => props.theme.spaces[5]};
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Wrapper as={Grid}>
      <Navbar as={Grid} isMobile={true} container isOpen={isOpen}>
        <Logo height="24px" fill="#464646" />
        <div onClick={handleClick}>
          <MenuIcon size="24px" />
        </div>
      </Navbar>
      <Backdrop isOpen={isOpen} />
      <Menu isMobile={true} isOpen={isOpen}>
        <CloseWrapper onClick={handleClick}>
          <CloseIcon size="20px" />
        </CloseWrapper>
        {navigation.map((item) => {
          const active = router.pathname === item.href;
          return (
            <MenuItem key={item.href} href={item.href} active={active}>
              {item.title}
            </MenuItem>
          );
        })}
        <Line />
        <Paragraph color="#676b6d">
          Wooddesign bvba
          <br />
          <Text size="Caption2" fontWeight="bold" color="primary">
            <Link href="tel:+32477208484" type="hidden">
              +32 (0)477 20 84 84
            </Link>
          </Text>
        </Paragraph>
        <SocialWrapper>
          <Facebook size="20px" />
          <Instagram size="20px" />
          <Pinterest size="20px" />
        </SocialWrapper>
      </Menu>
    </Wrapper>
  );
};

export default Navigation;
