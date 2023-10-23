package com.example.twitterspringlaunch.service;

import com.example.twitterspringlaunch.model.Comment;
import com.example.twitterspringlaunch.model.Tweet;
import com.example.twitterspringlaunch.model.User;
import com.example.twitterspringlaunch.repository.TweetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TweetServiceImpl implements TweetService{

    private static final Logger log = LoggerFactory.getLogger(TweetServiceImpl.class);

    @Autowired
    private TweetRepository tweetRepository;


    @Override
    public Tweet postTweet(Tweet tweet) {
        log.info("Inside postTweet twit:{}", tweet);
        tweetRepository.save(tweet);
        log.info("done method postTweet");
        return tweet;
    }

    @Override
    public List<Tweet> getUserTweets (User user){
        return tweetRepository.findTweetByUsername(user.getUsername());
    };
    @Override
    public List<Tweet> getAllTweets (){
        return tweetRepository.findAll();
    }

    @Override
    public boolean deleteTweetById(int tweetId) {
        log.info("Inside deletById tweetId:{}",tweetId);
        tweetRepository.deleteById(tweetId);
        log.info("tweet delete successful");

        return true;
    }

    @Override
    public Tweet getTweet(int tweetId){
        return tweetRepository.getTweetById(tweetId);
    }



}
