import { ReactNode } from "react";
import logo from "../../../assets/images/logo-orkut.svg";
import styles from "./HeaderRoot.module.css";

interface HeaderRootProps {
  children?: ReactNode;
}

export const HeaderRoot = ({ children }: HeaderRootProps) => {
  return (
    <header className={`${styles.header}`}>
      <h1>
        <img src={logo} alt="" />
      </h1>

      {children}
    </header>
  );
};
