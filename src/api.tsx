import axios from "axios";
// import { useCookies } from "react-cookie";

// export const GetUsuario = async () =>
//   const data = await axios.get(`http://localhost:3000/users`, {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });

//   const userData = data.data;
//   console.log(userData);
//   return userData;
// };

export const postUsuario = async (
  email: string,
  password: string,
  name: string,
  relacionamento: string,
  job: string,
  country: string,
  state: string,
) => {
  const user = {
    email,
    password,
    name,
    relacionamento,
    job,
    country,
    state,
  };
  const data = await axios.post("http://localhost:3000/register", user);
  console.log(data);
};

export const putUsuario = async (
  email: string,
  password: string,
  name: string,
  relacionamento: string,
  job: string,
  country: string,
  state: string,
) => {
  const user = {
    email,
    password,
    name,
    relacionamento,
    job,
    country,
    state,
  };
  const data = await axios.put("http://localhost:3000/users", user);
  console.log(data);
};

export const LoginUsuario = async (email: string, password: string) => {
  const user = {
    email,
    password,
  };
  const data = await axios
    .post("http://localhost:3000/login", user)
    .then((data) => data)
    .catch((error) => error);
  console.log(data.data.user);
  return data;
};
