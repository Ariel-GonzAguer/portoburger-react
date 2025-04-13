// store
import useStorePorto from "../state/useStorePorto"

// estilos
import styles from "../styles/Pago-Ficticio.module.css"


export default function PagoFicticio() {
  const { carrito } = useStorePorto()

  return (
    <section className={styles.pagoFicticio}>
      <p>Pronto será transeferido a un chat de Whatsapp para proceder con su pedido.</p>
      <p>Los métodos de pago disponible son:</p>
      <ul>
        <li>Sinpe 📱</li>
        <li>Transferencia bancaria 💸</li>
        <li>Efectivo (si recoge en el restaurante) 💵</li>
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
      <p style={{fontWeight:"bolder"}}>Total: ₡{carrito.reduce((total, item) => total + item.precio * item.cantidad, 0)}</p>	
      <img src="/Pies_SVG.svg" alt="loader" />

    </section>
  )
}