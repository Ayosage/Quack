import {Fragment} from "react";
import Form from "../../component/form/login";
import { Outlet} from "react-router-dom";
import Nav from "../nav/nav";
import Login from "../../component/form/login";
import ducks from "../../media/ducks.mp4";
import {Overlay, Video} from "./home.styles";

function Home() {
    return (
        <Fragment>
            <Nav/>
            <Video src={ducks} autoPlay muted loop />
            <Overlay> " " </Overlay>
            <Login/>

            <Outlet />
        </Fragment>
    );
}

export default Home;