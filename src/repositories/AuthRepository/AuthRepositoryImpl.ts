import axios from "axios";
import { AuthRepository, NewAccessTokenResponse } from "./AuthRepository";
import { LoginResponse } from "src/types/Auth/login.types";
import { Login } from "./AuthRepository";
import config from "@/config/config.json";

class AuthRepositoryImpl implements AuthRepository {
  public async login(loginData: Login): Promise<LoginResponse> {
    const { data } = await axios.post(`${config.server}/auth`, loginData);
    return data;
  }
  public async refreshAccessToken(refreshToken: {
    refreshToken: string;
  }): Promise<NewAccessTokenResponse> {
    const { data } = await axios.post<NewAccessTokenResponse>(
      `${config.server}/auth/refresh`,
      refreshToken
    );
    return data;
  }
}

export default new AuthRepositoryImpl();
