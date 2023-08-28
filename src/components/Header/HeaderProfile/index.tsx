import { InputSearch } from "../../InputSearch";
import styles from "./HeaderProfile.module.css";

import profileSettingsIcon from "../../../assets/images/profileIcon.svg";
import caretDownSettingsIcon from "../../../assets/images/CaretDown.svg";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { UserContext } from "../../../context/UserContext";
import { useEffect, useContext, useState } from "react";

export const HeaderProfile = () => {
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
      console.log("teste");
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
  }, [uid]);
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>Início</li>
          <li className={styles.profile_nav}>Perfil</li>
          <li>Comunidades</li>
          <li>Jogos</li>
        </ul>
      </nav>

      <InputSearch className="isDesktop" />

      <div className={styles.settings_container}>
        <img src={profileSettingsIcon} alt="" />
        <p>{contextData?.name}</p>
        <img src={caretDownSettingsIcon} alt="" />
      </div>
    </>
  );
};
