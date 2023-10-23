import {Fragment, useContext} from "react";
import {Outlet} from "react-router-dom";
import {UserContext} from "../../App";
import Nav from "../nav/nav";
import {FlexContainer} from "./settings.styles";

function Settings() {
    const [user, setUser] = useContext(UserContext)
    return (
        <Fragment>
            <Nav/>
            <FlexContainer >
                    <h1>Settings</h1>
                <hr/>

                    <h2><a href="#">This is your settings {user.username}</a></h2>
                    <h2><a href="#">Change Username</a></h2>
                    <h2><a href="#">Change Password</a></h2>
                    <h2><a href="#">Privacy Settings</a></h2>
                    <h2><a href="#">Billing Information</a></h2>

                <hr/>
                <h2><a href="#">This is your settings {user.username}</a></h2>
                <h2><a href="#">Change Username</a></h2>
                <h2><a href="#">Change Password</a></h2>
                <h2><a href="#">Privacy Settings</a></h2>
                <h2><a href="#">Billing Information</a></h2>

                <hr/>


            </FlexContainer>


            <Outlet />
        </Fragment>
    );
}

export default Settings;