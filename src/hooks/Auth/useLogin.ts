import { FormEvent, useRef } from "react";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/constant/Token/Token.constant";
import { useRouter } from "next/navigation";
import { usePostLoginMutation } from "src/queries/Auth/queries";
import Token from "@/libs/Token/Token";
import { showToast } from "@/libs/Toast/swal";

const useLogin = () => {
  const router = useRouter();
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const postLoginMutation = usePostLoginMutation();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin(e);
    }
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    if (idRef.current && pwRef.current) {
      postLoginMutation.mutate(
        {
          email: idRef.current.value,
          password: pwRef.current.value,
        },
        {
          onSuccess: (data) => {
            router.push("/");
            Token.setToken(ACCESS_TOKEN_KEY, data.data.accessToken);
            Token.setToken(REFRESH_TOKEN_KEY, data.data.refreshToken);
          },
          onError: () => {
            showToast("error", "로그인 실패");
          },
        },
      );
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
