import {createContext, Fragment, useContext, useState} from "react";
import {FloatIcon} from "../float/tweetFloat.styles";
import {Modal, SendButton} from "./tweetModal.styles";
import {UserContext} from "../../App";
import {ModalContext} from "../float/TweetFloat"
import {useNavigate} from "react-router-dom";
import {TfiBackRight} from "react-icons/tfi";
import CommentFloat, {CommentContext} from "../float/CommentFloat";
import {
    ContentContainer,
    IconContainer,
    ProfilePicture,
    QuackContent,
    UserContainer
} from "../card/quack-card.styles";
import {CommentCard, FlexContainer} from "../card/comment.card.styles";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {GiPlasticDuck} from "react-icons/gi";


function CommentModal(props){
    console.log(props)
    {/* replace button with login on null user*/}
    const [user, setUser] = useContext(UserContext);
    const [content, setContent] = useState("")
    const [modalVisible, setModalVisible] = useContext(CommentContext);
    console.log(user)
    const handleClick = (e) => {
        let date = Date.now();
        let userId = user.id;
        let tweetId =  props.quacker.id;

        e.preventDefault();
        const comment={"user": userId , "tweetID": tweetId,"content": content, "dateTime": date};
        if(comment.content === "" || comment.content == null){
            setModalVisible(false);
            return
        }
        console.log("Composed Comment" , comment);

        fetch("http://localhost:8080/comment/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(comment)

        }).then((response) =>{
            console.log(response)
            console.log(response.json())
            console.log("New Comment Added")
            setModalVisible(false);

        })

    }

    const exitModal = () => {
        setModalVisible(false)
    }



    return(
        <Fragment>
            <Modal>
                <div className="flex-container"> <div></div><div className="exit" onClick={exitModal}> <TfiBackRight/> </div></div>
                <FlexContainer>
                <CommentCard>
                    <UserContainer className="user-container">
                        <ProfilePicture className="profile-picture"></ProfilePicture>
                        <div className="handle">@{props.quacker.handle}</div>
                    </UserContainer>

                    <ContentContainer className="content-container">
                        <QuackContent className="quack-content">{props.quacker.content}</QuackContent>
                    </ContentContainer>

                </CommentCard>
                </FlexContainer>
                <div className="flex-container">

                    <h4> Replying to @{props.quacker.handle}</h4>

                </div>
                <div className="flex-container">

                    <div> @{user.username}</div>

                </div>


                <textarea placeholder="Whats on your mind?" rows="5" cols="50" onChange={e => setContent(e.target.value)}/>
                <div>
                    <SendButton onClick={handleClick}>QUACK </SendButton>
                </div>

            </Modal>







        </Fragment>
    )
}

export default CommentModal;