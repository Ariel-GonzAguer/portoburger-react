import { useEffect } from "react";

/**
 * Hook personalizado de React para gestionar la accesibilidad de los slides del carrusel Slick.
 * 
 * Este hook asegura que los slides marcados como ocultos (`aria-hidden="true"`) 
 * sean inhabilitados utilizando el atributo `inert`, evitando que sean enfocables 
 * o interactuables. Por el contrario, los slides que no están ocultos tendrán 
 * el atributo `inert` eliminado.
 * 
 * El hook utiliza `useEffect` para aplicar estos cambios después de que el 
 * componente haya sido renderizado.
 * 
 * @notas
 * - Este hook asume que se está utilizando la librería react-slick y que los 
 *   slides tienen la clase `slick-slide`.
 * - El atributo `inert` se utiliza para mejorar la accesibilidad al deshabilitar 
 *   la interacción con elementos ocultos.
 * 
 * @ejemplo
 * ```tsx
 * useManageSlickSlides();
 * ```
 */
export default function useManageSlickSlides() {
  useEffect(() => {
    const slides = document.querySelectorAll(".slick-slide");
    slides.forEach((slide) => {
      const isHidden = slide.getAttribute("aria-hidden") === "true";
      if (isHidden) {
        slide.setAttribute("inert", "");
      } else {
        slide.removeAttribute("inert");
      }
    });
  }, [])
}
