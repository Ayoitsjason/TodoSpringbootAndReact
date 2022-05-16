package com.in28minutes.learning.jpa.service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import com.in28minutes.learning.jpa.entity.User;

import org.springframework.stereotype.Repository;

// This class helps us get/store users from a database

// Respository interacts with the database
@Repository
@Transactional
public class UserDAOService {
  
  // Persistence Context?
  // step1: open transaction
  // step2: entityManager.persist(obj) - adds obj to the persistence Context
  // step3: close transaction
  // Notes:
  // * If you make changes to anything that is in the persistence context then entity manager will keep track of those changes

  // Entity Manager is an interface to the Persistence Context
  @PersistenceContext
  private EntityManager entityManager;

  public long insert(User user) {
    // Open Transaction
    entityManager.persist(user);

    // Close Transaction
    return user.getId();
  }
}
/*
* Spring Data JPA (provides implementation for us and talks to Entity Manager)
* 
*
*
*/

// public class SomeEntityDAOService {

//   @PersistenceContext
//   private EntityManager entityManager;

//   public long insert(User user) {
//     entityManager.persist(user);
//     return user.getId();
//   }
// }
