// componentes
import Navegacion from "./Navegacion";

// estilos
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <>
      <Navegacion />
      <header className={styles.header}>
        <h1>Porto Burger</h1>
      </header>
    </>
  );
}
