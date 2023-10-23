import {Fragment, useContext} from "react";
import {UserContext} from "../../App";
import Nav from "../nav/nav";
import {GridContainer, SearchBar} from "../dashboard/dashboard.styles";
import ProfileComponentTiny from "../../component/profile-component/profile.component.tiny";
import MenuNav from "../nav/menuNav";
import ProfileComponentSmall from "../../component/profile-component/profile.component";
import ProfileFeed from "../../component/feed/profileFeed";


function Quack(){
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
                    //quack
                    <ProfileComponentSmall user={user}/>
                    //comments
                    <ProfileFeed user={user}/>
                </div>


                <div></div>
            </GridContainer>




        </Fragment>
    )


}


export default Quack;