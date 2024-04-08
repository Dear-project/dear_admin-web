"use client";
import React, { ChangeEvent, useState } from "react";

import * as S from "./style";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    alert(email);
    alert(password);
  };

  return (
    <S.login>
      <S.LoginGroup>
        <S.LoginForm onSubmit={handleLogin}>
          <h1>DEAR.</h1>

          <S.InputBox>
            <S.LoginInput
              type="email"
              placeholder="이메일"
              value={email}
              onChange={handleEmailChange}
            />
            <S.BottomBar></S.BottomBar>
          </S.InputBox>
          <S.InputBox>
            <S.LoginInput
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={handlePasswordChange}
            />
            <S.BottomBar></S.BottomBar>
          </S.InputBox>
          <S.KeepLoginWrap>
            <input type="checkbox" />
            <span>로그인 유지</span>
          </S.KeepLoginWrap>
          <S.LoginButton type="submit">로그인</S.LoginButton>
        </S.LoginForm>
      </S.LoginGroup>
    </S.login>
  );
};

export default LoginPage;
