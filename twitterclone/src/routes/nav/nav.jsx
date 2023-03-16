import logo from "../../logo.svg";
import {Outlet} from "react-router-dom";
import {Fragment} from "react";
import {H1, MainNav, NavLink, NavList} from "./nav.styles";

function Nav() {
    return (
        <Fragment>
            <MainNav className="nav">
                <H1>Quack Quack</H1>
                <NavList>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/profile">Account</NavLink>
                    <NavLink to="/settings">Settings</NavLink>
                    <NavLink to="/dashboard">Explore</NavLink>
                </NavList>
            </MainNav>
            <Outlet />
        </Fragment>
    );
}

export default Nav;
