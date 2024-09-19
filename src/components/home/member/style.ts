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
export const selectBox = styled.div`
  display: flex;
  gap: 0px;
  -webkit-box-pack: start;
  justify-content: start;
  align-items: flex-start;
  flex-direction: row;
`
export const selectMain = styled.select`
    width: 100px;
    height: 35px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 8px;
    border: 1px solid rgb(222, 226, 230);
    border-radius: 5px;
    position: relative;
    column-gap: 15px;
    cursor: pointer;
    margin-bottom: 32px;
    :focus{
      outline: none;
    }
`

export const headerBox = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 200px;
  gap: 20px;
`;
export const memberMain = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const memberList = styled.table`
  display: flex;
  width: 100%;
  height: 100%;
`;
