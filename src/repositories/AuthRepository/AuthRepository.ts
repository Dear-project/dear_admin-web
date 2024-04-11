import { Login, LoginResponse } from "src/types/Auth/login.types";

export interface AuthRepository {
  login(loginData: LoginParam): Promise<LoginResponse>;
}

export interface LoginParam extends Login {}