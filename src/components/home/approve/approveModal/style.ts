import { theme } from "@/styles/theme";
import styled from "styled-components";

export const ApproveModalWrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 0;
  top: 0;

  background: rgba(0, 0, 0, 0.25);
  z-index: 5;
`;

export const Main = styled.div`
  position: relative;
  width: 60%;
  height: 80%;

  background: white;

  border: none;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.div`
  font-family: Pretendard;
  font-size: 25px;
`;

export const InputWrap = styled.div`
  width: 60%;
  height: 5%;

  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;

export const Description = styled.span`
  font-family: Pretendard;
  font-size: 18px;

  display: flex;
`;

export const Input = styled.input`
  width: 60%;
  height: 90%;
  border: none;
  border-bottom: 1px solid #000;

  font-family: Pretendard;
  font-size: 16px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: grey;
  }
`;

export const Button = styled.button`
  width: 50%;
  height: 7%;
  border: none;
  border-radius: 16px;

  background-color: #0e2764;
  color: white;
  font-size: 18px;
`;
