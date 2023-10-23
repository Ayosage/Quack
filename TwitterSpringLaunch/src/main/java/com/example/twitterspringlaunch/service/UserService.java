package com.example.twitterspringlaunch.service;

import com.example.twitterspringlaunch.model.User;
import com.example.twitterspringlaunch.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UserService {


    User saveUser(User user);
    List<User> getAllUsers();

    User getUserAuth(String username);

    void deleteUser(int id);
}
