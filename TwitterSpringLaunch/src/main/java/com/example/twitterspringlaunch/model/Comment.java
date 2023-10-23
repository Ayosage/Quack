package com.example.twitterspringlaunch.model;


import jakarta.persistence.*;

@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int commentId;
    private String content;
    private int userID;

    private int tweetID;

    private String dateTime;




    public Comment(String content, int userId, int tweetId, String dateTime) {

        this.content = content;
        this.userID = userId;
        this.tweetID = tweetId;
        this.dateTime = dateTime;
    }

    public Comment() {

    }

    @Override
    public String toString() {
        return "Comment to String: "+"Comment{" +
                "commentId=" + commentId +
                ", content='" + content + '\'' +
                ", userID=" + userID +
                ", tweetID=" + tweetID +
                ", dateTime='" + dateTime + '\'' +
                '}';
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getUser() {
        return userID;
    }

    public void setUser(int user) {
        this.userID = user;
    }

    public int getTweetID() {
        return tweetID;
    }

    public void setTweetID(int tweetID) {
        this.tweetID = tweetID;
    }

    public String getDateTime() {
        return dateTime;
    }

    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }
}
