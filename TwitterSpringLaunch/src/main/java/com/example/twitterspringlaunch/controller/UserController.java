package com.example.twitterspringlaunch.controller;


import com.example.twitterspringlaunch.model.User;
import com.example.twitterspringlaunch.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {


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

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteUser(@PathVariable ("id") int id){
        userService.deleteUser(id);
        return new ResponseEntity<String>("deleted", HttpStatus.OK);
    }

    @PutMapping("{username}")
    public User user(@PathVariable("username") String username, @RequestBody User user){
        return userService.updateUser(user, username);
    }

    @PostMapping("/login")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> login(@RequestBody User user, HttpServletRequest request){
        boolean loggedIn = userService.login(user.getUsername(), user.getPassword(), request);
        if (loggedIn){
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("redirect", "/home");

            return ResponseEntity.ok(response);
        }else {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("error", "Invalid login credentials");

            return ResponseEntity.badRequest().body(response);
        }
    }


    @PostMapping("/logout")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> logout(HttpServletRequest request){
        boolean loggedOut = userService.logout(request);
        if(loggedOut){
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "You have been logged out.");

            return ResponseEntity.ok(response);
        }else{
            // Create a JSON object with an error message
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("error", "You are not signed in.");

            return ResponseEntity.badRequest().body(response);
        }
    }

}
