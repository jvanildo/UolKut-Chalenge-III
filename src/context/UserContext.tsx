import React, { createContext, useState, ReactNode } from "react";

interface IdUser {
  uid: string;
  setUid: React.Dispatch<React.SetStateAction<string>>;
}
export const UserContext = createContext<IdUser | null>(null);

interface PropsUser {
  children: ReactNode;
}
export function UserProvider(props: PropsUser) {
  const [uid, setUid] = useState("");

  return (
    <UserContext.Provider value={{ uid, setUid }}>
      {props.children}
    </UserContext.Provider>
  );
}
