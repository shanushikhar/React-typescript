import React, { useEffect } from "react";

const UseEffect = () => {
  useEffect(() => {
    console.log("mounting");

    return () => console.log("un-mounting..");
  }, []);

  return <div>useEffect</div>;
};
export default UseEffect;
