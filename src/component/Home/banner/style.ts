import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const bannerListArea = styled.div`
  display: flex;
  margin-left: 10px;
  width: 100%;
  height: 90%;
  justify-content: center;
`;
export const bannerSubmitArea = styled.div`
  display: flex;
  height: 90%;
  width: 100%;
`;
export const bannerList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 400px;
  width: 80%;
  height: 100%;
  border: 3px solid #f1f1f1;
  border-radius: 20px;
  background-color: #fff;
  overflow: hidden;
  span:nth-child(1) {
    display: flex;
    margin-left: 30px;
    align-items: center;
    width: 100%;
    height: 70px;
    color: var(--Black, #000);
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 119.246%;
  }
`;
export const bannerOverList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  height: 200vh;
  gap: 30px;
`;
export const bannerFrom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 400px;
  width: 80%;
  height: 332px;
  border-radius: 20px;
  background: #fff;
  border: 3px solid #f1f1f1;
`;
