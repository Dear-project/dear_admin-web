import cookies from "../Cookies/cookies";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/constant/Token/Token.constant";

class Token {
  public getToken(
    key: typeof ACCESS_TOKEN_KEY | typeof REFRESH_TOKEN_KEY
  ): string | undefined {
    return cookies.getCookie(key);
  }
  public setToken(key: typeof ACCESS_TOKEN_KEY | typeof REFRESH_TOKEN_KEY , token: string): void {
        cookies.setCookie(key, token);
  }
  public clearToken(){
    cookies.removeCookie(ACCESS_TOKEN_KEY);
    cookies.removeCookie(REFRESH_TOKEN_KEY);
  }
}

export default new Token();