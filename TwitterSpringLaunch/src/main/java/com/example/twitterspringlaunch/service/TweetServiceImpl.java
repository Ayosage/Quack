package com.example.twitterspringlaunch.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.twitterspringlaunch.model.Tweet;
import com.example.twitterspringlaunch.repository.TweetRepository;

@Service
public class TweetServiceImpl implements TweetService{
	
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
		/**
		 * Connection conn
		 * Statement st = conn.createStatement(""):
		 * ResultSet rs = st.getResultList()
		 * List<Tweet> list = new ArrayList()
		 * while(rs.next(){
		 * 	int id = 	rs.getOBject("tweet_id");
		 *   Strign contnet  =		rs.getOBject("content");
	 	* 		String username = 	rs.getOBject("username");
	 	* 
	 	* 		Tweet tw = new Tweet();
	 	* 		list.add(tw);
	 	* 
	 	* 
		 * }
		 * 
		 * return list;
		 * 
		 */
		List<Tweet> allTweet = tweetRepository.findAll();
		log.info("finally returning tweet:{}",allTweet);
		return allTweet;
	}

}
