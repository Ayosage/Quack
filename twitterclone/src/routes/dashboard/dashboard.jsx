import {Fragment, useContext} from "react";
import {MainNav, NavLink, NavList} from "../nav/nav.styles";
import {Outlet} from "react-router-dom";
import Feed from "../../component/feed/feed";
import {GridContainer,SearchBar} from "./dashboard.styles";

import TweetFloat from "../../component/float/TweetFloat";
import {UserContext} from "../../App";
import MenuNav from "../nav/menuNav";
import ProfileComponentSmall from "../../component/profile-component/profile.component";
import {HR} from "../profile/profile.styles";
import ExploreComponent from "../../component/explore.component/explore.component";




function Dashboard() {

    const [user, setUser]= useContext(UserContext);
    console.log(user)
    return (
        <Fragment>



            <SearchBar>
                
                <input type="text" placeholder="search"/>
            </SearchBar>

            <GridContainer className="dash-container-grid">
                <div>
                    <ProfileComponentSmall user={user}/>



                   <MenuNav/>
                </div>




                <Feed/>

              <div>

                  <div>
                      <h2>Users you might know</h2>
                      <HR/>

                      <div>
                        <ExploreComponent/>
                      </div>
                  </div>
              </div>

            </GridContainer>

            <Outlet/>
        </Fragment>
    );
}

export default Dashboard;