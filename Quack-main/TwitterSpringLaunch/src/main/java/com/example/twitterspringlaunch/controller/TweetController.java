package com.example.twitterspringlaunch.controller;

        import com.example.twitterspringlaunch.service.TweetService;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.web.bind.annotation.CrossOrigin;
        import org.springframework.web.bind.annotation.DeleteMapping;
        import org.springframework.web.bind.annotation.PathVariable;
        import org.springframework.web.bind.annotation.PostMapping;
        import org.springframework.web.bind.annotation.RequestBody;
        import org.springframework.web.bind.annotation.RequestMapping;
        import org.springframework.web.bind.annotation.RestController;

        import com.example.twitterspringlaunch.model.Tweet;


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

    /*
     * http(s)://host:port/TwitterSpringLaunch/tweet/delete/1
     */
    @DeleteMapping("/delete/{twitId}")
    public boolean deleteTweetById(@PathVariable(value = "twitId") Integer twitId) {
        return tweetService.deleteTweetById(twitId);
    }


}

