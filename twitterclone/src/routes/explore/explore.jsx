import {Fragment, useContext} from "react";
import {UserContext} from "../../App";
import {GridContainer, SearchBar} from "../explore/explore.styles";
import ProfileComponentTiny from "../../component/profile-component/profile.component.tiny";
import MenuNav from "../nav/menuNav";
import ExploreTweetFeed from "../../component/feed/exploreQuackFeed";
import ExploreUserFeed from "../../component/feed/exploreUserFeed";
import {HR} from "../profile/profile.styles";

function Explore() {
    const [user, setUser] = useContext(UserContext)
    return (
        <Fragment>

            <SearchBar>
                <input type="text" placeholder="search"/>
            </SearchBar>

            <GridContainer>
                <div>

                    <ProfileComponentTiny user={user}/>

                    <MenuNav/>
                </div>


                <div>
                    <h1>Community Members</h1>
                    <ExploreUserFeed/>
                    <HR/>
                    <h1>New Quick Quacks</h1>
                    <ExploreTweetFeed/>
                </div>



            </GridContainer>




        </Fragment>
    );
}

export default Explore;