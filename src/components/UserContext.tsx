import { createContext, useState } from "react";

export type AuthUserType = {
  email: string;
  name: string;
};

type childrenType = {
  children: React.ReactNode;
};

type userContexttype = {
  user: AuthUserType | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUserType | null>>;
};

export const UserContext = createContext<userContexttype | null>(null);

export const UserContextProvider = ({ children }: childrenType) => {
  const [user, setUser] = useState<AuthUserType | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
