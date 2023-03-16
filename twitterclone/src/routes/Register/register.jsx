import {Fragment} from "react";
import Form from "../../component/form/login";
import { Outlet} from "react-router-dom";
import Nav from "../nav/nav";
import Login from "../../component/form/login";
import Register from "../../component/form/register";

function Home() {
    return (
        <Fragment>

            <Register/>

            <Outlet />
        </Fragment>
    );
}

export default Home;