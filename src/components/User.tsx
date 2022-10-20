import React, { useState } from "react";

export default function User() {
  const [isLoggedin, setIsloggediN] = useState(false);
  const [currentVal, setcurrentVal] = useState(0);

  return (
    <div>
      {`well hello ${isLoggedin}`}
      hello {currentVal}
    </div>
  );
}
