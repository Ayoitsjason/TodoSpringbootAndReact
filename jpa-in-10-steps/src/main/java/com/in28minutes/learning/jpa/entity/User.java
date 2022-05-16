package com.in28minutes.learning.jpa.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

// Table - User
// Entity - Java persists to a database

@Entity
public class User {

  // Sets primary key
  @Id
  // Generates value
  @GeneratedValue
  private long id;
  
  private String name;
  private String role;
  
  protected User() {

  }

  public User(String name, String role) {
    this.name = name;
    this.role = role;
  }

  public long getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public String getRole() {
    return role;
  }

  @Override
  public String toString() {
    return "User [id=" + id + ", name=" + name + ", role=" + role + "]";
  }


  
}
