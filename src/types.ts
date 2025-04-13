export interface StoreState {
  carrito: Producto[];
  total: number;
  agregarACarrito: (id: string, nombre: string, cantidad: number, precio: number) => void;
  eliminarDeCarrito: (id: string) => void;
}

export interface Producto {
  id: string;
  nombre: string;
  cantidad: number;
  precio: number;
}

export interface SlideProps {
  className?: string;
  h4: string;
  p: string;
  img?: string;
  alt?: string;
}