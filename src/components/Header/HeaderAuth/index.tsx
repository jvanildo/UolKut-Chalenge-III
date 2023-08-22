import styles from "./HeaderAuth.module.css";

export const HeaderAuth = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>Sobre o Orkut</li>
          <li>Centro de segurança</li>
        </ul>
      </nav>
    </>
  );
};
