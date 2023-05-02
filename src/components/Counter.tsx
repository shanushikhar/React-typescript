import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>add</button>
      <button onClick={() => setCount((prev) => prev - 1)}>sub</button>
    </>
  );
}

export default Counter;
