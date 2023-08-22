import logoForm from "../../../assets/images/logo-orkut-simples.svg";

import styles from "./FormRoot.module.css";
import { ReactNode } from "react";

interface FormRootProps {
  children: ReactNode;
}

export const FormRoot = ({ children }: FormRootProps) => {
  return (
    <section className={styles.formRootContainer}>
      <header>
        <img src={logoForm} alt="" />
        <h2>Acesse o Orkut </h2>
      </header>

      {children}
    </section>
  );
};
