import { Form, useNavigate } from "react-router-dom";
import styles from "./FormAccount.module.css";
import { useState } from "react";
import { postUsuario } from "../../../api";
import caretDown from "../../../assets/images/CaretDown.svg";
export const FormAccount = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [relacionamento, setRelacionamento] = useState("");
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const handleFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    postUsuario(email, password, name, relacionamento, job, country, state);
    navigate("/");
  };

  return (
    <Form onSubmit={handleFormSubmit} className={styles.formContainer}>
      <fieldset>
        <p>
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <input
            type="password"
            id="password"
            placeholder="Senha"
            minLength={8}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </p>
        <p>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </p>
        <section className={styles.footer_form}>
          <section className={styles.container_footer_form}>
            <input
              type="date"
              name="Nascimento"
              id={styles.nascimento}
              placeholder="Nascimento"
            />
            <p>
              <input
                type="text"
                id="city-state"
                placeholder="País"
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                required
              />
            </p>
          </section>
          <section className={styles.container_footer_form}>
            <p>
              <input
                type="text"
                name="job"
                placeholder="Profissão"
                onChange={(e) => {
                  setJob(e.target.value);
                }}
                required
              />
            </p>
            <p>
              <input
                type="text"
                id="city-state"
                placeholder="Cidade"
                onChange={(e) => {
                  setState(e.target.value);
                }}
                required
              />
            </p>
            <p>
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
              <img
                src={caretDown}
                className={styles.caretdown_account}
                alt=""
              />
            </p>
          </section>
        </section>
      </fieldset>

      <fieldset>
        <button className={styles.button_continue}>Criar conta</button>
      </fieldset>
    </Form>
  );
};
