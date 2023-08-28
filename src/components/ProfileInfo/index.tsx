import styles from "./ProfileInfo.module.css";
import { useState, useContext, useEffect } from "react";
import star from "../../assets/images/Star.svg";
import smiley from "../../assets/images/Smiley.svg";
import thumbsUp from "../../assets/images/ThumbsUp.svg";
import heart from "../../assets/images/Heart.svg";
import bubble from "../../assets/images/Bubble.svg";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { UserContext } from "../../context/UserContext";

export function ProfileInfo() {
  const { uid } = useContext(UserContext)!;
  const [contextData, setcontextData] = useState<User | null>(null);

  interface User {
    uid: string;
    state: string;
    country: string;
    job: string;
    AgeTransform: number;
    name: string;
    relationship: string;
    date: string;
    age: number;
  }
  const getUserData = async () => {
    try {
      console.log(uid);
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
  useEffect(() => {
    getUserData();
  }, [contextData?.name]);

  const cutDate = contextData?.date.substring(5).split("-").reverse().join("-");

  return (
    <section className={styles.profileInfoContainer}>
      <header>
        <h2>Boa tarde, {contextData?.name}</h2>
        <blockquote>
          <img src={bubble} alt="" />
          <p>Programar sem café é igual poeta sem poesia.</p>
        </blockquote>
      </header>

      <dl className={styles.user_status}>
        <div>
          <dt>Fãs</dt>
          <dd>
            <img src={star} alt="" />
            <span>85</span>
          </dd>
        </div>
        <div>
          <dt>Confiável</dt>
          <dd>
            <img src={smiley} alt="" />
            <img src={smiley} alt="" />
          </dd>
        </div>
        <div>
          <dt>Legal</dt>
          <dd>
            <img src={thumbsUp} alt="" />
            <img src={thumbsUp} alt="" />
            <img src={thumbsUp} alt="" />
          </dd>
        </div>
        <div>
          <dt>Sexy</dt>
          <dd>
            <img src={heart} alt="" />
            <img src={heart} alt="" />
          </dd>
        </div>
      </dl>

      <dl className={styles.user_details}>
        <div>
          <dt>Relacionamento:</dt>
          <dd>{contextData?.relationship}</dd>
        </div>
        <div>
          <dt>Profissão:</dt>
          <dd>{contextData?.job}</dd>
        </div>
        <div>
          <dt>Aniversário:</dt>
          <dd>{cutDate}</dd>
        </div>
        <div>
          <dt>Idade:</dt>
          <dd>{contextData?.age} anos</dd>
        </div>
        <div>
          <dt>Moro:</dt>
          <dd>{contextData?.state}</dd>
        </div>
        <div>
          <dt>País:</dt>
          <dd>{contextData?.country}</dd>
        </div>
        <div className={styles.container_last_dd}>
          <dt>Cidade natal:</dt>
          <dd>{contextData?.state}</dd>
        </div>
        <div className={styles.multiple_options_field_details}>
          <dt>Músicas:</dt>
          <dd>Trap</dd>
          <dd className={styles.isMobile}>Rap</dd>
          <dd className={styles.isMobile}>Indie</dd>
          <span>Ver todos</span>
        </div>
        <div className={styles.multiple_options_field_details}>
          <dt>Filmes:</dt>
          <dd>A rede social</dd>
          <dd className={styles.isMobile}>Meu amigo totoro</dd>
          <span>Ver todos</span>
        </div>
      </dl>
    </section>
  );
}
