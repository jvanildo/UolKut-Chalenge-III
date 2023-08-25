import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { UserProfile } from "../../components/UserProfile";
import styles from "./EditProfile.module.css";
import { Header } from "../../components/Header";
import CaretDown from "../../assets/images/CaretDown.svg";
import pencil from "../../assets/images/Pencil.svg";

export const EditProfile = () => {
  return (
    <>
      <section className={styles.container_all_elements}>
        <Header.Root>
          <Header.Profile />
        </Header.Root>

        <div className={styles.container_all_profile}>
          <div className={styles.container_user_profile_mobile}>
            <UserProfile />
            <div className={styles.pencil}>
              <img src={pencil} alt="" />
            </div>
          </div>

          <section className={styles.container_elements_profile}>
            <UserProfile />
            <div className={styles.pencil}>
              <img src={pencil} alt="" />
            </div>
          </section>

          <section className={styles.container_user_edit}>
            <div className={styles.title}>
              <h1>Editar informações</h1>
            </div>
            <div className={styles.user_details}>
              <div className={styles.container_input}>
                <input type="text" name="Profissao" placeholder="Profissão" />
                <input type="text" name="Nome" placeholder="Nome" />
                <input type="text" name="Cidade" placeholder="Cidade" />
                <input type="text" name="Pais" placeholder="País" />
                <input type="date" name="Date" placeholder="Date" />
                <input type="password" name="password" placeholder="Senha" />
                <input
                  type="password"
                  name="Repeat-password"
                  placeholder="Repetir senha"
                />
              </div>
              <div className={styles.container_relacionamento}>
                <select required>
                  <option disabled selected value="">
                    Relacionamento
                  </option>
                  <option>Solteiro</option>
                  <hr />
                  <option>Casado</option>
                  <hr />
                  <option>Divorciado</option>
                  <hr />
                  <option>Namorando</option>
                  <hr />
                  <option>Preucupado</option>
                </select>
                <img src={CaretDown} alt="" className={styles.caretdown} />
              </div>
            </div>

            <div className={styles.container_profile}>
              <Link to={"/profile"}>
                <Button />
              </Link>
            </div>
            <div className={styles.container_profile_mobile}>
              <Link to={"/profile"}>
                <Button />
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
