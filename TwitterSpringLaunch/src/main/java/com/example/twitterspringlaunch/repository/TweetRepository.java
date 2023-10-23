package com.example.twitterspringlaunch.repository;

import com.example.twitterspringlaunch.model.Comment;
import com.example.twitterspringlaunch.model.Tweet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.ArrayList;
import java.util.List;

public interface TweetRepository extends JpaRepository<Tweet,Integer> {

    List<Tweet> findTweetByUsername(String username);
    Tweet getTweetById(int tweetID);



}
