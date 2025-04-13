// hooks
// import { useEffect } from "react";

// store
import useStorePorto from "../state/useStorePorto";

// data
import acompañamientos from "../data/acompañamientos";
import hamburguesas from "../data/hamburguesas";
import bebidas from "../data/bebidas";
import postres from "../data/postres";

// estilos
import styles from "../styles/HacerPedido.module.css";


export default function HacerPedido() {
    const { carrito, total, agregarACarrito, eliminarDeCarrito } = useStorePorto();

    return (
        <section id="hacer-pedido" className={styles.hacerPedido}>
            <h2>¡Hacé tu pedido!</h2>
            <div>
                <h3>Elegí tu hamburguesa</h3>
                <div className={styles.hamburguesasContainer}>
                    {
                        hamburguesas.map((hamburguesa, index) => (
                            <div key={index}>
                                <h4>{hamburguesa.h4}</h4>
                                <p>₡{hamburguesa.precio}</p>
                                <button onClick={() => agregarACarrito(index.toString(), 1, hamburguesa.precio)}>
                                    Agregar al carrito
                                </button>
                            </div>
                        ))
                    }
                </div>

            </div>



        </section>
    );

};
