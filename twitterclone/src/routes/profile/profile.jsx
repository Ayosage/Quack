import {Fragment, useContext} from "react";
import Feed from "../../component/feed/feed";
import Nav from "../nav/nav";
import {GridContainer, SearchBar} from "../dashboard/dashboard.styles";
import ProfileFeed from "../../component/feed/profileFeed";
import {UserContext} from "../../App";
import {FlexContainer, HR} from "./profile.styles";
import ProfileComponentSmall from "../../component/profile-component/profile.component";
import MenuNav from "../nav/menuNav";
import ProfileComponentTiny from "../../component/profile-component/profile.component.tiny";


function Profile(){
    const [user, setUser]= useContext(UserContext);
    console.log(user)
    return (

        <Fragment>
            <Nav/>

            <SearchBar>
                <input type="text" placeholder="search"/>
            </SearchBar>

            <GridContainer>
                <div>

                    <ProfileComponentTiny user={user}/>

                    <MenuNav/>
                </div>


                <div>
                    <ProfileComponentSmall user={user}/>
                    <ProfileFeed user={user}/>
                </div>


                <div></div>
            </GridContainer>




        </Fragment>
    )


}


export default Profile;