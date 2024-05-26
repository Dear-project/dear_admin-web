import { AxiosRequestConfig } from "axios";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/constant/Token/Token.constant";
import token from "../Token/Token";

const requestHandler = (config: AxiosRequestConfig): AxiosRequestConfig => {
  if (token.getToken(REFRESH_TOKEN_KEY) === undefined) {
    window.location.href = "/login";
    alert("세션 만료");
    return config;
  }

  config.headers = {
    ...config.headers,
    "Content-Type": "application/json",
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
  };

  return config;
};

export default requestHandler;
