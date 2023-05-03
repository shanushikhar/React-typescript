import { ReactNode } from "react";

import { useCounterHook, useTextHook } from "./useContext";

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const UseReducer = ({ children }: ChildrenType) => {
  const { count, incrementCounter, decrementCounter } = useCounterHook();
  const { text, inputHander } = useTextHook();

  return (
    <>
      <h2>{children(count)}</h2>
      <div>
        <button onClick={incrementCounter}>increment by 1</button>
        <button onClick={decrementCounter}>decrement by 1</button>
      </div>
      <input onChange={inputHander} type="text" />
      <div>
        <h1>{text}</h1>
      </div>
    </>
  );
};

export default UseReducer;
