import {Fragment, useContext} from "react";
import Form from "../../component/form/login";
import {Outlet, useNavigate} from "react-router-dom";
import Nav from "../nav/nav";
import Login from "../../component/form/login";
import ducks from "../../media/ducks.mp4";
import {Overlay, Video} from "./home.styles";
import {UserContext} from "../../App";

function Home() {
    const [user, setUser]= useContext(UserContext);
    const navigate = useNavigate();



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