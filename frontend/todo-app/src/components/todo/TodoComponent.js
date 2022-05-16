import React, { Component } from "react";
import moment from "moment";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.params.id,
      description: "",
      targetDate: moment(new Date()).format("YYYY-MM-DD"),
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "-1") return;

    const username = AuthenticationService.getLoggedInUserName();
    const { id } = this.state;
    TodoDataService.retrieveTodo(username, id)
      .then((res) =>
        this.setState({
          description: res.data.description,
          targetDate: moment(res.data.targetDate).format("YYYY-MM-DD"),
        })
      )
      .catch((err) => console.error(err));
  }

  validate(values) {
    let errors = {};
    if (!values.description) {
      errors.description = "Enter a Description";
    } else if (values.description.length < 5) {
      errors.description = "Enter at least 5 Characters in Description";
    }

    if (!moment(values.targetDate).isValid()) {
      errors.targetDate = "Enter a valid target date";
    }
    return errors;
  }

  onSubmit(values) {
    const username = AuthenticationService.getLoggedInUserName();
    const { id } = this.state;
    const todo = {
      id: id,
      description: values.description,
      targetDate: values.targetDate,
    };
    if (id === "-1") {
      TodoDataService.createTodo(username, todo)
        .then(() => {
          this.props.navigate("/todos");
        })
        .catch((err) => console.error(err));
    } else {
      TodoDataService.updateTodo(username, id, todo)
        .then(() => {
          this.props.navigate("/todos");
        })
        .catch((err) => console.error(err));
    }
  }

  render() {
    let { description, targetDate } = this.state;
    return (
      <div>
        <h1>Todo</h1>
        <div className="container">
          <Formik
            initialValues={{ description, targetDate }}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={this.onSubmit}
            validate={this.validate}
            enableReinitialize={true}
          >
            {(props) => (
              <Form>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="alert alert-warning"
                />
                <ErrorMessage
                  name="targetDate"
                  component="div"
                  className="alert alert-warning"
                />
                <fieldset className="form-group">
                  <label>Description</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="description"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label>Target Date</label>
                  <Field
                    className="form-control"
                    type="date"
                    name="targetDate"
                  />
                </fieldset>
                <button className="btn btn-success" type="submit">
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default TodoComponent;
