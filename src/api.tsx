import axios from "axios";

export const getUsuario = async () => {
  const { data } = await axios.get(`http://localhost:3000/users`);
  console.log(data);
  return data;
};

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

export const loginUsuario = async (email: string, password: string) => {
  const user = {
    email,
    password,
  };
  const data = await axios
    .post("http://localhost:3000/login", user)
    .then((data) => data)
    .catch((error) => error);
  console.log(data.data.user);

  localStorage.setItem("user", JSON.stringify(data.data.user));

  const status = data.status;
  return status;
};
