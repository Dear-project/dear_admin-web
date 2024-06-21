import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 600px;
  width: 100%;
  height: 100vh;
`;
export const Direction = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 100%;
`;
export const searchBox = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
`;
export const DirectionMain = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

