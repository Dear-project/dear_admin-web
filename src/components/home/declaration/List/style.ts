import styled from "styled-components";

export const DeclarationThead = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 130px;
  padding: 10px;
  border-bottom: 1px solid #d1d1d1;
`;
export const Title = styled.div`
  width: 100%;
  height: 20px;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;
export const ContentMain = styled.div`
  
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
`;
export const Content = styled.div`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  height: 48px;
`;
export const Date = styled.div`
  display: flex;
  width: 200px;
  height: 20px;
`;
export const DirectionList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px 10px;
`;

export const directionRejectButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 5;
  cursor: pointer;
  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 4rem;
    
  }
`;

export const NoneDeclarationWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10%;

  width: 100%;
  height: 100%;

  margin-bottom: 10%;
`
