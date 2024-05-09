import styled from "styled-components";

export const sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  width: 265px;
  height: 100vh;
  background: var(--White, #fff);
  box-shadow: 1px -3px 4px 1px rgba(0, 0, 0, 0.25);
`;
export const Logo = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
    height: 30px;
  }
`;
export const sidecontext = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
`;
export const navigation = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  gap: 30px;
  align-items: center;
  flex-direction: column;
`;
export const sideprofile = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
`;
export const sideblock = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 90%;
  height: 53px;
  border-radius: 12px;
  background: #0e2764;
  cursor: pointer;
  img {
    margin-left: 40px;
    display: flex;
    width: 30px;
    height: 30px;
  }
  a {
    color: #fff;
    font-size: 22px;
    font-weight: 700;
  }
`;
