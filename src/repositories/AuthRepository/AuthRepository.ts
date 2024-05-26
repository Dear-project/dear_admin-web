import {  LoginResponse } from "src/types/Auth/login.types";

export interface AuthRepository {
  login(loginData: Login): Promise<LoginResponse>;
}

export interface Login {
  email: string;
  password: string;
}
