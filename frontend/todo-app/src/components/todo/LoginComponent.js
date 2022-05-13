import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService.js";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "username",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    //in28minutes, dummy
    e.preventDefault();
    // if (
    //   this.state.username === "username" &&
    //   this.state.password === "password"
    // ) {
    //   AuthenticationService.registerSuccessfulLogin(
    //     this.state.username,
    //     this.state.password
    //   );
    //   this.props.navigate(`/welcome/${this.state.username}`);
    //   // this.setState({ hasLoginFailed: false, showSuccessMessage: true });
    // } else {
    //   this.setState({ hasLoginFailed: true, showSuccessMessage: false });
    // }

    AuthenticationService.executeBasicAuthenticationService(
      this.state.username,
      this.state.password
    )
      .then(() => {
        AuthenticationService.registerSuccessfulLogin(
          this.state.username,
          this.state.password
        );
        this.props.navigate(`/welcome/${this.state.username}`);
      })
      .catch(() => {
        this.setState({ hasLoginFailed: true, showSuccessMessage: false });
      });
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <div className="container">
          {this.state.hasLoginFailed && (
            <div className="alert alert-warning">Invalid Credentials</div>
          )}
          {this.state.showSuccessMessage && <div>You are now logged in</div>}
        </div>
        User Name:{" "}
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={(e) => this.handleInputChange(e)}
        />
        Password:{" "}
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={(e) => this.handleInputChange(e)}
        />
        <button className="btn btn-success" onClick={this.submitForm}>
          Login
        </button>
      </div>
    );
  }
}

export default LoginComponent;
