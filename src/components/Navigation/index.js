import React from 'react';
import dynamic from 'next/dynamic';
import { isMobile } from 'react-device-detect';




const Nav = ({ shown }) => {
    const Navigation = dynamic(() => (isMobile ? import("./Navigation.mobile") : import("./Navigation.desktop")),
        { ssr: false })


    return (
        <Navigation shown={shown} />
    )
}


export default Nav;
