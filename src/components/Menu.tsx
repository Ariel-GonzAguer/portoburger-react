// componentes 
import CarruselHamburguesas from "./CarruselHamburguesas";
import CarruselAcompañamientos from "./CarruselAcompañamientos";
import CarruselBebidas from "./CarruselBebidas";
import CarruselPostres from "./CarruselPostres";

// estilos
import styles from "../styles/Menu.module.css";

export default function Menu() {
  return (
    <section id="menu" className={styles.menu}>
      <h2>Menú</h2>
      <section className={styles.carruselSection}>
        <div className={styles.carruselDiv}>
          <h3>Hamburguesas</h3>
          <CarruselHamburguesas />
        </div>

        <div className={styles.carruselDiv}>
          <h3>Acompañamientos</h3>
          <CarruselAcompañamientos />
        </div>

        <div className={styles.carruselDiv}>
          <h3>Bebidas</h3>
          <CarruselBebidas />
        </div>

        <div className={styles.carruselDiv}>
          <h3>Postres</h3>
          <CarruselPostres />
        </div>
      </section>

    </section>
  );
}
