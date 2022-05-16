package com.in28minutes.rest.basic;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfigurationBasicAuth extends WebSecurityConfigurerAdapter{
  
  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
      // Disable CSRF
      .csrf().disable()
      .authorizeRequests()
      // Accept All request from options from all URLS
      .antMatchers(HttpMethod.OPTIONS,"/**").permitAll()
      // Auth all other requests
      .anyRequest().authenticated()
      // Use http basic auth
      .and().httpBasic();
  }
}
