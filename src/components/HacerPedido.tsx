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

// enrutado
import { useNavigate } from "@arielgonzaguer/michi-router"

// componentes
import { toast, Toaster } from "sonner";


export default function HacerPedido() {
    // store
    const { carrito, total, agregarACarrito, eliminarDeCarrito, vaciarCarrito } = useStorePorto();

    // enrutado
    const navigate = useNavigate();

    // helpers
    function cancelarPedido() {
        const menuPedido = document.getElementById("menuPedido");
        if (menuPedido) {
            menuPedido.classList.remove("blurPorPago");
        }
        toast.dismiss();
    }

    // handlers
    function procederConPago() {
        if (carrito.length === 0) {
            toast.error("No hay productos en el carrito", {
                description: "Agregá productos al carrito para proceder con el pago",
                duration: 5000,
            });
            return;
        } else {
            const menuPedido = document.getElementById("menuPedido");
            if (menuPedido) {
                menuPedido.classList.add("blurPorPago");
            }
            toast.success("Pedido realizado con éxito", {
                duration: 25000,
                action: <button onClick={() => navigate("/pago-ficticio")} className={styles.btnToast}>Proceder con Pago</button>,
                cancel: <button style={{ backgroundColor: "red", color: "black", fontWeight: "bolder" }} onClick={cancelarPedido} className={styles.btnToast}>Cancelar pedido</button>,
                style: {
                    zIndex: 9000,
                },
                closeButton: false
            });
        }
    }

    useEffect(() => {
        // // console.log("render");
        // console.log("carrito", carrito);
        // console.log("total", total);
    }, [carrito, total]);

    return (
        <section id="hacer-pedido" className={styles.hacerPedido}>
            <Toaster richColors position="bottom-center" closeButton />
            <h2>¡Hacé tu pedido!</h2>
            <section id="menuPedido">

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
            </section>
            <section>
                <h5>Tu pedido</h5>
                {
                    carrito.length > 0 ? <>
                        <button onClick={vaciarCarrito} className={styles.btnPedido}>Vaciar el carrito</button>
                        <p>Total:₡ {total}</p>

                        <ul>
                            {
                                carrito.map((item) => (
                                    <li key={`${item.id}-${item.nombre}-${item.cantidad}`}>{item.nombre} x {item.cantidad}</li>
                                ))
                            }
                        </ul>

                        <button onClick={procederConPago} className={styles.btnPedido}>Realizar pedido</button></> : <p>No hay productos en el carrito</p>
                }


            </section>

        </section>
    );
};
