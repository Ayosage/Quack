
import {FlexContainer, HR} from "../../routes/profile/profile.styles";
import {Fragment} from "react";
function ProfileComponentTiny(props){

    return(

        <Fragment>
            <FlexContainer>
                <div className="flex-container-nested">
                    <div className="circle"></div>
                    <div className="container">
                        <div className="name"> {props.user.username}</div>
                        <div className="handle"> @{props.user.username} </div>

                    </div>
                </div>



            </FlexContainer>
            <HR/>

        </Fragment>
    )
}

export default ProfileComponentTiny;