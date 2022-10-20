import React, { useState } from "react";

type NameSchema = {
  firstName: string;
  lastName: string;
};

export default function Assertion() {
  // useState with Assertion
  const [isLoggedin, setIsloggediN] = useState<NameSchema>({} as NameSchema);

  const handleLogin = () => {
    setIsloggediN({
      firstName: "bang",
      lastName: "sumakar",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>handleLogin</button>
      <section>
        <h2>{`first name :- ${isLoggedin.firstName}`} </h2>
      </section>
      here without using ` ` , getting undefined and null
      <section>
        <h2>last name :- {isLoggedin.lastName} </h2>
      </section>
    </div>
  );
}
