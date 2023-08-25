import { Form, Link } from "react-router-dom";
import styles from "./FormRecover.module.css";

export const FormRecover = () => {
  const handleFormSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleFormSubmit} className={styles.formContainer}>
      <fieldset>
        <p>
          <input
            className={styles.input_submit_email}
            type="email"
            placeholder="E-mail cadastrado"
            required
          />
        </p>
      </fieldset>

      <fieldset className={styles.footer_buton}>
        <Link to="/recover-password/detail">
          <button className={styles.submit_code}>Enviar Código</button>
        </Link>
        <div className={styles.container_remember}>
          <p className={styles.remember_password}>Lembrou sua Senha?</p>
          <Link to="/">
            <button className={styles.button_enter_credentials}>
              Entrar com as credenciais
            </button>
          </Link>
        </div>
      </fieldset>
    </Form>
  );
};
