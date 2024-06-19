import styled from "styled-components";

export const login = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #f4f5f9;
  justify-content: center;
  align-items: center;
`;
export const LoginGroup = styled.div`
  position: relative;
  display: flex;
  min-width: 500px;
  width: 35vw;
  height: 70vh;
  align-items: center;
  justify-content: center;
  border-radius: var(--Large, 12px);
  background: #fff;
  box-shadow: 4px 4px 8px 0px #e6e6e6;
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
    color: #000;

    font-size: 64px;
    font-style: normal;
    font-weight: 800;
    line-height: 130.702%;
  }
  h3 {
    z-index: 5;
    font-weight: 600;
    top: 160px;
    right: 100px;
    position: absolute;
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
  background: #d1d1d1;
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
    border: 1px solid #787878;
  }
  span {
    color: #787878;
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
  background: #0e2764;
  color: #fff;
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
