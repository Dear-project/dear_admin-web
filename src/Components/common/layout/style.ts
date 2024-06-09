import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Wrap = styled.div<{ $isSign: boolean }>`
  width: 100%;
  height: 100%;
`;