import styles from "./ProfileUser.module.css";
import imageUser from "../../assets/images/profileIcon.svg";

export const UserProfile = () => {
  const user = localStorage.getItem("user");
  const userParsed = JSON.parse(user!);
  console.log(userParsed);
  return (
    <section className={styles.container_profile_user}>
      <div className={styles.container_desc_img_user}>
        <div className={styles.circle_image_user}>
          <img className={styles.image_user} src={imageUser} alt="" />
        </div>
        <p className={styles.name_user}>{userParsed.name}</p>
        <p className={styles.desc_user}>
          {userParsed.relacionamento}, {userParsed.country}
        </p>
      </div>
    </section>
  );
};
