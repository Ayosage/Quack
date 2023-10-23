package com.example.twitterspringlaunch.controller;


import com.example.twitterspringlaunch.model.User;
import com.example.twitterspringlaunch.service.UserService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    public User userObj = new User();

    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public ResponseEntity<User> add(@RequestBody User user){
        return new ResponseEntity<User>(userService.saveUser(user), HttpStatus.CREATED);
    }

    @GetMapping("/getAll")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/getUser")
    public User getUser(){return userObj;}

    @GetMapping("/logout")
    public void logout(){userObj = null;}

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable ("id") int id){
        userService.deleteUser(id);
        return new ResponseEntity<String>("deleted", HttpStatus.OK);
    }

    @PostMapping("/getProfile")
    public User getProfile(@RequestBody User user){
        return userService.getUserAuth(user.getUsername());
    }

    @PostMapping("/auth")
    public User auth(@RequestBody User user){
        System.out.println("Auth Initiated");
        userObj = userService.getUserAuth(user.getUsername());
        return userService.getUserAuth(user.getUsername());
    }
}
