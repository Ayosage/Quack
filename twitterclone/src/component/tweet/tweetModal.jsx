import {createContext, Fragment, useContext, useState} from "react";
import {FloatIcon} from "../float/tweetFloat.styles";
import {Modal, SendButton} from "./tweetModal.styles";
import {UserContext} from "../../App";
import {ModalContext} from "../float/TweetFloat"
import {useNavigate} from "react-router-dom";
import {TfiBackRight} from "react-icons/tfi";


function TweetModal(){
    {/* replace button with login on null user*/}
    const [user, setUser] = useContext(UserContext);
    const [content, setContent] = useState("")
    const [modalVisible, setModalVisible] = useContext(ModalContext);
    const handleClick = (e) => {

        e.preventDefault();
        const tweet={"username": user.username, "content": content, "date": Date.now()};
        if(tweet.content === "" || tweet.content == null){
            setModalVisible(false);
            return
        }
        console.log(tweet);

        fetch("http://localhost:8080/tweet/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(tweet)

        }).then((response) =>{
            console.log(response)
            console.log("New Tweet Added")
            setModalVisible(false);

        })

    }

    const exitModal = () => {
        setModalVisible(false)
    }



return(
        <Fragment>
            <Modal>
                <div className="flex-container">
                    <div> @{user.username}</div>
                    <div className="exit" onClick={exitModal}> <TfiBackRight/> </div>
                </div>


                <textarea placeholder="Whats on your mind?" rows="5" cols="50" onChange={e => setContent(e.target.value)}/>
                <div>
                    <SendButton onClick={handleClick}>QUACK </SendButton>
                </div>

            </Modal>







        </Fragment>
    )
}

export default TweetModal;