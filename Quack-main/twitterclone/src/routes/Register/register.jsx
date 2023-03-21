import {Fragment} from "react";
import Form from "../../component/form/login";
import { Outlet} from "react-router-dom";
import Nav from "../nav/nav";
import Login from "../../component/form/login";
import Register from "../../component/form/register";

function Registration() {
    console.log("register");
    return (
        <Fragment>

            <Nav/>
            <Register/>

            <Outlet />
        </Fragment>
    );
}

export default Registration;