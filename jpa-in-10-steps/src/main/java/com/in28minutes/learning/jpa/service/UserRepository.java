package com.in28minutes.learning.jpa.service;

import com.in28minutes.learning.jpa.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;

// Interface that uses Jpa to implement methods to talk to EntityManager (common abstraction)
// We have to pass JpaRespository the context and key
public interface UserRepository extends JpaRepository<User, Long> {
  
}
