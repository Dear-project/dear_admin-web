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

const dearAxios = axios.create(axiosRequestConfig);

dearAxios.interceptors.request.use(requestInterceptor, (err) => err);
dearAxios.interceptors.response.use((res)=>res, )
export default dearAxios;

export const setAccessToken = (token: string) => {
  dearAxios.defaults.headers[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
};

