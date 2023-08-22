import { InputSearch } from "../../InputSearch";
import styles from "./HeaderProfile.module.css";

import profileSettingsIcon from "../../../assets/images/profileIcon.svg";
import caretDownSettingsIcon from "../../../assets/images/CaretDown.svg";

export const HeaderProfile = () => {
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
        <p>Iuri Silva</p>
        <img src={caretDownSettingsIcon} alt="" />
      </div>
    </>
  );
};
