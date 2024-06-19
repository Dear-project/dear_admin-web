import styled from "styled-components";
export const tbody = styled.tbody`
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
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgb(217, 217, 217);
  border-bottom: 1px solid rgb(217, 217, 217);
`;

export const TD = styled.td`
  text-align: start;
  padding: 12px;
  vertical-align: middle;
  width: 14%;
  font-size: 16px;
  line-height: 20px;
  overflow-x: auto;
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 4rem;
  }
`;
