import logo from "../../logo.svg";
import {Outlet} from "react-router-dom";
import {Fragment, useContext} from "react";
import {H1, MainNav, NavLink, NavList} from "./nav.styles";
import {UserContext} from "../../App";

function Nav() {
    const [user, setUser] =useContext(UserContext)

    const handleClick = () => {

            fetch("http://localhost:8080/user/logout")
                .then(() =>{
                setUser(null)
            })

    }

    return (
        <Fragment>
            <MainNav className="nav">
                <H1>Quick Quack</H1>
                <NavList>
                    <NavLink to="/dashboard">Home</NavLink>
                    <NavLink to="/explore">Explore</NavLink>
                    <NavLink to="/settings">Settings</NavLink>
                    <NavLink to="/" onClick={handleClick}>{user ? "Logout" : "Login"}</NavLink>
                </NavList>
            </MainNav>

        </Fragment>
    );
}

export default Nav;
