
import QuackCard from "../card/quack-card";
import {Fragment, useContext, useEffect, useState} from "react";
import ExploreCardBig from "../card/explore.card.big";
import {UserContext} from "../../App";
import {FlexContainer} from "./explore.quack.feed.styles";


function ExploreUserFeed(){
    const [user, setUser] = useContext(UserContext)
    const [users, setUsers] = useState(null)
    useEffect(() => {
        fetch("http://localhost:8080/user/getAll")
            .then(response => {
                if(response.ok){
                    console.log(response)
                    return response.json()
                }
            }).then(data => {
            let newData = data.filter(item => item.username !== user.username)
            newData.length = 6;
            setUsers(newData.reverse())
        })
            .catch(error => console.log(error))
    }, [])








    return(
        <Fragment>
            <FlexContainer>
                {users && users.map((user) => (<ExploreCardBig key={user.id} handle={user.username}  />))}
            </FlexContainer>
        </Fragment>
    )


}

export default ExploreUserFeed;