package com.example.twitterspringlaunch.controller;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.twitterspringlaunch.model.Tweet;

import com.example.twitterspringlaunch.service.TweetService;
import com.example.twitterspringlaunch.service.TweetServiceImpl;


@RestController
@RequestMapping("/tweet")
@CrossOrigin
public class TweetController {
	
	private static final Logger log = LoggerFactory.getLogger(TweetController.class);

	@Autowired
	private TweetService tweetService;
	
	
	@PostMapping("/add")
	public Tweet postTweet(@RequestBody Tweet twit) {
		tweetService.postTweet(twit);
		return twit;
	}
	
	
	@DeleteMapping("/delete/{twitId}")
	public boolean deleteTweetById(@PathVariable(value = "twitId") Integer twitId) {
		return tweetService.deleteTweetById(twitId);
	}
	
	
	@GetMapping("/getall")
	public List<Tweet> getAllTwiters(){
		
		return tweetService.getAllTweets();
	}
	@PutMapping("/update/{tweetId}")
	public Tweet updateTweetById (@PathVariable ("tweetId") int id,@RequestBody Tweet tweet) {
		log.info("Inside updateTweetById tweet:{} ",tweet);
		return tweetService.updateTweet(tweet,id);
	}
	

}
