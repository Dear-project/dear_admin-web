import AuthRepositoryImpl from "@/repositories/AuthRepository/AuthRepositoryImpl";
import { useMutation } from "@tanstack/react-query";

export const usePostLoginMutation = () => {
  const mutation = useMutation({
    mutationFn: AuthRepositoryImpl.login,
  });
  return mutation;
};

// export const usePostSignupMutation = () => {
//   const mutation = useMutation(AuthRepositoryImpl.signupStudent);
//   return mutation;
// };
