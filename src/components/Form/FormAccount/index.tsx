import { Form, Link, useNavigate } from "react-router-dom";
import styles from "./FormAccount.module.css";
import { useState } from "react";
import { postUsuario } from "../../../api";

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
            placeholder="password"
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
            placeholder="País"
            onChange={(e) => {
              setCountry(e.target.value);
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
        <p className="formDetailsContainer">
          <label>Status de Relacionamento</label>
          <select onChange={(e) => setRelacionamento(e.target.value)} required>
            <option disabled selected value="">
              Selecione uma opção
            </option>
            <option>Solteiro</option>
            <option>Casado</option>
            <option>Viúvo</option>
          </select>
        </p>
      </fieldset>

      <fieldset>
        <button className={styles.button_continue}>Salvar</button>

        <Link to="/">
          <button className={styles.button_back}>Já tenho uma conta</button>
        </Link>
      </fieldset>
    </Form>
  );
};
