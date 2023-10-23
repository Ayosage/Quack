package com.example.twitterspringlaunch.service;

import com.example.twitterspringlaunch.model.Comment;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.example.twitterspringlaunch.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl implements CommentService{

    private static final Logger log = LoggerFactory.getLogger(CommentServiceImpl.class);

    @Autowired
    private CommentRepository commentRepository;
    @Override
    public Comment postComment(Comment comment) {
        log.info("Inside postTweet twit:{}",comment);
        System.out.println("Service Comment: " + comment.toString());
        commentRepository.save(comment);
        log.info("Inside postTweet twit:{}",comment);
        return comment;
    }

    @Override
    public List<Comment> getCommentsByTweet(int id){

        return commentRepository.findCommentByTweetID(id);
    }

    @Override
    public List<Comment> getCommentsByUser(int id){
        return commentRepository.findCommentByUserID(id);
    }
}
