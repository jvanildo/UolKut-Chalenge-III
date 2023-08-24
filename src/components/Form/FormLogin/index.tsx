import { Form, Link, useNavigate } from "react-router-dom";
import styles from "./FormLogin.module.css";
import { useState, useContext } from "react";
import { LoginUsuario } from "../../../api";
import { useCookies } from "react-cookie";
import { userCookie } from "../../../context/CookieContext";

export const FormLogin = () => {
  const { setUserCookie } = useContext(userCookie);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["accessToken"]);

  const handleFormSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const data = await LoginUsuario(email, password);
    const accessToken = data.data.accessToken;

    setCookie("accessToken", accessToken, { path: "/profile" });
    const token = cookies;
    console.log(token);
    setUserCookie(token);

    if (data.status != 200) {
      return;
    }
    navigate("/profile");
    console.log(data.status);
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

        <a href="#">Esqueci a minha senha</a>
      </fieldset>
    </Form>
  );
};
