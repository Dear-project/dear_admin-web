import axios from "axios";
import { LoginResponse } from "src/types/Auth/login.types";
import { LoginParam } from "./AuthRepository";
import config from "src/config/config.json";

class AuthRepository  implements AuthRepository{
  public async login(loginData: LoginParam): Promise<LoginResponse> {
    const { data } = await axios.post(`${config.server}/sign-in`, loginData);
    return data;
  }
}

export default new AuthRepository();
