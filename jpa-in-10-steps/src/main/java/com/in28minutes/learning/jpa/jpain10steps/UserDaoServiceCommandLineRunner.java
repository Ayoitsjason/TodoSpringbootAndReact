package com.in28minutes.learning.jpa.jpain10steps;

import com.in28minutes.learning.jpa.entity.User;
import com.in28minutes.learning.jpa.service.UserDAOService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

// This command line runner runs when application starts up

// @Component - found during classpath scanning and registered in the context as a spring bean
@Component
public class UserDaoServiceCommandLineRunner implements CommandLineRunner{
  
  private static final Logger log = LoggerFactory.getLogger(UserDaoServiceCommandLineRunner.class);

  // @Autowired - autowires relationships between collaborating beans, dependency injection
  @Autowired
  private UserDAOService userDaoService;

  @Override
  public void run(String... arg0) throws Exception {
    User user = new User("Jack", "Admin");
    long insert = userDaoService.insert(user);
    log.info("New User is created : " + user);
  }
}
