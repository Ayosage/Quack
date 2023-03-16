import {Fragment} from "react";
import {MainNav, NavLink, NavList} from "../nav/nav.styles";
import {Outlet} from "react-router-dom";
import Feed from "../../component/feed/feed";
import {GridContainer} from "./profile.styles";

function Profile() {
    return (
        <Fragment>
            <GridContainer className="dash-container-grid">

                <div className="grid-item">1</div>



                <Feed/>

                <div className="grid-item">3</div>

            </GridContainer>
        </Fragment>
    );
}

export default Profile;