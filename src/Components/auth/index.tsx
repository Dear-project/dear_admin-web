import useLogin from "@/hooks/Auth/useLogin";
import * as S from "src/components/Auth/style";

const LoginPage = () => {
  const { idRef, pwRef, ...login } = useLogin();

  return (
    <S.login>
      <S.LoginGroup>
        <S.LoginForm onSubmit={login.handleLogin}>
          <h1>DEAR.</h1>
          <S.InputBox>
            <S.LoginInput type="email" placeholder="이메일" ref={idRef} onKeyDown={login.handleKeyDown} />
            <S.BottomBar></S.BottomBar>
          </S.InputBox>
          <S.InputBox>
            <S.LoginInput type="password" placeholder="비밀번호" ref={pwRef} onKeyDown={login.handleKeyDown}/>
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
