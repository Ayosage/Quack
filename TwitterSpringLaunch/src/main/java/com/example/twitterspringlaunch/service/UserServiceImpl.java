package com.example.twitterspringlaunch.service;

import com.example.twitterspringlaunch.model.User;
import com.example.twitterspringlaunch.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;


    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserAuth(String username){return userRepository.findUserByUsername(username);}

    @Override
    public void deleteUser(int id) {
        userRepository.deleteById(id);

    }
}
