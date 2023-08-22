import { Form, Link, useNavigate } from "react-router-dom";

import styles from "./FormDetails.module.css";

export const FormDetails = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    navigate("/");
  };
  return (
    <Form onSubmit={handleFormSubmit} className={styles.formDetailsContainer}>
      <fieldset>
        <p>
          <label htmlFor="about-me">Quem sou eu</label>
          <textarea id="about-me" placeholder="Me chamo..." required></textarea>
        </p>

        <p>
          <label>Interesses</label>
          <input
            type="text"
            placeholder="Ler livros, ouvir músicas..."
            required
          />
        </p>

        <p>
          <label>Status de Relacionamento</label>
          <select required>
            <option disabled selected value="">
              Selecione uma opção
            </option>
            <option>Solteiro</option>
            <option>Casado</option>
            <option>Viúvo</option>
          </select>
        </p>

        <p>
          <label>Tem filhos?</label>
          <select required>
            <option disabled selected value="">
              Selecione uma opção
            </option>
            <option> Sim</option>
            <option> Não</option>
          </select>
        </p>
        <p>
          <label>Você fuma?</label>
          <select required>
            <option disabled selected value="">
              Selecione uma opção
            </option>
            <option>Sim</option>
            <option>Não</option>
            <option>Raramente</option>
          </select>
        </p>

        <p>
          <label>Você bebe?</label>
          <select required>
            <option disabled selected value="">
              Selecione uma opção
            </option>
            <option> Sim</option>
            <option> Não</option>
            <option> Raramente</option>
          </select>
        </p>

        <p>
          <label>Filmes Favoritos</label>
          <textarea required />
        </p>

        <p>
          <label>Músicas Favoritas</label>
          <textarea required />
        </p>
      </fieldset>

      <fieldset>
        <button className={styles.button_end}>Finalizar cadastro</button>

        <Link to="/register">
          <button className={styles.button_back}>Voltar</button>
        </Link>
      </fieldset>
    </Form>
  );
};
