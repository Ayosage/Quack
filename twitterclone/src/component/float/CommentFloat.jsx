import {createContext, Fragment, useState} from "react";
import {FaRegComment} from "react-icons/fa";
import CommentModal from "../tweet/CommentModal";

export const CommentContext = createContext();
function CommentFloat(props){
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
            <CommentContext.Provider value={[modalVisible, setModalVisible]}>
                <div onClick={showModal}>
                    <FaRegComment/>
                </div>
                {modalVisible ? <CommentModal show={modalVisible} quacker={props.quacker}/> : null}
            </CommentContext.Provider>
        </Fragment>
    )
}

export default CommentFloat;