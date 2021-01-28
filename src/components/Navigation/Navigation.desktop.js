import React, { Fragment } from "react";
import DesktopNavigation from "./default";

const Navigation = ({ shown }) => {
    return (
        <Fragment>
            <DesktopNavigation sticky shown={shown}/>
            <DesktopNavigation id="nav" />
        </Fragment>
    )
}

export default Navigation;
