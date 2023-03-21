package com.example.twitterspringlaunch.service;

import com.example.twitterspringlaunch.model.User;
import com.example.twitterspringlaunch.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {


    public User saveUser(User user);
    public List<User> getAllUsers();
}
