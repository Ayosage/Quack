package com.example.twitterspringlaunch.service;

import com.example.twitterspringlaunch.model.Tweet;

import java.util.List;

public interface TweetService {

    Tweet postTweet(Tweet twit) ;

    boolean deleteTweetById(int tweetId);

    List<Tweet> getAllTweets();

    Tweet updateTweet(Tweet tweet,int id);
}
