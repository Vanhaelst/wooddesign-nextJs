import React from "react";
import { useRouter } from 'next/router'
import Menu from "@/components/Navigation/Menu";
import MenuItem from "@/components/Navigation/MenuItem";
import NavBar from "@/components/Navigation/NavBar";
import navigation from './navigation';
import LetterMark from "src/theme/logo/LetterMark";
import theme from "src/theme";

const DesktopNavigation = ({ id, shown, sticky }) => {
    const router = useRouter()

    return (
        <NavBar id={id} shown={shown} sticky={sticky}>
            <LetterMark fill={theme.colors.primary.main} width="65px" />
            <Menu>
                {navigation.map(item => {
                    const active = router.pathname === item.href;
                    return (
                        <MenuItem key={item.href} href={item.href} active={active} target={item.target || "_self"}>{item.title}</MenuItem>
                    )
                })}
            </Menu>
        </NavBar>
    )
}

export default DesktopNavigation;
