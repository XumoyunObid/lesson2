import axios from "axios";
import { loadState } from "../lib/Storage";
const request = axios.create({ baseURL: "http://localhost:3000" });

request.interceptors.request.use(
  (config) => {
    const token = loadState("user");
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token?.accessToken}`,
    };
    return config;
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => {
    if(response.status == 401) {
      return (window.location.pathname = "/")
    }
    return response
  },
  (error) => Promise.reject(error?.response?.data)
);
export { request };
