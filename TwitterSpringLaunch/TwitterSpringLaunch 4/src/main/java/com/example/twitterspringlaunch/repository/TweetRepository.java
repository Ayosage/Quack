package com.example.twitterspringlaunch.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.twitterspringlaunch.model.Tweet;

public interface TweetRepository extends JpaRepository<Tweet,Integer>{

}
