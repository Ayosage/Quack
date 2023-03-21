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
//@RequestMapping("/user")
//@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("register")
    public ResponseEntity<User> add(@RequestBody User user){
        return new ResponseEntity<User>(userService.saveUser(user), HttpStatus.CREATED);
    }

    @GetMapping("getAll")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteUser(@PathVariable ("id") int id){
        userService.deleteUser(id);
        return new ResponseEntity<String>("deleted", HttpStatus.OK);
    }
}
