package com.example.twitterspringlaunch.controller;

        import com.example.twitterspringlaunch.model.Comment;
        import com.example.twitterspringlaunch.model.User;
        import com.example.twitterspringlaunch.service.TweetService;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.web.bind.annotation.*;

        import com.example.twitterspringlaunch.model.Tweet;

        import java.util.List;


@RestController
@RequestMapping("/tweet")
@CrossOrigin
public class TweetController {


    @Autowired
    private TweetService tweetService;

    /*
     * http(s)://host:port/TwitterSpringLaunch/tweet/add
     */
    @PostMapping("/add")
    public Tweet postTweet(@RequestBody Tweet twit) {
        tweetService.postTweet(twit);
        return twit;
    }

    @PostMapping("/getUserTweets")
    public List<Tweet> getUserTweets(@RequestBody User user) {

        return tweetService.getUserTweets(user);
    }
    @GetMapping("/getAll")
    public List<Tweet> getAllTweets(){
        return tweetService.getAllTweets();
    }

    /*
     * http(s)://host:port/TwitterSpringLaunch/tweet/delete/1
     */
    @DeleteMapping("/delete/{twitId}")
    public boolean deleteTweetById(@PathVariable(value = "twitId") Integer twitId) {
        return tweetService.deleteTweetById(twitId);
    }

}

