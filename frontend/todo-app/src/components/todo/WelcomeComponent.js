import React, { Component } from "react";

class WelcomeComponent extends Component {
  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className="containner">Welcome {this.props.params.name}.</div>
      </>
    );
  }
}

export default WelcomeComponent;
