import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { UserProfile } from "../../components/UserProfile";
import styles from "./EditProfile.module.css";
import { Header } from "../../components/Header";
import CaretDown from "../../assets/images/CaretDown.svg";
import pencil from "../../assets/images/Pencil.svg";
import { useState, useContext, useEffect } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
  doc,
  updateDoc,
} from "firebase/firestore";
import { UserContext } from "../../context/UserContext";
import { firebaseConfig } from "../../service/FirebaseConfig";

export const EditProfile = () => {
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  const [relationship, setRelationship] = useState("");
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const { uid } = useContext(UserContext)!;
  const [contextData, setcontextData] = useState<User | null>(null);

  interface User {
    uid: string;
    state: string;
    country: string;
    job: string;
    name: string;
    relationship: string;
    date: string;
    AgeTransform?: number;
  }

  const getUserData = async () => {
    try {
      console.log(uid);
      console.log("teste");
      const db = getFirestore();
      const q = query(collection(db, "dbUol"), where("uid", "==", uid));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        setcontextData(doc.data() as User);
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }

    console.log(contextData);
  };

  function DateForAge(date: string) {
    const dateNow = new Date();
    const birthDateAtt = new Date(date);
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

  const handleEditForm = async () => {
    try {
      const db = getFirestore(firebaseConfig);
      const usersCollection = collection(db, "dbUol");
      const querySnapshot = await getDocs(
        query(usersCollection, where("uid", "==", uid)),
      );
      const userDoc = querySnapshot.docs[0].id;
      const docRef = doc(db, "dbUol", userDoc);
      const updateDocFields = {
        name: name,
        job: job,
        state: state,
        country: country,
        date: date,
        relationship: relationship,
        age: DateForAge(date),
        password: password,
      };
      const update = await updateDoc(docRef, updateDocFields);
      console.log(update);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserData();
  }, [contextData?.name]);

  const handleFormSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    handleEditForm();
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
                    placeholder={contextData?.job}
                  />
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="Nome"
                    placeholder={contextData?.name}
                  />
                  <input
                    onChange={(e) => setState(e.target.value)}
                    type="text"
                    name="Cidade"
                    placeholder={contextData?.state}
                  />
                  <input
                    onChange={(e) => setCountry(e.target.value)}
                    type="text"
                    name="Pais"
                    placeholder={contextData?.country}
                  />
                  <input
                    onChange={(e) => setDate(e.target.value)}
                    type="date"
                    name="Date"
                  />
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    placeholder="Senha"
                  />
                  <input
                    type="password"
                    name="Repeat-password"
                    placeholder="Repetir senha"
                  />
                </div>
                <div className={styles.container_relacionamento}>
                  <select
                    onChange={(e) => setRelationship(e.target.value)}
                    required
                    placeholder={contextData?.relationship}
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
