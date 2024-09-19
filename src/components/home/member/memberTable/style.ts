import styled, { css } from "styled-components";
export const Tbody = styled.tbody`
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  white-space: normal;
`;
export const TR = styled.tr<{ status: boolean }>`
  width: 100%;
  height: 80px;
  display: flex;
  position: relative;
  align-items: center;
  border-bottom: 1px solid rgb(217, 217, 217);

  ${({ status }) => {
    if (!status) {
      return css`
        gap: 15%;
      `;
    }
    return css`
      justify-content: space-between;
    `;
  }}
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
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 4rem;
  }
`;
