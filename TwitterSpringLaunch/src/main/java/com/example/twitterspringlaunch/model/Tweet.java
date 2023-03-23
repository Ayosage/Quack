package com.example.twitterspringlaunch.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Date;

@Entity
public class Tweet {
    public Tweet() {

    }

    public Tweet(int tweetId, String userName, String content, Date dateAndTime) {
        super();
        this.tweetId = tweetId;
        this.userName = userName;
        this.content = content;
        this.dateAndTime = dateAndTime;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int tweetId;
    private String userName;
    private String content;
    private Date dateAndTime;

    public int getTweetId() {
        return tweetId;
    }

    public String getUserName() {
        return userName;
    }

    public String getContent() {
        return content;
    }

    public Date getDateAndTime() {
        return dateAndTime;
    }

    public void setTweetId(int tweetId) {
        this.tweetId = tweetId;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setDateAndTime(Date dateAndTime) {
        this.dateAndTime = dateAndTime;
    }

    @Override
    public String toString() {
        return "Tweet [tweetId=" + tweetId + ", userName=" + userName + ", content=" + content + ", dateAndTime="
                + dateAndTime + "]";
    }


}
