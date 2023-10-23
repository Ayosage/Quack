package com.example.twitterspringlaunch.repository;

import com.example.twitterspringlaunch.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findUserByUsername(String username);

}
