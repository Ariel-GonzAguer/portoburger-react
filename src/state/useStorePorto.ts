import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { StoreState, Producto } from "../types";

const useStore = create<StoreState>()(
  persist(
    immer((set) => ({
      // Estados
      carrito: [],
      total: 0,

      // Acciones
      agregarACarrito: (id, cantidad, precio) => {
        const nuevoProducto: Producto = { id, cantidad, precio };
        set((state) => {
          state.carrito.push(nuevoProducto);
          state.total += nuevoProducto.cantidad * nuevoProducto.precio;
        });
      },

      eliminarDeCarrito: (id) => {
        set((state) => {
          const productoAEliminar = state.carrito.find(
            (producto) => producto.id === id
          );
          if (productoAEliminar) {
            state.carrito = state.carrito.filter(
              (producto) => producto.id !== id
            );
            state.total -=
              productoAEliminar.cantidad * productoAEliminar.precio;
          }
        });
      },
    })),
    {
      name: "portoburger-store", // Nombre de la clave en el local storage
    }
  )
);

export default useStore;
