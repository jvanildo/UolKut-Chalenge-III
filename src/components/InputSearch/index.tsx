import magnifyingGlass from "../../assets/images/MagnifyingGlass.svg";

import styles from "./InputSearch.module.css";

interface InputSearchProps {
  className: string;
}

export const InputSearch = ({ className }: InputSearchProps) => {
  return (
    <p className={`${styles.input_search_container} ${styles[className]}`}>
      <img src={magnifyingGlass} alt="" />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Pesquisar no Orkut"
      />
    </p>
  );
};
