import styled from "styled-components";
import { theme } from "@/styles/theme";

export const login = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: ${theme.colors.Gray100};
  justify-content: center;
  align-items: center;
`;
export const LoginGroup = styled.div`
  display: flex;
  min-width: 500px;
  width: 35vw;
  height: 70vh;
  align-items: center;
  justify-content: center;
  border-radius: var(--Large, 12px);
  background: ${theme.colors.White};
  box-shadow: 4px 4px 8px 0px ${theme.colors.Gray300};
`;
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  width: 70%;
  height: 100%;
  h1 {
    text-align: center;
    color: ${theme.colors.Black};
    font-family: Assistant;
    font-size: 64px;
    font-style: normal;
    font-weight: 800;
    line-height: 130.702%;
  }
`;
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50px;
`;
export const LoginInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  color: black;
  font-family: Assistant;
  font-size: 26px;
  font-style: normal;
  font-weight: 200;
  line-height: 130.702%;
`;
export const BottomBar = styled.div`
  width: 100%;
  height: 1px;
  background: ${theme.colors.Gray400};
`;
export const KeepLoginWrap = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  input {
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid ${theme.colors.Gray600};
  }
  span {
    color: ${theme.colors.Gray600};
    font-family: Assistant;
    font-size: 15px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
    cursor: pointer;
  }
`;
export const LoginButton = styled.button`
  width: 100%;
  height: 55px;
  border-radius: 10px;
  background: ${theme.colors.Main};
  color: ${theme.colors.White};
  font-family: Assistant;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  cursor: pointer;
  &:disabled {
    background-color: #d1d1d1;
  }
`;
