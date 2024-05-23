import styled,{css} from "styled-components";

export const sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  min-width: 265px;
  height: 100vh;
  background: var(--White, #fff);
  box-shadow: 1px -3px 4px 1px rgba(0, 0, 0, 0.25);
`;
export const Logo = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
    height: 30px;
  }
`;
export const sidecontext = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
export const navigation = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  gap: 30px;
  align-items: center;
  flex-direction: column;
  a{
    display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 90%;
  height: 53px;
  border-radius: 12px;

  }
`;
export const sideprofile = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
`;
export const sideblock = styled.div<{isSelect: boolean}>`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 90%;
  height: 53px;
  border-radius: 12px;
  background:  ${({ isSelect }) => (isSelect ? "#0e2764" : "white")};

  cursor: pointer;
  
  img {
    margin-left: 40px;
    display: flex;
    width: 30px;
    height: 30px;
  }
  span {
    font-size: 22px;
    font-weight: 700;
    color: ${({isSelect})=>(isSelect ? "white" : "#0e2764")};
  }
`;
