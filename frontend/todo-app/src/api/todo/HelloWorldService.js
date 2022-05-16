import axios from "axios";
import { API_URL } from "../../Constants.js";

class HelloWorldService {
  executeHelloWorldBeanService() {
    return axios.get(`${API_URL}/hello-world-bean`);
  }

  executeHelloWorldService() {
    return axios.get(`${API_URL}/hello-world`);
  }

  executeHelloWorldPathVariableService(variable) {
    // let username = "username";
    // let password = "password";

    // let basicAuthHeader = "Basic " + window.btoa(username + ":" + password);
    // const config = {
    //   headers: {
    //     Authorization: basicAuthHeader,
    //   },
    // };
    return axios.get(`${API_URL}/hello-world/path-variable/${variable}`);
  }
}

export default new HelloWorldService();
