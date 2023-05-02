import React, { ChangeEvent, ReactNode, useReducer } from "react";

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const initial_State = {
  count: 0,
  text: "",
};

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  INPUT_VALUE,
}

type REDUCER_ACTION = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

const reducer = (
  state: typeof initial_State,
  action: REDUCER_ACTION
): typeof initial_State => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.INPUT_VALUE:
      return { ...state, text: action.payload ?? "" };
    default:
      return state;
  }
};

const UseReducer = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(reducer, initial_State);

  const incrementCounter = () => {
    dispatch({
      type: REDUCER_ACTION_TYPE.INCREMENT,
    });
  };
  const decrementCounter = () => {
    dispatch({
      type: REDUCER_ACTION_TYPE.DECREMENT,
    });
  };
  const inputHander = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.INPUT_VALUE,
      payload: e.target.value,
    });
  };

  return (
    <>
      <h2>{children(state.count)}</h2>
      <div>
        <button onClick={incrementCounter}>increment by 1</button>
        <button onClick={decrementCounter}>decrement by 1</button>
      </div>
      <input onChange={inputHander} type="text" />
      <div>
        <h1>{state.text}</h1>
      </div>
    </>
  );
};

export default UseReducer;
