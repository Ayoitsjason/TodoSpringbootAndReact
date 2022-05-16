package com.in28minutes.rest.webservices.restfulwebservices.todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TodoJpaResource {
  
  @Autowired
  private TodoHardcodedService todoService;

  @Autowired
  private TodoJpaRepository todoJpaRepository;

  // Retrieve all Todos for a User
  @GetMapping("/jpa/users/{username}/todos")
  public List<Todo> getAllTodos(@PathVariable String username) {
    return todoJpaRepository.findByUsername(username);
    // return todoService.findAll();
  }

  // Update a Todo
  @GetMapping("/jpa/users/{username}/todos/{id}")
  public Todo getTodo(@PathVariable String username, @PathVariable long id) {
// Jpa findById returns an optional back, so you have to run get() to get object
    return todoJpaRepository.findById(id).get();
    //return todoService.findById(id);
  }

  // Delete a Todo of a user
  @DeleteMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
      // Todo todo = todoService.deleteById(id);
      // if (todo!=null) {
      //   return ResponseEntity.noContent().build();
      // }
      todoJpaRepository.deleteById(id);
      return ResponseEntity.noContent().build();
      // ResponseEntity lets us build specific request and status
      // Not found returns 404
      // return ResponseEntity.notFound().build();
    }
 
    // Edit a Todo
    @PutMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo) {
      todo.setUsername(username);
      
      todoJpaRepository.save(todo);
      // We could return a Todo object but passing back a ResponseEntity Gives us more future options to return something else
      return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }

    // Create a new Todo
    @PostMapping("/jpa/users/{username}/todos")
    public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todo todo) {
      todo.setUsername(username);

      Todo createdTodo = todoJpaRepository.save(todo);      

      // Location
      // Get current resource url
      // {id}
      URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                        .path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
      
      // We could return a Todo object but passing back a ResponseEntity Gives us more future options to return something else
      return ResponseEntity.created(uri).build();
    }
}
