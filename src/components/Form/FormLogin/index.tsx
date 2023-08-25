import { Form, Link, useNavigate } from "react-router-dom";
import styles from "./FormLogin.module.css";
import { useState } from "react";
import { loginUsuario } from "../../../api";

export const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const status = await loginUsuario(email, password);
    if (status != 200) {
      return;
    }
    navigate("/profile");
    console.log(status);
  };

  const onHandleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <Form onSubmit={handleFormSubmit} className={styles.formLoginContainer}>
      <fieldset>
        <p>
          <input
            type="email"
            placeholder="E-mail"
            required
            onChange={onHandleInput}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="Senha"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </p>
        <p className={styles.checkboxContainer}>
          <input type="checkbox" name="remember-password" />
          <label htmlFor="remember-password">Lembrar minha senha</label>
        </p>
      </fieldset>

      <fieldset>
        <button className={styles.button_login}>Entrar na conta</button>

        <Link to="/register">
          <button className={styles.button_register}>Criar uma conta</button>
        </Link>

        <a href="">Esqueci a minha senha</a>
      </fieldset>
    </Form>
  );
};
