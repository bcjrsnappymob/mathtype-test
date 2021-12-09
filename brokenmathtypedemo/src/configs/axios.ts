import Axios, { AxiosRequestConfig } from 'axios';

enum HTTPStatus {
  Unauthorized = 401,
}

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 20000, // 20 seconds
  withCredentials: true,
};

const axiosInstance = Axios.create(axiosConfig);
axiosInstance.interceptors.response.use(
  (response) => {
    // Response interceptor
    return response;
  },
  (error) => {
    return error.response;
  }
);

export const axios = axiosInstance;
