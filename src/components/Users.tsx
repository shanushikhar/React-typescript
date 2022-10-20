import React, { useState } from "react";

type NameSchema = {
  firstName: string;
  lastName: string;
};

export default function Users() {
  const [isLoggedin, setIsloggediN] = useState<NameSchema | null>(null);

  const handleLogin = () => {
    setIsloggediN({
      firstName: "bang",
      lastName: "sumakar",
    });
  };

  const handleLogOut = () => {
    setIsloggediN(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>handleLogin</button>
      <div>
        <button onClick={handleLogOut}>handleLogOut</button>
      </div>
      <section>
        <h2>{`first name :- ${isLoggedin?.firstName}`} </h2>
      </section>
      here without using ` ` , getting undefined and null
      <section>
        <h2>last name :- {isLoggedin?.lastName} </h2>
      </section>
    </div>
  );
}
