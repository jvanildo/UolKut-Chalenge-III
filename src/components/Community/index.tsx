import styles from "./Community.module.css";
import { communityAvatars } from "../../data";

export function Community() {
  return (
    <section className={styles.categoryContainer}>
      <section className={styles.topicSection}>
        <span className={styles.categoryName}>Comunidade (42)</span>

        <button className={styles.seeAllBtn}>Ver todos</button>
      </section>

      <section className={styles.contentSection}>
        {communityAvatars.map((avatar, key) => {
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
