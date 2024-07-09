import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/constant/Token/Token.constant";
import { InternalAxiosRequestConfig } from "axios";
import Token from "../Token/Token";

export const requestInterceptor = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  if (typeof window !== "undefined") {
    if (
      Token.getToken(ACCESS_TOKEN_KEY) === undefined ||
      Token.getToken(REFRESH_TOKEN_KEY) === undefined
    ) {
      window.location.href = "/login";
    } else {
      config.headers[REQUEST_TOKEN_KEY] = `Bearer ${Token.getToken(
        ACCESS_TOKEN_KEY
      )}`;
    }
  }

  return config;
};
