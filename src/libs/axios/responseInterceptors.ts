import {
    REQUEST_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  ACCESS_TOKEN_KEY,
} from "@/constant/Token/Token.constant";
import Token from "../Token/Token";
import AuthRepositoryImpl from "@/repositories/AuthRepository/AuthRepositoryImpl";
import dearAxios from "./CustomAxios";
import { AxiosResponse } from "axios";

let isRefreshing = false;

let refreshSubscribers: ((accessToken: string) => void)[] = [];

const onTokenRefreshed = (accessToken: string) => {
  refreshSubscribers.map((callback) => callback(accessToken));
};

const addRefreshSubscriber = (callback: (accessToken: string) => void) => {
  refreshSubscribers.push(callback);
};

const ResponseHandler = async(response: AxiosResponse) => {
  const usingAccessToken = Token.getToken(ACCESS_TOKEN_KEY);
  const usingRefreshToken = Token.getToken(REFRESH_TOKEN_KEY);
  const originalRequest = response.config
  if (
    response.status === 401 &&
    usingAccessToken !== undefined &&
    usingRefreshToken !== undefined
  ) {
    if (!isRefreshing){

      isRefreshing = true;
      try {
        const { data : newAccessToken} = await AuthRepositoryImpl.refreshAccessToken({
          refreshToken: usingRefreshToken,
        });
        dearAxios.defaults.headers.common[
          REQUEST_TOKEN_KEY
        ] = `Bearer ${newAccessToken}`;
        Token.setToken(ACCESS_TOKEN_KEY, newAccessToken);
        
        isRefreshing = false;
        onTokenRefreshed(newAccessToken);
      } catch (error) {
        window.alert("세션이 만료되었습니다.");
        Token.clearToken();
        window.location.href = "/login";
      }
      return new Promise((resolve) => {
        addRefreshSubscriber((accessToken: string) => {
          originalRequest.headers![REQUEST_TOKEN_KEY] = `Bearer ${accessToken}`;
          resolve(dearAxios(originalRequest));
        });
      });
    }
   
  }
  return Promise.reject(response);
};
export default ResponseHandler