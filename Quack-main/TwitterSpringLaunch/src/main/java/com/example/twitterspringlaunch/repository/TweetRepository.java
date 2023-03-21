package com.example.twitterspringlaunch.repository;

import com.example.twitterspringlaunch.model.Tweet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TweetRepository extends JpaRepository<Tweet,Integer> {
}
