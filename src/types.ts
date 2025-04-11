export interface StoreState {
  carrito: Producto[];
  total: number;
  agregarACarrito: (id: string, cantidad: number, precio: number) => void;
  eliminarDeCarrito: (id: string) => void;
}

export interface Producto {
  id: string;
  cantidad: number;
  precio: number;
}