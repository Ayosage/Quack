package com.example.twitterspringlaunch.service.impl;

import com.example.twitterspringlaunch.model.User;
import com.example.twitterspringlaunch.repository.UserRepository;
import com.example.twitterspringlaunch.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

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
    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }

    @Override
    public User updateUser(User user, String username) {
        Optional<User> optionalUser = Optional.of(userRepository.findByUsername(username));
        if (optionalUser.isPresent()) {
            User existingUser = optionalUser.get();
            if (user.getUsername() != null) {
                existingUser.setUsername(user.getUsername());
            }
            if (user.getPassword() != null) {
                existingUser.setPassword(user.getPassword());
            }
            if (user.getEmail() != null) {
                existingUser.setEmail(user.getEmail());
            }
            if (user.getFirstName() != null) {
                existingUser.setFirstName(user.getFirstName());
            }
            if (user.getLastName() != null) {
                existingUser.setLastName(user.getLastName());
            }
            return userRepository.save(existingUser);
        } else {
            return null;
        }
    }


    @Override
    public boolean login(String username, String password, HttpServletRequest request) {
        User user = userRepository.findByUsername(username);
        if (user != null && user.getUsername().equals(username)) {
            request.getSession().setAttribute("user", user);
            return true;
        } else {
            return false;
        }
    }

    public boolean logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if(session != null){
            session.invalidate();
            return true;
        }else{
            return false;
        }
    }
}
