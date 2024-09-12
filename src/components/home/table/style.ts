import styled, { CSSObject } from "styled-components";

export const memberThead = styled.thead`
  width: 100%;
  height: 50px;
  border-top: 1px solid rgb(222, 226, 230);
  border-bottom: 1px solid rgb(220, 221, 222);
`;
export const memberTableTr = styled.tr<{ customStyle?: CSSObject }>`
  width: 83%;
  height: 50px;
  font-size: 17px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.5px solid rgb(220, 221, 222);

  ${({ customStyle }) => customStyle}
`;
export const TH = styled.th`
  padding: 12px;
  text-align: start;
  width: 10.5%;
  display: flex;
  justify-content: space-evenly;
`;
