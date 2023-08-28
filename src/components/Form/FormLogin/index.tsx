import { Form, Link, useNavigate } from "react-router-dom";
import styles from "./FormLogin.module.css";
import { useState, useContext } from "react";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import { UserContext } from "../../../context/UserContext";

export const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { setUid } = useContext(UserContext)!;

  const navigate = useNavigate();

  const AuthLogin = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setIsLoading(true);
    const auth = getAuth();
    setTimeout(async () => {
      try {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            setUid(userCredential.user?.uid);
            console.log(userCredential.user?.uid);
            navigate("/Profile");
          })
          .catch((error) => {
            setErrorPopup(true);
            const errorCode = error.code;
            const errorMessage = error.message;
            if (
              error.code === "auth/user-not-found" ||
              error.code === "auth/wrong-password"
            ) {
              setErrorMessage("Usuário ou senha inválidos.");
            }
            console.log(
              "Autentição de email e senhas não conferem",
              errorCode,
              errorMessage,
            );
          });
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setIsLoading(false);
      }
    }, 4000);
  };

  const onHandleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setErrorPopup(false);
  };

  return (
    <Form onSubmit={AuthLogin} className={styles.formLoginContainer}>
      {errorPopup && <div className={styles.errorPopup}>{errorMessage}</div>}
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
        <button className={styles.button_login} disabled={isLoading}>
          {isLoading ? "Carregando..." : "Entrar na conta"}
        </button>

        <Link to="/register">
          <button className={styles.button_register}>Criar uma conta</button>
        </Link>
        <Link to="/recover-password">
          <a href="">Esqueci a minha senha</a>
        </Link>
      </fieldset>
    </Form>
  );
};
