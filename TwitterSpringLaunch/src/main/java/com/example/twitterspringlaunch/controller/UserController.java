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

import java.util.List;

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
    public String login(@RequestBody User user, HttpServletRequest request, Model model){
        boolean loggedIn = userService.login(user.getUsername(), user.getPassword(), request);
        if (loggedIn){
            return "redirect:/home";
        }else {
            model.addAttribute("error", "Invalid login credentials");
            return "login";
        }
    }

    @PostMapping("/logout")
    public String logout(HttpServletRequest request, Model model){
        boolean loggedOut = userService.logout(request);
        if(loggedOut){
            model.addAttribute("message", "You have been logged out.");
        }else{
            model.addAttribute("error", "You are not signed in.");
        }
        return "login";
    }
}
