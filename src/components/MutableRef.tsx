import React, { useEffect, useRef, useState } from "react";

export default function MutableRef() {
  const [timer, setTimer] = useState(0);
  // const timerRef = useRef<number | undefined>(undefined);
  // or
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setTimer((time) => time + 1);
    }, 1000);

    return () => closeInterval();
  }, []);

  const closeInterval = () => {
    // clearInterval(timerRef.current);
    // or
    if (timerRef.current) clearInterval(timerRef.current);
  };

  return (
    <div>
      MutableRef - {timer}
      <button onClick={closeInterval}>Stop counter</button>
    </div>
  );
}
