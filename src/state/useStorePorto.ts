import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
// import { persist } from "zustand/middleware";
import { StoreState, Producto } from "../types";

const useStorePorto = create<StoreState>()(
  // persist(
  immer((set) => ({
    // Estados
    carrito: [],
    total: 0,

    // Acciones
    agregarACarrito: (id, nombre, cantidad, precio) => {
      const nuevoProducto: Producto = {
        id,
        nombre,
        cantidad,
        precio,
      };
      set((state) => {
        const productoExistente = state.carrito.find(
          (producto) => producto.id === nuevoProducto.id
        );
        if (productoExistente) {
          productoExistente.cantidad += cantidad;
          state.total += cantidad * precio;
        } else {
          state.carrito.push(nuevoProducto);
          state.total += cantidad * precio;
        }
      });
    },

    eliminarDeCarrito: (id, cantidad = 1) => {
      set((state) => {
        const productoExistente = state.carrito.find(
          (producto) => producto.id === id
        );
        if (productoExistente) {
          if (productoExistente.cantidad > cantidad) {
            productoExistente.cantidad -= cantidad;
            state.total -= cantidad * productoExistente.precio;
          } else {
            state.total -=
              productoExistente.cantidad * productoExistente.precio;
            state.carrito = state.carrito.filter(
              (producto) => producto.id !== id
            );
          }
        }
      });
    },
  }))
  //   {
  //     name: "portoburger-store", // Nombre de la clave en el local storage
  //   }
  // )
);

export default useStorePorto;
