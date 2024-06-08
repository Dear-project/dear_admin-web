import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 600px;
  width: 100%;
  height: 100vh;
`;
export const member = styled.div`
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
export const memberMain = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export const memberList = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
export const memberThead = styled.thead`
  width: 100%;
  height: 50px;
  border-top: 1px solid rgb(222, 226, 230);

`;
export const memberTableTr = styled.tr`
  width: 100%;
  height: 50px;
  font-size: 17px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.5px solid rgb(220, 221, 222);
  border-bottom: 1px solid rgb(220, 221, 222);
`;
export const TH = styled.th`
    padding: 12px;
    text-align: start;
    width: 10.5%;
`