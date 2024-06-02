import token from "src/libs/Token/Token";


const useLogout = () => {

  const logOut = () => {
    window.location.href = "/login"
    token.clearToken();
    
  };

  return { logOut };
};

export default useLogout;