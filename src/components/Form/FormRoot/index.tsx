import logoForm from "../../../assets/images/logo-orkut-simples.svg";

import styles from "./FormRoot.module.css";
import { ReactNode } from "react";

interface FormRootProps {
  children: ReactNode;
  text?: string;
}

export const FormRoot = ({ children, text }: FormRootProps) => {
  return (
    <section className={styles.formRootContainer}>
      <header>
        <img src={logoForm} alt="" />
        <h2>{text} </h2>
      </header>

      {children}
    </section>
  );
};
