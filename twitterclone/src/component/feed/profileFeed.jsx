import QuackCard from "../card/quack-card";
import {Fragment, useContext, useEffect, useState} from "react";
import {UserContext} from "../../App";


function ProfileFeed(props){

    console.log("prof feed user"+props.user)

    const [tweets, setTweets] = useState(null)

    useEffect(() => {
        fetch("http://localhost:8080/tweet/getUserTweets",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(props.user)})
            .then(response => {
                if(response.ok){
                    console.log("prof feed response"+response)
                    return response.json()
                }
            }).then(data => {
            console.log("prof feed data"+data)
            setTweets(data.reverse())
        })
            .catch(error => console.log(error))
    }, [])








    return(
        <Fragment>
            <div>
                {tweets && tweets.map((tweet) => ( <QuackCard key={tweet.id} handle={tweet.userName} content={tweet.content} />))}
            </div>
        </Fragment>
    )


}

export default ProfileFeed;