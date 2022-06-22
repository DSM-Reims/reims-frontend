import axios from "axios";

export const instance = axios.create({
  baseURL: "http://ec2-3-39-190-171.ap-northeast-2.compute.amazonaws.com:3000",
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
