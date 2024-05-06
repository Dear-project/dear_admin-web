import { ChangeEvent, FormEvent, useRef } from "react";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/constant/Token/Token.constant";
import { useRouter } from "next/navigation";
// import { usePostLoginMutation } from "src/queries/Auth/queries";
import Token from "@/libs/Token/Token";
import axios from "axios";
import  config from "@/config/config.json";
import {LoginResponse} from "src/types/Auth/login.types"

const useLogin = () => {
  const router = useRouter();
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  // const postLoginMutation = usePostLoginMutation();
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };
  
  const handleLogin = async() => {
    // e.preventDefault();
    if (idRef.current && pwRef.current) {

      await axios.post(`${config.server}/auth`,
        {
          email: idRef.current.value,
          password: pwRef.current.value,
        }).then((res)=>{
          Token.setToken(ACCESS_TOKEN_KEY, res.data.accessToken);
          Token.setToken(REFRESH_TOKEN_KEY, res.data.refreshToken);
          router.push("/");
        })
    }
  };

  return {
    idRef,
    pwRef,
    handleLogin,
    handleKeyDown,
  };
};

export default useLogin;
