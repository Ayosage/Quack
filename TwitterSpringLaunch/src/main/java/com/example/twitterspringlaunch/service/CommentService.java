package com.example.twitterspringlaunch.service;

import com.example.twitterspringlaunch.model.Comment;
import com.example.twitterspringlaunch.model.Tweet;
import com.example.twitterspringlaunch.model.User;

import java.util.List;

public interface CommentService {

    Comment postComment(Comment comment);
    List<Comment> getCommentsByTweet(int tweetID);
    List<Comment> getCommentsByUser(int userID);

}
