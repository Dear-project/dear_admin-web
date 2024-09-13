import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 600px;
  width: 100%;
  height: 100%;
`;

export const PendingMember = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 100%;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 200px;
  gap: 20px;
`;

export const PendingMemberMain = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  border-bottom: 1px rgb(217, 217, 217);
`;

export const PendingMemberList = styled.table`
  display: flex;
  width: 100%;
  height: 100%;
`;
