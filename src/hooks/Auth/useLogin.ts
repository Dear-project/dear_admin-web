import React, { FormEvent, useRef } from "react";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/constant/Token/Token.constant";
import { QueryClient } from "react-query";
import { usePostLoginMutation } from "@/queries/Auth/query";
import { usePathname, useRouter } from 'next/navigation';
import Token from "@/libs/Token/Token";

const useLogin = () => {
  const router = useRouter();
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const queryClient = new QueryClient();
  const postLoginMutation = usePostLoginMutation();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
        if (idRef.current && pwRef.current) {
            postLoginMutation.mutate(
              {
                id: idRef.current.value,
                pw: pwRef.current.value,
              }, 
              {
              onSuccess: (data) => {
            Token.setToken(ACCESS_TOKEN_KEY, data.data.accessToken);
            Token.setToken(REFRESH_TOKEN_KEY, data.data.refreshToken);
            router.push("/");
            
            
              }
        }

              )}
  };

  return {
    idRef,
    pwRef,
    handleLogin,
  };
};
export default useLogin;
