package com.in28minutes.learning.jpa.jpain10steps;

import java.util.List;
import java.util.Optional;

import com.in28minutes.learning.jpa.entity.User;
import com.in28minutes.learning.jpa.service.UserRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


// This command line runner runs when application starts up

// @Component - found during classpath scanning and registered in the context as a spring bean
@Component
public class UserRepositoryCommandLineRunner implements CommandLineRunner{
  
  private static final Logger log = LoggerFactory.getLogger(UserDaoServiceCommandLineRunner.class);

  // @Autowired - autowires relationships between collaborating beans, dependency injection
  @Autowired
  private UserRepository userRepository;

  @Override
  public void run(String... arg0) throws Exception {
    User user = new User("Jill", "Admin");
    userRepository.save(user);
    log.info("User is created : " + user);

    Optional<User> userWithIdOne = userRepository.findById(1L);
    log.info("User is retrieved : " + userWithIdOne);

    List<User> users = userRepository.findAll();
    log.info("All Users : " + users);

  }
}
