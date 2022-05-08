import React, { Component } from "react";
import FirstComponent from "./components/learning-examples/FirstComponent.js";
import SecondComponent from "./components/learning-examples/SecondComponent.js";
import ThirdComponent from "./components/learning-examples/ThirdComponent.js";
import Counter from "./components/counter/Counter.js";
import TodoApp from "./components/todo/TodoApp.js";
import "./App.css";
import "./bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        <TodoApp />
      </div>
    );
  }
}

class LearningComponent extends Component {
  render() {
    return (
      <div className="LearningComponents">
        Hello World
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    );
  }
}

export default App;
