import {Card, ContentContainer, IconContainer, ProfilePicture, QuackContent, UserContainer} from "./quack-card.styles";
import {Fragment, useEffect, useState} from "react";
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import {FaRegComment} from "react-icons/fa";
import {GiPlasticDuck} from "react-icons/gi";
import {useNavigate} from "react-router-dom";
import CommentFloat from "../float/CommentFloat";




function QuackCard(props){

    console.log(props.id)
    const navigate = useNavigate();
    const [like, setLike] = useState(false);
    const [commentModalOpen, setCommentModalOpen] = useState(false);


    const likeClick = () => {
        if(like){
            setLike(false)
        } else{
            setLike(true)
        }
    }

    const commentClick = () => {
        if(commentModalOpen){
            setCommentModalOpen(false)
        } else{
            setCommentModalOpen(true)
        }
    }

    const toProfile = () =>{
        navigate("/other-profile", {state: {username: props.handle}})
    }

    const toQuack = () => {
      navigate("/quack", {state: {username: props.handle, }})
    }



    return(
        <Fragment>
        <Card key={props.id} onClick={toQuack}>
            <UserContainer className="user-container">
                <ProfilePicture onClick={toProfile} className="profile-picture"></ProfilePicture>
                <div className="handle">@{props.handle}</div>
            </UserContainer>

            <ContentContainer className="content-container">
                <QuackContent className="quack-content">{props.content}</QuackContent>
            </ContentContainer>

            <IconContainer className="icon-container">
                <div onClick={likeClick}>{like ? <AiFillHeart/> :<AiOutlineHeart/> }</div>
                <CommentFloat quacker={{id: props.id ,handle: props.handle, content: props.content }}/>
                <div className="icon"><GiPlasticDuck/></div>
            </IconContainer>
        </Card>

        </Fragment>
    )
}

export default QuackCard;