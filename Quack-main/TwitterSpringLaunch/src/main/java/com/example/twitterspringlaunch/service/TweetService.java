package com.example.twitterspringlaunch.service;

import com.example.twitterspringlaunch.model.Tweet;

public interface TweetService {

    Tweet postTweet(Tweet twit) ;

    boolean deleteTweetById(int tweetId);
}
