import {Card, ContentContainer, IconContainer, ProfilePicture, QuackContent, UserContainer} from "./explore.card.big.styles";
import {Fragment, useEffect, useState} from "react";

import {useNavigate} from "react-router-dom";



function ExploreCardBig(props){
    const navigate = useNavigate();

    const toProfile = () =>{
        navigate("/other-profile", {state: {username: props.handle}})
    }



    return(
        <Fragment>
            <Card key={props.id} onClick={toProfile} >
                <UserContainer className="user-container">
                    <ProfilePicture className="profile-picture"></ProfilePicture>
                    <div className="handle">@{props.handle}</div>
                </UserContainer>

            </Card>
        </Fragment>
    )
}

export default ExploreCardBig;