package com.example.twitterspringlaunch.service;

import java.util.List;

import com.example.twitterspringlaunch.model.Tweet;

public interface TweetService {
	
	Tweet postTweet(Tweet twit) ;
	
	boolean deleteTweetById(int tweetId);
	
	List<Tweet> getAllTweets();
	
	Tweet updateTweet(Tweet tweet,int id);
}
