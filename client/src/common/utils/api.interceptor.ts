import axios from "axios";
import tokenService from "./tokenService";

const api = axios.create({
  baseURL: "/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("token") || "{}");
    if (token.access) {
      config.headers["Authorization"] = `Bearer ${token.access}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const config = err.config;
    if (
      (config.url !== "/api/v1/auth/jwt/create/" ||
        config.url !== "/api/v1/auth/jwt/refresh/") &&
      err.response
    ) {
      if (err.response.status === 401 && !config._retry) {
        config._retry = true;

        try {
          await tokenService.refreshToken();
          return api(config);
        } catch (error) {
          return Promise.reject(error);
        }
      }
    }
    return Promise.reject(err);
  }
);

export default api;
