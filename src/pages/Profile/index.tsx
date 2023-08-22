// import { Header } from "../../components/Header";
import { Community } from "../../components/Community";
import { Friends } from "../../components/Friends";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { InputSearch } from "../../components/InputSearch";
import { ProfileInfo } from "../../components/ProfileInfo";
import { UserProfile } from "../../components/UserProfile";
import styles from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className={styles.profile_container}>
      <Header.Root>
        <Header.Profile />
      </Header.Root>

      <main className={styles.main}>
        <div className={styles.container_input}>
          <InputSearch className="isMobile" />
        </div>

        <section>
          <UserProfile />
          <Button isNavigation path="edit" text="Editar Perfil" />

          <section className={`${styles.isMobile} ${styles.dois}`}>
            <Friends />
          </section>
        </section>

        <ProfileInfo />

        <section className={`${styles.isDesktop} ${styles.rightContainer}`}>
          <section className={styles.sideCategory}>
            <Friends />
          </section>

          <section className={styles.sideCategory}>
            <Community />
          </section>
        </section>

        <section className={`${styles.isMobile} ${styles.quatro}`}>
          <Community />
        </section>
      </main>
    </div>
  );
};
