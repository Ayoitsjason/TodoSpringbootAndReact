import React, { Component } from "react";
import HelloWorldService from "../../api/todo/HelloWorldService";

class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    this.handleError = this.handleError.bind(this);
    this.state = {
      welcomeMessage: "",
      errorMessage: "",
      error: false,
    };
  }
  render() {
    return (
      <>
        {this.state.error && <h2>{this.state.errorMessage}</h2>}
        <h1>Welcome!</h1>
        <div className="containner">Welcome {this.props.params.name}.</div>
        <div className="containner">
          Click here to get a customized welcome message.
          <button
            onClick={this.retrieveWelcomeMessage}
            className="btn btn-success"
          >
            Get Welcome Message
          </button>
        </div>
        <div className="container">{this.state.welcomeMessage}</div>
      </>
    );
  }

  retrieveWelcomeMessage() {
    // HelloWorldService.executeHelloWorldService()
    //   .then((response) => this.handleSuccessfulResponse(response))
    //   .catch((err) => {
    //     console.error("error");
    //   });
    // HelloWorldService.executeHelloWorldBeanService()
    //   .then((response) => this.handleSuccessfulResponse(response))
    //   .catch((err) => {
    //     console.error(err);
    //   });
    HelloWorldService.executeHelloWorldPathVariableService(
      this.props.params.name
    )
      .then((response) => this.handleSuccessfulResponse(response))
      .catch((err) => {
        this.handleError(err);
      });
  }

  handleSuccessfulResponse(response) {
    this.setState({ error: false, welcomeMessage: response.data.message });
  }

  handleError(error) {
    let errorMessage = "";
    if (error.message) {
      errorMessage += error.message;
    }
    if (error.response && error.response.data) {
      errorMessage += error.response.data.message;
    }
    this.setState({ error: true, errorMessage });
  }
}

export default WelcomeComponent;
