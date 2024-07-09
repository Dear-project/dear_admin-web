import {
    REQUEST_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  ACCESS_TOKEN_KEY,
} from "@/constant/Token/Token.constant";
import Token from "../Token/Token";
import AuthRepositoryImpl from "@/repositories/AuthRepository/AuthRepositoryImpl";
import dearAxios from "./CustomAxios";
import { AxiosResponse } from "axios";


const ResponseHandler = async(response: AxiosResponse) => {
  const usingAccessToken = Token.getToken(ACCESS_TOKEN_KEY);
  const usingRefreshToken = Token.getToken(REFRESH_TOKEN_KEY);
  if (
    response.status === 401 &&
    usingAccessToken !== undefined &&
    usingRefreshToken !== undefined
  ) {
    try {
      const { data : newAccessToken} = await AuthRepositoryImpl.refreshAccessToken({
        refreshToken: usingRefreshToken,
      });
      dearAxios.defaults.headers.common[
        REQUEST_TOKEN_KEY
      ] = `Bearer ${newAccessToken}`;
      Token.setToken(ACCESS_TOKEN_KEY, newAccessToken);
      
    } catch (error) {
      window.alert("세션이 만료되었습니다.");
      Token.clearToken();
      window.location.href = "/login";
    }
  }
};
export default ResponseHandler