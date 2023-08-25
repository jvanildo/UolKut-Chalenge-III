import { Form, Link } from "react-router-dom";
import styles from "./FormRecoverDetail.module.css";

export const FormRecoverDetail = () => {
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
            placeholder="Informe o código"
            required
          />
          <input
            className={styles.input_submit_new_password}
            type="text"
            placeholder="Nova senha"
            required
          />
          <input
            className={styles.input_submit_new_password}
            type="text"
            placeholder="Confirmar a senha"
            required
          />
        </p>
      </fieldset>

      <fieldset className={styles.footer_buton}>
        <Link to="/">
          <button className={styles.submit_code}>Salvar</button>
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
