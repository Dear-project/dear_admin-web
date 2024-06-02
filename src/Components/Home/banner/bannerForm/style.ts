import styled from "styled-components";

export const bannerMain = styled.form`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 90%;
  height: 90%;
`;
export const bannerBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 156px;
  height: 55px;
  span {
    width: 77px;
    height: 25px;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
export const bannerInput = styled.input`
  display: flex;
  width: 100%;
  height: 25px;
  border-radius: 5px;
  border: 1px solid var(--Gray300, #e6e6e6);
  background: var(--White, #fff);
  color: var(--Gray400, #d1d1d1);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  outline: none;
`;
export const bannerFileLabel = styled.label`
  width: 80px;
  height: 25px;

  font-size: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #7c7c7c;
  background: #ffffff;
  cursor: pointer;
  border: 1px solid #ebebeb;
  border-radius: 3px;
`;
export const bannerSubmit = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 98px;
  height: 30px;
  cursor: pointer;
  border-radius: 5px;
  background: #0e2764;
  color: white;
  border: none;
  bottom: 5px;
  right: 23px;
`;
