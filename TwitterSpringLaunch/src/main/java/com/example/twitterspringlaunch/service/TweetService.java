package com.example.twitterspringlaunch.service;

import com.example.twitterspringlaunch.model.Comment;
import com.example.twitterspringlaunch.model.Tweet;
import com.example.twitterspringlaunch.model.User;

import java.util.ArrayList;
import java.util.List;

public interface TweetService {

    Tweet postTweet(Tweet twit) ;

    List<Tweet> getUserTweets (User user);
    List<Tweet> getAllTweets();

    boolean deleteTweetById(int tweetId);

    Tweet getTweet(int tweetId);


}
