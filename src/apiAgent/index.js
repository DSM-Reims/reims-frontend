import axios from "axios";

export const instance = axios.create({
  baseURL: "",
  timeout: 1000,
});

class ApiAgent {
  static get(url, data, code) {
    instance.get(url, data, {
      headers: {
        "X-API-Key": code,
      },
    });
  }
  static post(url, data, code) {
    instance.post(url, data, {
      headers: {
        "X-API-Key": code,
      },
    });
  }
}

export default ApiAgent;
