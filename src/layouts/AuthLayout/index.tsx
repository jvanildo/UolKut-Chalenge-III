import { Outlet } from "react-router-dom";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import wallpaper from "../../assets/images/wallpaper.svg";

import styles from "./AuthLayout.module.css";

export const AuthLayout = () => {
  return (
    <div className={styles.authLayoutContainer}>
      <Header.Root>
        <Header.Auth />
      </Header.Root>

      <main>
        <article>
          <aside>
            <img src={wallpaper} alt="Three people at the table smiling" />

            <p>
              Conecta-se aos seus amigos e familiares usando recados e mensagens
              instantâneas
            </p>
          </aside>
          <Outlet />
        </article>
      </main>

      <Footer />
    </div>
  );
};
