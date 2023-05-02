import React, { KeyboardEvent, MouseEvent, useCallback, useState } from "react";

function UseCallback() {
  const [count, setCount] = useState<number>(0);

  const incrementHandlerBy2 = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => {
      setCount((prev) => prev + 2);
    },
    []
  );

  return (
    <div>
      {count}
      <button onClick={incrementHandlerBy2}>inc by 2</button>
    </div>
  );
}

export default UseCallback;
