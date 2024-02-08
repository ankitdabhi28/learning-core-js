/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

axios.interceptors.request.use(async (config) => {
  console.log(
    "process.env.BASE_URL",
    process.env?.REACT_APP_BASENAME,
    process.env
  );
  config.baseURL = process.env.REACT_APP_BASENAME;
  return config;
});

// axios.interceptors.request.use(async (config) => {
//     const accessToken = localStorage.getItem("accessToken");
//     config.baseURL = process.env.BASE_URL;
//     config.headers.Authorization = `Bearer ${accessToken}`;
//     return config;
//   });

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  del: axios.delete,
};
