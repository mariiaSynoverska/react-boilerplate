import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_BACKEND_URL;

const apiInstance = axios.create({
  baseURL: baseURL,
});

apiInstance.interceptors.request.use(
  config => {
    // const token = JSON.parse(window.localStorage.getItem("token"));
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
  },
  error => {
    Promise.reject(error);
  }
);

apiInstance.interceptors.response.use(
  resp => resp,
  error => {
    return Promise.reject(error);
  }
);

export default apiInstance;
