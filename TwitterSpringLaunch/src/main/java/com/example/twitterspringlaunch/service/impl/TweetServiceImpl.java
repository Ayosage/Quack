package com.example.twitterspringlaunch.service.impl;

import com.example.twitterspringlaunch.model.Tweet;
import com.example.twitterspringlaunch.repository.TweetRepository;
import com.example.twitterspringlaunch.service.TweetService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TweetServiceImpl implements TweetService {
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

    @Override
    public List<Tweet> getAllTweets() {
        log.info("Inside getAllTweets");

        List<Tweet> allTweet = tweetRepository.findAll();
        log.info("finally returning tweet:{}",allTweet);
        return allTweet;
    }
    @Override
    public Tweet updateTweet(Tweet tweet,int id) {
        log.info("updateTweet came");



        tweetRepository.save(tweet);
        log.info("updateTweet done");
        return tweet;

    }



}
