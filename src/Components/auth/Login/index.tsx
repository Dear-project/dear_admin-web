"use client";
import { ChangeEvent } from "react";
import * as S from "../style";

const Login = async () => {
  const inputChange = (e:ChangeEvent) => {
    
    
  };

  return (
    <S.login>
      <S.LoginGroup>
        <S.LoginMain>
          <h1>DEAR.</h1>
          <S.InputBox>
            <S.LoginInput
              placeholder="이메일"
              onChange={inputChange}
              
            ></S.LoginInput>
            <S.BottomBar></S.BottomBar>
          </S.InputBox>
          <S.InputBox>
            <S.LoginInput
              placeholder="비밀번호"
              onChange={inputChange}
            ></S.LoginInput>
            <S.BottomBar></S.BottomBar>
          </S.InputBox>
          <S.KeepLoginWrap>
            <input type="checkbox" />
            <span>로그인 유지</span>
          </S.KeepLoginWrap>
          <S.LoginButton>로그인</S.LoginButton>
        </S.LoginMain>
      </S.LoginGroup>
    </S.login>
  );
};
export default Login;
