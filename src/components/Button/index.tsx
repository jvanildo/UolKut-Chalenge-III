import { Link } from "react-router-dom";
import styles from "./button.module.css";

interface ButtonProps {
  isNavigation?: boolean;
  path?: string;
  text?: string;
}

export const Button = ({ isNavigation = false, path, text }: ButtonProps) => {
  return (
    <>
      {isNavigation ? (
        <button className={styles.edit_profile}>
          <Link to={path!}>{text}</Link>
        </button>
      ) : (
        <button className={styles.save_edit}>Salvar</button>
      )}
    </>
  );
};
