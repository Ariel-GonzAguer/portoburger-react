// estilos
import styles from "../styles/Navegacion.module.css";

// enrutado
import { Link, useNavigate } from "@arielgonzaguer/michi-router";

export default function Navegacion() {
  const navigate = useNavigate();

  const handleNavigation = (path: string = "/", hash?: string) => {
    if (window.location.pathname !== path) {
      navigate(path);
    }
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <nav className={styles.navegacion}>
      <ul>
        <li>
          <a onClick={() => handleNavigation("/", "#hacer-pedido")}>Hacé tu pedido</a>
        </li>
        <li><Link to="/ingredientes">Ingredientes</Link></li>
        <li><Link to="/">Home</Link></li>
        <li>
          <a onClick={() => handleNavigation("/", "#menu")}>Menú</a>
        </li>
        <li><Link to="/preguntas-frecuentes">Preguntas Frecuentes</Link></li>
      </ul>
    </nav>
  );
}
