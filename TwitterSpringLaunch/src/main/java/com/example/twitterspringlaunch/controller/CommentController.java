package com.example.twitterspringlaunch.controller;


import com.example.twitterspringlaunch.model.Comment;
import com.example.twitterspringlaunch.model.Tweet;
import com.example.twitterspringlaunch.model.User;
import com.example.twitterspringlaunch.service.CommentService;
import com.example.twitterspringlaunch.service.TweetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comment")
@CrossOrigin
public class CommentController {


    @Autowired
    private CommentService commentService;


    @PostMapping("/add")
    public Comment postTweet(@RequestBody Comment comment) {
        System.out.println("Controller Comment: " + comment.toString() );

        System.out.println(comment.getUser());
        commentService.postComment(comment);

        return comment;
    }


    @PostMapping("/getTweetComments")
    public List<Comment> getTweetComments(@RequestBody int tweetID) {
       return commentService.getCommentsByTweet(tweetID);
    }

    @GetMapping("/getUserComments")
    public List<Comment> getUserComments(@RequestBody int userID) {
        return commentService.getCommentsByUser(userID);
    }



}
