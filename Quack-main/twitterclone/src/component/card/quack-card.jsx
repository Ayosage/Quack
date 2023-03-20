import {Card, ContentContainer, IconContainer, ProfilePicture, QuackContent, UserContainer} from "./quack-card.styles";
import {Fragment} from "react";


function QuackCard(props){

    return(
        <Fragment>
        <Card>
            <UserContainer className="user-container">
                <ProfilePicture className="profile-picture"></ProfilePicture>
                <div className="handle">{props.handle}</div>
            </UserContainer>

            <ContentContainer className="content-container">
                <QuackContent className="quack-content">{props.content}</QuackContent>
            </ContentContainer>

            <IconContainer className="icon-container">
                <div className="icon">like</div>
                <div className="icon">comment</div>
                <div className="icon">quack</div>
            </IconContainer>
        </Card>
        </Fragment>
    )
}

export default QuackCard;