import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export default function User() {
  const userContextPro = useContext(UserContext);
  console.log(userContextPro);

  // destructuring gives error
  //let { user , setUser } = userContextPro;

  const loginUser = () => {
    if (userContextPro) {
      userContextPro.setUser({
        email: "hello@example.com",
        name: "bang",
      });
    }
  };
  const logOutUser = () => {
    if (userContextPro) {
      userContextPro.setUser(null);
    }
  };

  return (
    <div>
      <button onClick={loginUser}> Login </button>
      <button onClick={logOutUser}> Logout </button>

      <section>user name is {userContextPro?.user?.name}</section>
      <section>user email is {userContextPro?.user?.email}</section>
    </div>
  );
}
