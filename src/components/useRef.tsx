import React, { useEffect, useRef, useState } from "react";

export default function UseRef() {
  const [, setCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // ref will take the value when component re-render so typing anything in input wont take the value so to take the value, need to re-render using useState
  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  return (
    <div>
      UseRef
      <input ref={inputRef} placeholder="put some val" />
      <button onClick={() => setCount((prev) => prev + 1)}>inc by 1</button>
    </div>
  );
}
