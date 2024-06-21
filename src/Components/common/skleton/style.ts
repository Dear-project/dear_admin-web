import styled, { keyframes } from "styled-components";

const shimmerAnimation = keyframes`
  0% {
    background-position: 100% 0%;
  }
  50% {
    background-position: 0% 100%;
  }
  100% {
    background-position: 100% 0%;
  }
`;

export const BusSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-top: 14px;
`;

export const BusSkeletonItem = styled.div<{ height: number }>`
  width: 100%;
  height: ${(props) => props.height}px;
  ${shimmerAnimation}
`;
