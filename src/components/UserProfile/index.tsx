import styles from "./ProfileUser.module.css";
import imageUser from "../../assets/images/profileIcon.svg";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

export const UserProfile = () => {
  const { uid } = useContext(UserContext)!;
  const [contextData, setcontextData] = useState<User | null>(null);

  interface User {
    uid: string;
    state: string;
    country: string;
    job: string;
    AgeTransform: number;
    name: string;
    relationship: string;
  }

  const getUserData = async () => {
    try {
      console.log(uid);
      const db = getFirestore();
      const q = query(collection(db, "dbUol"), where("uid", "==", uid));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        setcontextData(doc.data() as User);
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }

    console.log(contextData);
  };

  useEffect(() => {
    getUserData();
  }, [contextData?.name]);
  return (
    <section className={styles.container_profile_user}>
      <div className={styles.container_desc_img_user}>
        <div className={styles.circle_image_user}>
          <img className={styles.image_user} src={imageUser} alt="" />
        </div>
        <p className={styles.name_user}>{contextData?.name}</p>
        <p className={styles.desc_user}>
          {contextData?.relationship}, {contextData?.country}
        </p>
      </div>
    </section>
  );
};
