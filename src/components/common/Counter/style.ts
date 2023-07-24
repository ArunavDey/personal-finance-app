import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
`;

export const CounterContainer = styled(FlexBox)`
  flex-direction: column;
  height: 12rem;
  width: 12rem;
  border-radius: 6rem;
  background: #1d2021;
  color: #e9e0bb;
  justify-content: center;
  align-items: center;
`;

export const CounterTitle = styled.div`
  font-size: 1rem;
`;

export const CounterValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #fe8019;
`;
