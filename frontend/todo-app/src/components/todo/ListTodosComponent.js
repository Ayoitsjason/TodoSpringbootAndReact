import React, { Component } from "react";
import moment from "moment";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        // {
        //   id: 1,
        //   description: "Learn React",
        //   done: false,
        //   targetDate: new Date(),
        // },
        // {
        //   id: 2,
        //   description: "Become An Expert At React",
        //   done: false,
        //   targetDate: new Date(),
        // },
        // {
        //   id: 3,
        //   description: "Visit India",
        //   done: false,
        //   targetDate: new Date(),
        // },
      ],
      message: "",
    };
    this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
    this.refreshTodos = this.refreshTodos.bind(this);
    this.updateTodoClicked = this.updateTodoClicked.bind(this);
    this.addTodoClicked = this.addTodoClicked.bind(this);
  }

  componentDidMount() {
    this.refreshTodos();
  }

  refreshTodos() {
    let username = AuthenticationService.getLoggedInUserName();
    TodoDataService.retrieveAllTodos(username)
      .then((res) => {
        this.setState({ todo: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  deleteTodoClicked(id) {
    let username = AuthenticationService.getLoggedInUserName();
    TodoDataService.deleteTodos(username, id)
      .then((res) => {
        this.setState({ message: `Delete of todo ${id} successful` });
        this.refreshTodos();
      })
      .catch((err) => {
        this.setState({ message: "" });
        console.error(err);
      });
  }

  addTodoClicked() {
    this.props.navigate("/todos/-1");
  }

  updateTodoClicked(id) {
    this.props.navigate(`/todos/${id}`);
  }

  render() {
    return (
      <div>
        <h1>List Todos</h1>
        {this.state.message !== "" && (
          <div className="alert alert-success">{this.state.message}</div>
        )}
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                {/* <th>Id</th> */}
                <th>Description</th>
                <th>TargetDate</th>
                <th>Is Completed?</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todo.map((todo) => {
                return (
                  <tr key={todo.id}>
                    {/* <td>{todo.id}</td> */}
                    <td>{todo.description}</td>
                    <td>{moment(todo.targetDate).format("YYYY-MM-DD")}</td>
                    <td>{todo.done.toString()}</td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => this.updateTodoClicked(todo.id)}
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() => this.deleteTodoClicked(todo.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="row">
            <button className="btn btn-success" onClick={this.addTodoClicked}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ListTodosComponent;
