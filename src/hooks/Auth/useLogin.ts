import React, { FormEvent, useRef } from "react";


const useLogin = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
//     if (idRef.current && pwRef.current) {
//         postLoginMutation.mutate(
//           {
//             id: idRef.current.value,
//             pw: pwRef.current.value,
//           },
          
//           }
  };

  return {
    idRef,
    pwRef,
    handleLogin,
  };
};
export default useLogin;
