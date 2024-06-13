import styled from "styled-components";

export const BannerArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 76px;
`;
export const Bannerinfo = styled.div`
  display: flex;
  width: 85%;
  align-items: center;
  justify-content: space-evenly;
  border-radius: var(--Large, 12px);
  background: var(--Gray200, #f1f1f1);
`;
export const BannerTitle = styled.div`
  display: flex;
  span {
    margin: 0 !important;
  }
  width: 40px;
  height: 100%;
`;
export const BannerImg = styled.div`
  display: flex;
  width: 150px;
  height: 80%;
  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const BannerDeleteButton = styled.button`
  width: 60px;
  height: 23px;
  border-radius: 15px;
  background: var(--New, #0e2764);
  color: #fff;
  border: none;
  cursor: pointer;
`;
