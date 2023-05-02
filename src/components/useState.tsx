import React, { KeyboardEvent, MouseEvent, useCallback, useState } from "react";

function UseState() {
  const [count, setCount] = useState<number>(0);

  const incrementHandlerBy2 = (
    e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
  ): void => {
    setCount((prev) => prev + 2);
  };

  return (
    <div>
      {count}
      <button onClick={incrementHandlerBy2}>inc by 2</button>
    </div>
  );
}

export default UseState;
