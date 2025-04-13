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
        console.log("render");
        console.log("carrito", carrito);
        console.log("total", total);
    }, [carrito, total]);

    return (
        <section id="hacer-pedido" className={styles.hacerPedido}>
            <h2>¡Hacé tu pedido!</h2>
            <div>
                <h3>Elegí tu hamburguesa</h3>
                <div className={styles.productosContainer}>
                    {
                        hamburguesas.map((hamburguesa, index) => (
                            <div key={index}>
                                <h4>{hamburguesa.h4}</h4>
                                <p>₡{hamburguesa.precio}</p>
                                <label htmlFor={`cantidad-${index}`}>Cantidad </label>
                                <input type="number" id={`cantidad-${index}`} name={`cantidad-${index}`} defaultValue={0} onChange={(e) => {
                                    const cantidad = parseInt(e.target.value, 10);
                                    if (cantidad > 0) {
                                        agregarACarrito(index.toString(), cantidad, hamburguesa.precio);
                                    } else {
                                        eliminarDeCarrito(index.toString());
                                    }
                                }} />
                            </div>
                        ))
                    }
                </div>

                <h3>Elegí tus acompañamientos</h3>
                <div className={styles.productosContainer}>
                    {
                        acompañamientos.map((acompañamiento, index) => (
                            <div key={index}>
                                <h4>{acompañamiento.h4}</h4>
                                <p>₡{acompañamiento.precio}</p>
                                <label htmlFor={`cantidad-${index}`}>Cantidad </label>
                                <input type="number" id={`cantidad-${index}`} name={`cantidad-${index}`} defaultValue={0} onChange={(e) => {
                                    const cantidad = parseInt(e.target.value, 10);
                                    if (cantidad > 0) {
                                        agregarACarrito(index.toString(), cantidad, acompañamiento.precio);
                                    } else {
                                        eliminarDeCarrito(index.toString());
                                    }
                                }} />
                            </div>
                        ))
                    }
                </div>

                <h3>Elegí tus bebidas</h3>
                <div className={styles.productosContainer}>
                    {
                        bebidas.map((bebida, index) => (
                            <div key={index}>
                                <h4>{bebida.h4}</h4>
                                <p>₡{bebida.precio}</p>
                                <label htmlFor={`cantidad-${index}`}>Cantidad </label>
                                <input type="number" id={`cantidad-${index}`} name={`cantidad-${index}`} defaultValue={0} onChange={(e) => {
                                    const cantidad = parseInt(e.target.value, 10);
                                    if (cantidad > 0) {
                                        agregarACarrito(index.toString(), cantidad, bebida.precio);
                                    } else {
                                        eliminarDeCarrito(index.toString());
                                    }
                                }} />
                            </div>
                        ))
                    }
                </div>

                <h3>Elegí tus postres</h3>
                <div className={styles.productosContainer}>
                    {
                        postres.map((postre, index) => (
                            <div key={index}>
                                <h4>{postre.h4}</h4>
                                <p>₡{postre.precio}</p>
                                <label htmlFor={`cantidad-${index}`}>Cantidad </label>
                                <input type="number" id={`cantidad-${index}`} name={`cantidad-${index}`} defaultValue={0} onChange={(e) => {
                                    const cantidad = parseInt(e.target.value, 10);
                                    if (cantidad > 0) {
                                        agregarACarrito(index.toString(), cantidad, postre.precio);
                                    } else {
                                        eliminarDeCarrito(index.toString());
                                    }
                                }} />
                            </div>
                        ))
                    }
            </div>
            </div>



        </section>
    );

};
