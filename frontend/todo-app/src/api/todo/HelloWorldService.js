import axios from "axios";

class HelloWorldService {
  executeHelloWorldBeanService() {
    return axios.get(`http://localhost:8080/hello-world-bean`);
  }

  executeHelloWorldService() {
    return axios.get(`http://localhost:8080/hello-world`);
  }

  executeHelloWorldPathVariableService(variable) {
    return axios.get(
      `http://localhost:8080/hello-world/path-variable/${variable}`
    );
  }
}

export default new HelloWorldService();
