import axios from "axios";

export const instance = axios.create({
  baseURL: "http://ec2-52-79-202-92.ap-northeast-2.compute.amazonaws.com:3000",
  timeout: 10000,
});

class ApiAgent {
  static async get(url, data, code) {
    const { data: response } = await instance.get(url, {
      headers: {
        "X-API-Key": code,
      },
      params: {
        ...data,
      },
    });
    return response;
  }
  static async post(url, data, code) {
    return await instance.post(url, data, {
      headers: {
        "X-API-Key": code,
      },
    });
  }
  static async delete(url, data, code) {
    return await instance.delete(url, {
      headers: {
        "X-API-Key": code,
      },
    });
  }
  static async patch(url, data, code) {
    return await instance.patch(url, data, {
      headers: {
        "X-API-Key": code,
      },
    });
  }
}

export default ApiAgent;
