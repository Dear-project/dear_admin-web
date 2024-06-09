import CONFIG  from "@/config/config.json";
import axios, { AxiosRequestConfig } from "axios";
import { requestInterceptor } from "./requestInterceptor";
import {
  REQUEST_TOKEN_KEY,
  ACCESS_TOKEN_KEY,
} from "@/constant/Token/Token.constant";
import Token from "../Token/Token";

export const apiHost = CONFIG.server;

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: apiHost,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${Token.getToken(ACCESS_TOKEN_KEY)}`,
  },
};

const dearV1Axios = axios.create(axiosRequestConfig);

dearV1Axios.interceptors.request.use(requestInterceptor, (err) => err);

export default dearV1Axios;

export const setAccessToken = (token: string) => {
  dearV1Axios.defaults.headers[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
};