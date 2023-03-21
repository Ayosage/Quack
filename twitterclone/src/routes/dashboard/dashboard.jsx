import {Fragment} from "react";
import {MainNav, NavLink, NavList} from "../nav/nav.styles";
import {Outlet} from "react-router-dom";
import Feed from "../../component/feed/feed";
import {GridContainer, Menu, MenuItem, SearchBar} from "./dashboard.styles";
import Nav from "../nav/nav";

function Dashboard() {

    return (
        <Fragment>

            <SearchBar>
                
                <input type="text" placeholder="search"/>
            </SearchBar>

            <GridContainer className="dash-container-grid">

                <Menu>
                    <MenuItem > <a href="#">Profile </a></MenuItem>
                    <MenuItem > <a>Explore </a> </MenuItem>
                    <MenuItem > <a>Settings </a> </MenuItem>
                    <MenuItem > <a>Account </a> </MenuItem>
                    <MenuItem > <a>Free Money </a> </MenuItem>
                </Menu>



                <Feed/>

                <Menu>
                    <MenuItem> Profile </MenuItem>
                    <MenuItem >Explore </MenuItem>
                    <MenuItem >Settings </MenuItem>
                    <MenuItem >BoopDoop </MenuItem>
                    <MenuItem >SnoopWoop </MenuItem>
                </Menu>

            </GridContainer>
        </Fragment>
    );
}

export default Dashboard;