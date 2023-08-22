import styles from "./Friends.module.css";
import { friendAvatars } from "../../data";

export function Friends() {
  return (
    <section className={styles.categoryContainer}>
      <section className={styles.topicSection}>
        <span className={styles.categoryName}>Amigos (248)</span>

        <button className={styles.seeAllBtn}>Ver todos</button>
      </section>

      <section className={styles.contentSection}>
        {friendAvatars.map((avatar, key) => {
          return (
            <div key={key} className={styles.contentBox}>
              <img className={styles.contentIcon} src={avatar.src} />
              <p className={styles.contentTitle}>{avatar.title}</p>
            </div>
          );
        })}
      </section>
    </section>
  );
}
