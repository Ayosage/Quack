
import {Fragment, useEffect, useState} from "react";
import QuackCardBig from "../card/quack.card.big";
import {FlexContainer} from "./explore.quack.feed.styles";


function ExploreTweetFeed(){
    const [tweets, setTweets] = useState(null)
    useEffect(() => {
        fetch("http://localhost:8080/tweet/getAll")
            .then(response => {
                if(response.ok){
                    console.log(response)
                    return response.json()
                }
            }).then(data => {
            data.length = 6;
            setTweets(data.reverse())
        })
            .catch(error => console.log(error))
    }, [])








    return(
        <Fragment>
            <FlexContainer>
                {tweets && tweets.map((tweet) => (<QuackCardBig key={tweet.id} handle={tweet.userName} content={tweet.content} />))}
            </FlexContainer>
        </Fragment>
    )


}

export default ExploreTweetFeed;