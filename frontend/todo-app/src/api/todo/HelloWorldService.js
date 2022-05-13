import axios from "axios";

class HelloWorldService {
  executeHelloWorldBeanService() {
    return axios.get(`http://localhost:8080/hello-world-bean`);
  }

  executeHelloWorldService() {
    return axios.get(`http://localhost:8080/hello-world`);
  }

  executeHelloWorldPathVariableService(variable) {
    let username = "username";
    let password = "dummy";

    let basicAuthHeader = "Basic " + window.btoa(username + ":" + password);
    const config = {
      headers: {
        authorization: basicAuthHeader,
      },
    };
    return axios.get(
      `http://localhost:8080/hello-world/path-variable/${variable}`,
      config
    );
  }
}

export default new HelloWorldService();
