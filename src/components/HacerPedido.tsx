// hooks
import { useEffect } from "react";

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

    useEffect(() => {
        // console.log("render");
        console.log("carrito", carrito);
        console.log("total", total);
    }, [carrito, total]);

    return (
        <section id="hacer-pedido" className={styles.hacerPedido}>
            <h2>¡Hacé tu pedido!</h2>

            <h3>Elegí tu hamburguesa</h3>
            <div className={styles.productosContainer}>
                {
                    hamburguesas.map((hamburguesa, index) => (
                        <div key={`hamburguesa-${index}`} className={styles.producto}>
                            <div>
                                <h4>{hamburguesa.h4}</h4>
                                <p>₡{hamburguesa.precio}</p>
                            </div>
                            <div>
                                <button onClick={() => {
                                    agregarACarrito(`hamburguesa-${index}`, hamburguesa.h4, 1, hamburguesa.precio);
                                    const spanHamburguesas = document.querySelector(`[data-contador="hamburguesa-${index}"]`);
                                    if (spanHamburguesas) {
                                        spanHamburguesas.textContent = (parseInt(spanHamburguesas.textContent || "0") + 1).toString();
                                    }
                                }}>+</button>
                                <span data-contador={`hamburguesa-${index}`}>0</span>
                                <button onClick={() => {
                                    eliminarDeCarrito(`hamburguesa-${index}`);
                                    const spanHamburguesas = document.querySelector(`[data-contador="hamburguesa-${index}"]`);
                                    if (spanHamburguesas && spanHamburguesas.textContent !== "0") {
                                        spanHamburguesas.textContent = (parseInt(spanHamburguesas.textContent || "0") - 1).toString();
                                    }
                                }}>-</button>
                            </div>
                        </div>
                    ))
                }
            </div>

            <h3>Elegí tus acompañamientos</h3>
            <div className={styles.productosContainer}>
                {
                    acompañamientos.map((acompañamiento, index) => (
                        <div key={`acompañamiento-${index}`} className={styles.producto}>
                            <div>
                                <h4>{acompañamiento.h4}</h4>
                                <p>₡{acompañamiento.precio}</p>
                            </div>
                            <div>
                                <button onClick={() => {
                                    agregarACarrito(`acompañamiento-${index}`, acompañamiento.h4, 1, acompañamiento.precio);
                                    const spanAcompañamiento = document.querySelector(`[data-contador="acompañamiento-${index}"]`);
                                    if (spanAcompañamiento) {
                                        spanAcompañamiento.textContent = (parseInt(spanAcompañamiento.textContent || "0") + 1).toString();
                                    }
                                }}>+</button>
                                <span data-contador={`acompañamiento-${index}`}>0</span>
                                <button onClick={() => {
                                    eliminarDeCarrito(`acompañamiento-${index}`);
                                    const spanAcompañamiento = document.querySelector(`[data-contador="acompañamiento-${index}"]`);
                                    if (spanAcompañamiento && spanAcompañamiento.textContent !== "0") {
                                        spanAcompañamiento.textContent = (parseInt(spanAcompañamiento.textContent || "0") - 1).toString();
                                    }
                                }}>-</button>
                            </div>
                        </div>
                    ))
                }
            </div>

            <h3>Elegí tus bebidas</h3>
            <div className={styles.productosContainer}>
                {
                    bebidas.map((bebida, index) => (
                        <div key={`bebida-${index}`} className={styles.producto}>
                            <div>
                                <h4>{bebida.h4}</h4>
                                <p>₡{bebida.precio}</p>
                            </div>
                            <div>
                                <button onClick={() => {
                                    agregarACarrito(`bebida-${index}`, bebida.h4, 1, bebida.precio);
                                    const spanBebida = document.querySelector(`[data-contador="bebida-${index}"]`);
                                    if (spanBebida) {
                                        spanBebida.textContent = (parseInt(spanBebida.textContent || "0") + 1).toString();
                                    }
                                }}>+</button>
                                <span data-contador={`bebida-${index}`}>0</span>
                                <button onClick={() => {
                                    eliminarDeCarrito(`bebida-${index}`);
                                    const spanBebida = document.querySelector(`[data-contador="bebida-${index}"]`);
                                    if (spanBebida && spanBebida.textContent !== "0") {
                                        spanBebida.textContent = (parseInt(spanBebida.textContent || "0") - 1).toString();
                                    }
                                }}>-</button>
                            </div>
                        </div>
                    ))
                }
            </div>

            <h3>Elegí tus postres</h3>
            <div className={styles.productosContainer}>
                {
                    postres.map((postre, index) => (
                        <div key={`postre-${index}`} className={styles.producto}>
                            <div>
                                <h4>{postre.h4}</h4>
                                <p>₡{postre.precio}</p>
                            </div>
                            <div>
                                <button onClick={() => {
                                    agregarACarrito(`postre-${index}`, postre.h4, 1, postre.precio);
                                    const spanPostre = document.querySelector(`[data-contador="postre-${index}"]`);
                                    if (spanPostre) {
                                        spanPostre.textContent = (parseInt(spanPostre.textContent || "0") + 1).toString();
                                    }
                                }}>+</button>
                                <span data-contador={`postre-${index}`}>0</span>
                                <button onClick={() => {
                                    eliminarDeCarrito(`postre-${index}`);
                                    const spanPostre = document.querySelector(`[data-contador="postre-${index}"]`);
                                    if (spanPostre && spanPostre.textContent !== "0") {
                                        spanPostre.textContent = (parseInt(spanPostre.textContent || "0") - 1).toString();
                                    }
                                }}>-</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <h5>Tu pedido</h5>

            <ul>
                {
                    carrito.map((item) => (
                        <li key={`${item.id}-${item.nombre}-${item.cantidad}`}>{item.nombre} x {item.cantidad}</li>
                    ))
                }
            </ul>

            {
                carrito.length > 0 ? <p>Total: <br /> ₡ {total}</p> : <p>No hay productos en el carrito</p>
            }
        </section>
    );
};
