package com.example.twitterspringlaunch.repository;

import com.example.twitterspringlaunch.model.Comment;
import com.example.twitterspringlaunch.model.Tweet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Integer> {


    List<Comment> findCommentByTweetID(int tweetID);

    List<Comment> findCommentByUserID(int userID);
}
