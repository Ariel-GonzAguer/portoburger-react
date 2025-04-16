// estilos
import styles from '../styles/PreguntasFrecuentes.module.css'

export default function PreguntasFrecuentes() {
  return (
    <section className={styles.preguntasFrecuentes}>
      <h2>Preguntas Frecuentes</h2>
      <h3>¿Todos sus productos son aptos para personas veganas?</h3>
      <p>Si. Nuestra hamburguesería utiliza solamente ingredientes de origen vegetal, y todos nuestros productos tienen un enfoque vegano. De hecho, todo nuestro personal se compone de personas veganas. Podés hacerles cualquier consulta extra sobre nuestro productos.</p>

      <h3>¿Cuándo abrieron?</h3>
      <p>Iniciamos operaciones formales como TapRoom en 2010, tres años después ampliamos nuestro menú y nos constituimos como la hamburguesería de calidad que conocés hoy.</p>

      <h3>¿Puedo visitar su huerta?</h3>
      <p>¡Si! Solo agendá una cita con al menos tres días de anticipación. El tour es totalmente gratis (para una persona) si tu última factura fue mayor a los ₡25000 , además incluye una cerveza.<br />
        Si tu última factura fue menor al monto indicado, tiene un costo de ₡5000 por persona, y también incluye una cerveza.
        Tené en cuenta que solo hay 5 tours por día, de lunes a viernes. El tour tiene una duración aproximada de 45 minutos, y se aceptan grupos de máximo 5 personas.</p>

      <h3>¿Tienen algún programa de pasantías?</h3>
      <p>Si. Aceptamos 3 pasantes al año en diferentes áreas de la hamburguesería. Cada pasantía tiene una duración de 4 meses. Consultá en caja para más información.</p>

      <h3>¿Hacen eventos privados?</h3>
      <p>Solamente los últimos 6 meses del año y fuera de la hamburguesería. Escribinos a consultas@portoburger.com para más detalles.</p>

      <h3>¿Van a expandir su menú?</h3>
      <p>No es algo que tengamos dentro de los planes para el siguiente año. Eso si, tal vez hagamos una cerveza con Portobello.</p>

      <h3>¿Por qué son veganos?</h3>
      <p>Por que es la única forma correcta. Todos los demás animales merecen el mismo respeto y consideración por su vida que los humanos.</p>

      <h3>¿Están abiertos los feriados?</h3>
      <p>No. Los feriados obligatorios y no obligatorios son para descansar. Hay que aprovechar cuando se puede.</p>

      <h3>¿Cómo puedo comunicarme con ustedes para más consultas?</h3>
      <p>Escribinos a consultas@portoburger.com</p>

      <h3>¿Esta hamburguesería existe?</h3>
      <p>Tristemente no, es solo un proyecto ficticio.</p>

      <img src="/iconos/burger-solid.svg" alt="ícono de hamburguesa en color negro" loading='lazy' />
    </section>
  );
}
