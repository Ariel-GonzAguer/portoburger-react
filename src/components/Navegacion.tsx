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
        <li><Link to="/ingredientes">Ingredientes</Link></li>
        <li><Link to="/">Home</Link></li>
        <li>
          <a href="#menu">Menú</a>
        </li>
        <li><Link to="/preguntas-frecuentes">Preguntas Frecuentes</Link></li>

      </ul>
    </nav>
  );
}
