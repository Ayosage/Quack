package com.example.twitterspringlaunch.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.twitterspringlaunch.model.Tweet;
import com.example.twitterspringlaunch.repository.TweetRepository;

@Service
public class TweetServiceImpl implements TweetService{
	
	private static final Logger log = LoggerFactory.getLogger(TweetServiceImpl.class);
	
	@Autowired
	private TweetRepository tweetRepository;
	
	
	public Tweet postTweet(Tweet twit) {
		log.info("Inside postTweet twit:{}",twit);
		tweetRepository.save(twit);
		log.info("done method postTweet");
		return twit;
	}
	
	public boolean deleteTweetById(int tweetId) {
		log.info("Inside deletById tweetId:{}",tweetId);
		tweetRepository.deleteById(tweetId);
		log.info("tweet delete successful");
		
		return true;
	}

}
