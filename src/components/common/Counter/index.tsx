import { FC } from "react";
import { CounterContainer, CounterTitle, CounterValue } from "./style";
import { parse_currency } from "../../../utils";

interface ICounter {
  value: number,
  title: string,
};

const Counter: FC<ICounter> = (props) => {
  return (
    <CounterContainer title={"Balance"}>
      <CounterTitle>{props.title}</CounterTitle>
      <CounterValue>{parse_currency("INR", props.value)}</CounterValue>
    </CounterContainer>
  );
};

export default Counter;
