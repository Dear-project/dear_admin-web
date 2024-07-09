import styled from "styled-components";

export const MoreButtonMain = styled.div<{idx : number}>`
  position: absolute;
  top: ${({idx})=>(idx*73)}px;
  right: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 170px;
  height: 50px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.08);
`;
export const Main = styled.div`
position: absolute;
z-index: 5;
  width: 75%;
  height: 70%;
`;
export const deleteButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 90%;
  height: 50%;
  color: #f90707;
  font-size: 14px;
  font-weight: 500;
`;
export const suspensionButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 90%;
  height: 100%;
  color: #000;
  font-size: 14px;
  font-weight: 500;
  /* border-bottom: 2px solid #f4f5f9; */
`;
