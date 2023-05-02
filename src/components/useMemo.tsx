import React, { useMemo } from "react";

type Fibtype = (num: number) => number;

const fibFn: Fibtype = (n) => {
  if (n < 2) return n;
  return fibFn(n - 1) + fibFn(n - 2);
};

const myNum = 23;

export default function UseMemo() {
  const fib = useMemo(() => fibFn(myNum), [myNum]);

  return (
    <div>
      useMemo
      <h1>{fib}</h1>
    </div>
  );
}
