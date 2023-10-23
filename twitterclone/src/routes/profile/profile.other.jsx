import {Fragment, useContext, useEffect, useState} from "react";
import Feed from "../../component/feed/feed";
import Nav from "../nav/nav";
import {GridContainer, SearchBar} from "../dashboard/dashboard.styles";
import ProfileFeed from "../../component/feed/profileFeed";
import {UserContext} from "../../App";
import {FlexContainer, HR} from "./profile.styles";
import ProfileComponentSmall from "../../component/profile-component/profile.component";
import MenuNav from "../nav/menuNav";
import {useLocation} from "react-router-dom";
import ProfileComponentTiny from "../../component/profile-component/profile.component.tiny";


function OtherProfile(){
    const [youser, setYouser] = useContext(UserContext)
    const location = useLocation();
    const [user, setUser]= useState({username: location.state.username})
    console.log("loc state: "+location.state.username)
    useEffect(() => {
        fetch("http://localhost:8080/tweet/getProfile",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)})
            .then(response => {
                console.log("prof other response"+response)
                if(response.ok){

                    return response.json()
                }
            }).then(data => {
            console.log("prof other data"+data)
            setUser(data)
        })
            .catch(error => console.log(error))
    }, [])

    console.log("prof other user"+user)
    return (

        <Fragment>
            <Nav/>

            <SearchBar>
                <input type="text" placeholder="search"/>
            </SearchBar>

            <GridContainer>
                <div>


                    <ProfileComponentTiny user={youser}/>
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


export default OtherProfile;