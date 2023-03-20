package com.example.twitterspringlaunch.controller;


import com.example.twitterspringlaunch.model.User;
import com.example.twitterspringlaunch.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public String add(@RequestBody User user){
        userService.saveUser(user);
        return "New User Created";
    }

    @GetMapping("/getAll")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }
}
