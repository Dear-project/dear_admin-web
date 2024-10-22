import styled from "styled-components";

export const TBody = styled.tbody`
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  white-space: normal;
`;

export const TR = styled.tr`
  width: 100%;
  height: 80px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgb(217, 217, 217);
  border-bottom: 1px solid rgb(217, 217, 217);
  img{
    cursor: pointer;
  }
`;

export const TD = styled.td`
  text-align: start;
  padding: 12px;
  vertical-align: middle;
  display: flex;
  justify-content: space-around;

  width: 14%;
  font-size: 16px;
  line-height: 20px;
  overflow-x: hidden;
  width: 115px;
  text-overflow: ellipsis;
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
