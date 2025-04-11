// estilos
import styles from "../styles/Navegacion.module.css";

// enrutado
import { Link } from "@arielgonzaguer/michi-router";

export default function Navegacion() {
  return (
    <nav className={styles.navegacion}>
      <ul>
        <li>
          <a href="#hacer-pedido">Hacé tu pedido</a>
        </li>
        <Link to="/ingredientes">Ingredientes</Link>
        <Link to="/">Home</Link>
        <li>
          <a href="#menu">Menú</a>
        </li>
        <Link to="/preguntas-frecuentes">Preguntas Frecuentes</Link>
      </ul>
    </nav>
  );
}
