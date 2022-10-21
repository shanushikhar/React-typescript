import React, { useReducer } from "react";

type useReducerTypes = {
  counter: number;
};

type actionTypes = {
  type: string;
  payload: number;
};

const initialValue = {
  counter: 0,
};

const reducerFunc = (state: useReducerTypes, action: actionTypes) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + action.payload };

    case "decrement":
      return { counter: state.counter - action.payload };

    default:
      return state;
  }
};

export default function Counter() {
  const [currentVal, dispatch] = useReducer(reducerFunc, initialValue);

  return (
    <>
      <section>Count value is {currentVal.counter}</section>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement
      </button>
    </>
  );
}
