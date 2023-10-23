import QuackCard from "../card/quack-card";
import {Fragment, useEffect, useState} from "react";


function Feed(){
    const [tweets, setTweets] = useState(null)
    useEffect(() => {
        fetch("http://localhost:8080/tweet/getAll")
            .then(response => {
                if(response.ok){
                    console.log(response)
                    return response.json()
                }
            }).then(data => {
            console.log(data)

            setTweets(data.reverse())
        })
            .catch(error => console.log(error))
    }, [])



    return(
        <Fragment>
            <div>
                {tweets && tweets.map(({id, username, content})=> <QuackCard key={id} id={id} handle={username} content={content}/>)}
            </div>
        </Fragment>
    )
}
export default Feed;


