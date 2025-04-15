// componentes 
import CarruselHamburguesas from "./CarruselHamburguesas";
import CarruselAcompañamientos from "./CarruselAcompañamientos";
import CarruselBebidas from "./CarruselBebidas";
import CarruselPostres from "./CarruselPostres";


import styles from "../styles/Menu.module.css";


export default function Menu() {
  return (
    <section id="menu" className={styles.menu}>
      <h2>Menú</h2>
      <section className={styles.carruselSection}>
        <div className={styles.carruselDiv}>
          <CarruselHamburguesas />
        </div>

        <div className={styles.carruselDiv}>
          <CarruselAcompañamientos />
        </div>

        <div className={styles.carruselDiv}>
          <CarruselBebidas />
        </div>

        <div className={styles.carruselDiv}>
          <CarruselPostres />
        </div>
      </section>

    </section>
  );
}
