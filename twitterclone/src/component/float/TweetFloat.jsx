import {createContext, Fragment, useState} from "react";
import {FloatIcon} from "./tweetFloat.styles";
import TweetModal from "../tweet/tweetModal";

export const ModalContext = createContext();
function TweetFloat(){
    const [modalVisible, setModalVisible] = useState(false)


    const showModal = (() => {
        if(modalVisible){
            setModalVisible(false)
        } else{
            setModalVisible(true)
        }
    })

    return(
        <Fragment>
            <ModalContext.Provider value={[modalVisible, setModalVisible]}>
                <FloatIcon onClick={showModal}>
                    Quick Quack
                </FloatIcon>
                {modalVisible ? <TweetModal show={modalVisible}/> : null}
            </ModalContext.Provider>
        </Fragment>
    )
}

export default TweetFloat;