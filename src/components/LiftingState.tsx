import React, { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

function LiftingState({ children, setCount }: PropsType) {
  return (
    <div>
      {children}
      <button onClick={() => setCount((prev) => prev + 1)}>Inc</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Dec</button>
    </div>
  );
}

export default LiftingState;
