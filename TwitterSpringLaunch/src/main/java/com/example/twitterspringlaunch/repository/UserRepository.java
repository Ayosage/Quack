package com.example.twitterspringlaunch.repository;

import com.example.twitterspringlaunch.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Integer> {

    @Query("select u from User u where u.username = :username")
    User findByUsername(@Param("username") String username);

}
