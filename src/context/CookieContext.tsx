import { ReactNode, createContext, useState } from "react";

interface propsChildren {
  children: ReactNode;
}
interface CookieUser {
  cookie: string;
  setUserCookie: React.Dispatch<React.SetStateAction<string>>;
}
export const userCookie = createContext<CookieUser | null>(null);
export const UserCookieProvide = (props: propsChildren) => {
  const [cookie, setUserCookie] = useState("");
  return (
    <userCookie.Provider value={{ cookie, setUserCookie }}>
      {props.children}
    </userCookie.Provider>
  );
};
