# PortoBurger React Project

PortoBurger es un proyecto ficticio de una hamburguesería vegana. Este proyecto está diseñado como una aplicación web interactiva que permite a los usuarios explorar el menú, realizar pedidos y obtener información sobre los productos y la filosofía de la hamburguesería.

## Características

- **Menú interactivo**: Carruseles para explorar hamburguesas, acompañamientos, bebidas y postres.
- **Sistema de pedidos**: Los usuarios pueden agregar productos al carrito y proceder con un pago ficticio.
- **Sección de preguntas frecuentes**: Respuestas a las preguntas más comunes sobre la hamburguesería.
- **Información sobre ingredientes**: Carrusel dedicado a mostrar los ingredientes utilizados.
- **Diseño responsivo**: Optimizado para dispositivos móviles y de escritorio.

## Tecnologías usadas

Este proyecto utiliza las siguientes tecnologías:

- **React**: Biblioteca principal para construir la interfaz de usuario.
- **TypeScript**: Para agregar tipado estático y mejorar la mantenibilidad del código.
- **Vite**: Herramienta de construcción rápida para proyectos modernos de frontend.
- **Zustand**: Para la gestión del estado global de la aplicación.
- **CSS Modules**: Para estilos encapsulados y específicos de cada componente.
- **React Slick**: Para implementar carruseles interactivos.
- **Michi Router**: Enrutador personalizado para manejar la navegación entre páginas.

## Estructura del proyecto

El proyecto está organizado de la siguiente manera:

```
public/         # Archivos estáticos como imágenes y tipografías
src/            # Código fuente principal
  components/   # Componentes reutilizables
  data/         # Datos estáticos para el menú y otros elementos
  hooks/        # Hooks personalizados
  layouts/      # Layouts para estructurar las páginas
  pages/        # Páginas principales de la aplicación
  state/        # Gestión del estado global
  styles/       # Archivos CSS Modules
```

## Instalación

1. Clona este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd portoburger-react
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abre tu navegador en `http://localhost:5173`.

## Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run preview`: Previsualiza la aplicación construida.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad o corrección de errores:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz commit:
   ```bash
   git commit -m "Agrega nueva funcionalidad"
   ```
4. Envía tus cambios al repositorio remoto:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE.TXT` para más detalles.

---

¡Gracias por visitar PortoBurger! 🍔