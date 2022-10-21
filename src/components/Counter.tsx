import React, { useReducer } from "react";

type useReducerTypes = {
  counter: number;
};

interface updatetype {
  // if we have to pass only specific values < Strict Action type >
  type: "decrement" | "increment";
  payload: number;
}

interface resetAction {
  type: "reset";
  // if we want to pass payload as 0 then making it optional otherwise remove it
  //payload?: number;
}

// this is called Discriminated union in Ts
type actionTypes = updatetype | resetAction;

const initialValue = {
  counter: 0,
};

const reducerFunc = (state: useReducerTypes, action: actionTypes) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + action.payload };

    case "decrement":
      return { counter: state.counter - action.payload };

    case "reset":
      return initialValue;

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
      <button onClick={() => dispatch({ type: "reset" })}>
        {/* <button onClick={() => dispatch({ type: "reset", payload: 10 })}> */}
        reset
      </button>
    </>
  );
}
