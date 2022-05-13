import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRoute.js";
import LoginComponent from "./LoginComponent.js";
import ListTodosComponent from "./ListTodosComponent.js";
import HeaderComponent from "./HeaderComponent.js";
import LogoutComponent from "./LogoutComponent.js";
import FooterComponent from "./FooterComponent.js";
import WelcomeComponent from "./WelcomeComponent.js";
import TodoComponent from "./TodoComponent.js";

class TodoApp extends Component {
  render() {
    const LoginComponentWithNavigate = withNavigation(LoginComponent);
    const WelcomeComponenetWithParams = withParams(WelcomeComponent);
    const HeaderComponentWithNAvigation = withNavigation(HeaderComponent);
    const ListTodosComponentWithNavigate = withNavigation(ListTodosComponent);
    const TodoComponentWithParamsAndNavigation = withParams(
      withNavigation(TodoComponent)
    );
    return (
      <div className="TodoApp">
        <Router>
          <HeaderComponentWithNAvigation />
          <Routes>
            <Route path="/" element={<LoginComponentWithNavigate />} />
            <Route path="/login" element={<LoginComponentWithNavigate />} />
            <Route
              path="/welcome/:name"
              element={
                <AuthenticatedRoute>
                  <WelcomeComponenetWithParams />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/todos"
              element={
                <AuthenticatedRoute>
                  <ListTodosComponentWithNavigate />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/todos/:id"
              element={
                <AuthenticatedRoute>
                  <TodoComponentWithParamsAndNavigation />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/logout"
              element={
                <AuthenticatedRoute>
                  <LogoutComponent />
                </AuthenticatedRoute>
              }
            />
            <Route path="*" element={<ErrorComponent />} />
          </Routes>
          <FooterComponent />
        </Router>
        {/* <LoginComponent />
        <WelcomeComponent /> */}
      </div>
    );
  }
}

function withNavigation(Component) {
  return (props) => <Component {...props} navigate={useNavigate()} />;
}

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

const ErrorComponent = () => {
  return (
    <div>An Error Occured. I don't know what to do. Please contact admin.</div>
  );
};

export default TodoApp;
