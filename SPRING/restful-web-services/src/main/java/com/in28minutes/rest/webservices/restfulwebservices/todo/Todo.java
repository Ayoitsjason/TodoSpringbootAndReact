package com.in28minutes.rest.webservices.restfulwebservices.todo;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

// Creates an Entity for database
@Entity
public class Todo {

  // Uses id for key
  @Id
  // Auto generated value for us
  @GeneratedValue
  private Long id;
  private String username;
  private String description;
  private Date targetDate;
  private boolean isDone;

  protected Todo() {

  }
  
  public Todo(long id, String username, String description, Date targetDate, boolean isDone) {
    this.id = id;
    this.username = username;
    this.description = description;
    this.targetDate = targetDate;
    this.isDone = isDone;
  }

  public Long getId() {
    return id;
  }
  public void setId(Long id) {
    this.id = id;
  }
  public String getUsername() {
    return username;
  }
  public void setUsername(String username) {
    this.username = username;
  }
  public String getDescription() {
    return description;
  }
  public void setDescription(String description) {
    this.description = description;
  }
  public Date getTargetDate() {
    return targetDate;
  }
  public void setTargetDate(Date targetDate) {
    this.targetDate = targetDate;
  }
  public boolean isDone() {
    return isDone;
  }
  public void setDone(boolean isDone) {
    this.isDone = isDone;
  }
  public boolean equals(Object obj) {
    if (this == obj)
      return true;
    if (obj == null)
      return false;
    if (getClass() != obj.getClass())
      return false;
    Todo other = (Todo) obj;
    if (id != other.id)
      return false;
    return true;
  }
}
