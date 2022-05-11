import React from "react";
import axios from "axios";

class TodoDataService {
  retrieveAllTodos(name) {
    return axios.get(`http://localhost:8080/users/${name}/todos`);
  }
  deleteTodos(name, id) {
    return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
  }
  updateTodos(name, id) {
    return axios.put(`http://localhost:8080/users/${name}/todos/${id}`);
  }
}

export default new TodoDataService();
