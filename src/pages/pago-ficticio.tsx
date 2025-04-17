// store
import useStorePorto from "../state/useStorePorto"

// estilos
import styles from "../styles/Pago-Ficticio.module.css"

// hooks
// import { useEffect } from "react"


export default function PagoFicticio() {
  const { carrito } = useStorePorto()

  // useEffect(() => {
  //   setTimeout(() => {
  //     window.location.href = "https://wa.me/50666666666?text=Hola%20me%20gustaría%20hacer%20un%20pedido%20de%20los%20siguientes%20productos:%20" + carrito.map((item) => item.nombre + " x " + item.cantidad + " = ₡" + item.precio * item.cantidad).join("%0A") + "%0A%0ATotal:%20₡" + carrito.reduce((total, item) => total + item.precio * item.cantidad, 0)
  //   }, 5000)
  // }, [])

  return (
    <section className={styles.pagoFicticio}>
      <p>Pronto serás transeferido a un chat de Whatsapp para proceder con su pedido.</p>
      <p>Los métodos de pago disponible son:</p>
      <ul>
        <li>Sinpe 📱</li>
        <li>Transferencia bancaria 💸</li>
        <li>Efectivo (si recogés en el restaurante) 💵</li>
        <li>Zunify - ¡Nueva forma! ⭐</li>
      </ul>
      <p>Su pedido es:</p>
      <ul>
        {
          carrito.map((item) => (
            <li key={item.id}>
              {item.nombre} x {item.cantidad} =  ₡{item.precio * item.cantidad}
            </li>
          ))
        }
      </ul>
      <p style={{ fontWeight: "bolder" }}>Total: ₡{carrito.reduce((total, item) => total + item.precio * item.cantidad, 0)}</p>
      <img src="/Pies_SVG.svg" alt="loader" loading="lazy" />
      <p>¡Gracias por tu compra!</p>

    </section>
  )
}