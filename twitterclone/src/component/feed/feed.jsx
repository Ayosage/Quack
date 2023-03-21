import QuackCard from "../card/quack-card";
import {Fragment} from "react";


function Feed(){

    let list = [
        {id:"41",handle:"@Tommy", content:"Quick Quack"},{id:"1",handle:"@PPpoopoo", content:"Quack Quack"}, {id:"2",handle:"@BigDaddyWarbucks", content:"I hate Kids & Fun"}, {id:"3",handle:"@Almo", content:"More than great Sabiha"}, {id:"3",handle:"@Nick", content:"Every question you ask me, $20, go ahead ask me more questions, especially on the test, I know all about this stuff. $20"}
    ];

    return(
        <Fragment>
            <div>
            {list && list.map((tweet) => ( <QuackCard key={tweet.id} handle={tweet.handle} content={tweet.content} />))}
            </div>
        </Fragment>
    )


}

export default Feed;


