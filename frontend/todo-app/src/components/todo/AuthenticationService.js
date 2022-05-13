import axios from "axios";

class AuthenticationService {
  executeBasicAuthenticationService(username, password) {
    let basicAuthHeader = this.createBasicAuthToken(username, password);
    return axios.get("http://localhost:8080/basicauth", {
      headers: { authorization: basicAuthHeader },
    });
  }

  createBasicAuthToken(username, password) {
    return "Basic " + window.btoa(username + ":" + password);
  }

  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem("authenticatedUser", username);
    let basicAuthHeader = this.createBasicAuthToken(username, password);
    this.setupAxiosInterceptors(basicAuthHeader);
  }

  logout() {
    sessionStorage.removeItem("authenticatedUser");
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) return false;
    return true;
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) return null;
    return user;
  }

  setupAxiosInterceptors(basicAuthHeader) {
    // let username = "username";
    // let password = "password";

    // let basicAuthHeader = "Basic " + window.btoa(username + ":" + password);

    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = basicAuthHeader;
      }
      return config;
    });
  }
}

export default new AuthenticationService();
