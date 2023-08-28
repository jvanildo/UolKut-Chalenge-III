import { useEffect } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useState, useContext } from "react";
import { UserContext } from "./context/UserContext";

export function GetUserData() {
  interface User {
    uid: string;
    state: string;
    country: string;
    job: string;
    AgeTransform: number;
    name: string;
    relationship: string;
  }
  const { uid } = useContext(UserContext)!;
  const [contextData, setcontextData] = useState<User | null>(null);
  useEffect(() => {
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

    getUserData();
  }, [uid]);
  return { contextData };
}
