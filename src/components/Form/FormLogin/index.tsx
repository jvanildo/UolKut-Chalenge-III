import { Form, Link, useNavigate } from "react-router-dom";
import styles from "./FormLogin.module.css";

export const FormLogin = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    navigate("profile");
  };

  return (
    <Form onSubmit={handleFormSubmit} className={styles.formLoginContainer}>
      <fieldset>
        <p>
          <input type="email" placeholder="E-mail" required />
        </p>
        <p>
          <input type="password" placeholder="Senha" required />
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

        <a href="#">Esqueci a minha senha</a>
      </fieldset>
    </Form>
  );
};
