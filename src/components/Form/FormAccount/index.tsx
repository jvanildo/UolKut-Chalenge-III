import { Form, useNavigate } from "react-router-dom";
import styles from "./FormAccount.module.css";
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { auth } from "../../../service/FirebaseConfig";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { firebaseConfig } from "../../../service/FirebaseConfig";
import caretDown from "../../../assets/images/CaretDown.svg";

export const FormAccount = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [relationship, setRelationship] = useState("");
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [date, setDate] = useState("");

  const [errorPopup, setErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const db = getFirestore(firebaseConfig);
  const listUser = collection(db, "dbUol");

  function DateForAge(birthdayDate: string) {
    const dateNow = new Date();
    const birthDateAtt = new Date(birthdayDate);
    let age = dateNow.getFullYear() - birthDateAtt.getFullYear();
    const ageDiff = dateNow.getMonth() - birthDateAtt.getMonth();

    if (
      ageDiff < 0 ||
      (ageDiff === 0 && dateNow.getDate() < birthDateAtt.getDate())
    ) {
      age--;
    }

    return age;
  }
  const AgeTransform = DateForAge(date);

  const handleFormSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      setIsCreatingAccount(true);
      const newUser = await createUserWithEmailAndPassword(email, password);
      console.log(newUser);
      const userValues = await addDoc(listUser, {
        uid: newUser?.user.uid,
        state,
        country,
        job,
        AgeTransform,
        name,
        relationship,
      });
      console.log(userValues);
      navigate("/");
    } catch (error) {
      console.log("error:", error);
      setErrorPopup(true);
      if (error) {
        setErrorPopup(true);
        setErrorMessage("Email já cadastrado!");
      }
    }
    setIsCreatingAccount(true);
  };

  return (
    <Form onSubmit={handleFormSubmit} className={styles.formContainer}>
      {errorPopup && <div className={styles.errorPopup}>{errorMessage}</div>}
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
              id="nascimento"
              placeholder="Nascimento"
              onChange={(e) => {
                setDate(e.target.value);
              }}
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
                onChange={(e) => setRelationship(e.target.value)}
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
                <option>Preocupado</option>
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
        <button className={styles.button_continue}>
          {isCreatingAccount ? "Cadastrando, aguarde..." : "Criar conta"}
        </button>
      </fieldset>
    </Form>
  );
};
