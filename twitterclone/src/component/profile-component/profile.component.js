
import {FlexContainer, HR} from "../../routes/profile/profile.styles";
import {Fragment} from "react";
function ProfileComponentSmall(props){

    return(

    <Fragment>
        <FlexContainer>
            <div className="flex-container-nested">
                <div className="circle"></div>
                <div className="container">
                    <div className="name"> {props.user.username}</div>

                </div>
            </div>

            <div className="info-container">
                <div className="handle"> @{props.user.username} </div>
                <div className="bio"> This is my bio</div>
                <div className="date"> Member Since: 3/23/23</div>
            </div>


        </FlexContainer>
        <HR/>

    </Fragment>
    )
}

export default ProfileComponentSmall;