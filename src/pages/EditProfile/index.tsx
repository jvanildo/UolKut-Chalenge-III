import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { UserProfile } from "../../components/UserProfile";
import styles from "./EditProfile.module.css";
import { Header } from "../../components/Header";
import CaretDown from "../../assets/images/CaretDown.svg";
import pencil from "../../assets/images/Pencil.svg";
import { useState } from "react";

export const EditProfile = () => {
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  const [relacionamento, setRelacionamento] = useState("");
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [country, setCountry] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [city, setCity] = useState("");

  const handleFormSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(
      date,
      password,
      relacionamento,
      name,
      job,
      country,
      confirmedPassword,
      city,
    );
    navigate("/profile");
  };
  const navigate = useNavigate();
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

          <form onSubmit={handleFormSubmit} className={styles.formContainer}>
            <section className={styles.container_user_edit}>
              <div className={styles.title}>
                <h1>Editar informações</h1>
              </div>
              <div className={styles.user_details}>
                <div className={styles.container_input}>
                  <input
                    onChange={(e) => setJob(e.target.value)}
                    type="text"
                    name="Profissao"
                    placeholder="Profissão"
                  />
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="Nome"
                    placeholder="Nome"
                  />
                  <input
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    name="Cidade"
                    placeholder="Cidade"
                  />
                  <input
                    onChange={(e) => setCountry(e.target.value)}
                    type="text"
                    name="Pais"
                    placeholder="País"
                  />
                  <input
                    onChange={(e) => setDate(e.target.value)}
                    type="date"
                    name="Date"
                    placeholder="Date"
                  />
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    placeholder="Senha"
                  />
                  <input
                    onChange={(e) => setConfirmedPassword(e.target.value)}
                    type="password"
                    name="Repeat-password"
                    placeholder="Repetir senha"
                  />
                </div>
                <div className={styles.container_relacionamento}>
                  <select
                    onChange={(e) => setRelacionamento(e.target.value)}
                    required
                  >
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
                <Button />
              </div>
              <div className={styles.container_profile_mobile}>
                <Button />
              </div>
            </section>
          </form>
        </div>
      </section>
    </>
  );
};
