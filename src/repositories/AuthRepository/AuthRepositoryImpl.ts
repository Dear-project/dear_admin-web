import axios from "axios";
import { LoginResponse } from "src/types/Auth/login.types";
import { Login } from "./AuthRepository";
import config from "src/config/config.json";

class AuthRepository  implements AuthRepository{
  public async login(loginData: Login): Promise<LoginResponse> {
    const { data } = await axios.post(`${config.server}/auth`, loginData);
    return data;
  }
}

export default new AuthRepository();
