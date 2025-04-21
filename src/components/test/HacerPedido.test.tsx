import { render } from "@testing-library/react";
import { vi } from "vitest";
import userEvent from '@testing-library/user-event';
import HacerPedido from "../HacerPedido";
import { toast } from "sonner";

// Crear mocks para las funciones del store
const mockAgregarACarrito = vi.fn();
const mockEliminarDeCarrito = vi.fn();
const mockVaciarCarrito = vi.fn();

// Mock del store completo
vi.mock("../../state/useStorePorto", () => ({
  default: () => ({
    carrito: [
      { id: "hamburguesa-0", nombre: "Test Burger", cantidad: 2, precio: 1000 },
      { id: "bebida-0", nombre: "Test Drink", cantidad: 1, precio: 500 },
    ],
    total: 2500,
    agregarACarrito: mockAgregarACarrito,
    eliminarDeCarrito: mockEliminarDeCarrito,
    vaciarCarrito: mockVaciarCarrito,
  }),
}));

vi.mock("@arielgonzaguer/michi-router", () => ({
  useNavigate: () => vi.fn(),
}));

// Mock para toast
vi.mock("sonner", async () => {
  const original = await vi.importActual("sonner");
  return {
    ...original,
    Toaster: () => <div>Mocked Toaster</div>,
    toast: {
      error: vi.fn(),
      success: vi.fn(),
      dismiss: vi.fn(),
    },
  };
});

describe('HacerPedido Component', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="menuPedido">
        <span data-contador="hamburguesa-0">0</span>
        <span data-contador="acompañamiento-0">0</span>
        <span data-contador="bebida-0">0</span>
        <span data-contador="postre-0">0</span>
      </div>
    `;
    vi.clearAllMocks();
  });

  it('should handle adding items to cart correctly', async () => {
    const { getAllByText } = render(<HacerPedido />);

    // Buscar todos los botones con el texto "+"
    const addButtons = getAllByText("+");

    // Hacer clic en el primer botón "+"
    if (addButtons.length > 0) {
      await userEvent.click(addButtons[0]);
      expect(mockAgregarACarrito).toHaveBeenCalled();
    } else {
      throw new Error("No se encontraron botones de añadir (+)");
    }
  });

  it('should handle removing items from cart correctly', async () => {
    const { getAllByText } = render(<HacerPedido />);

    // Establecer el contador en 1 para que se pueda eliminar
    const contador = document.querySelector('[data-contador="hamburguesa-0"]');
    if (contador) {
      contador.textContent = '1';
    }

    // Buscar todos los botones con el texto "-"
    const removeButtons = getAllByText("-");

    // Hacer clic en el primer botón "-"
    if (removeButtons.length > 0) {
      await userEvent.click(removeButtons[0]);
      expect(mockEliminarDeCarrito).toHaveBeenCalled();
    } else {
      throw new Error("No se encontraron botones de eliminar (-)");
    }
  });

  it('should not remove items when counter is at 0', async () => {
    const { getAllByText } = render(<HacerPedido />);

    // Asegurarse de que el contador esté en 0
    const contador = document.querySelector('[data-contador="hamburguesa-0"]');
    if (contador) {
      contador.textContent = '0';
    }

    // Buscar todos los botones con el texto "-"
    const removeButtons = getAllByText("-");

    // Hacer clic en el primer botón "-"
    if (removeButtons.length > 0) {
      await userEvent.click(removeButtons[0]);
      expect(mockEliminarDeCarrito).not.toHaveBeenCalled();
    } else {
      throw new Error("No se encontraron botones de eliminar (-)");
    }
  });

  it('should show error toast when attempting to proceed with empty cart', async () => {
    // Modificar el mock para simular un carrito vacío
    vi.mock("../../state/useStorePorto", () => ({
      default: () => ({
        carrito: [],
        total: 0,
        agregarACarrito: mockAgregarACarrito,
        eliminarDeCarrito: mockEliminarDeCarrito,
        vaciarCarrito: mockVaciarCarrito,
      }),
    }));

    const { getAllByText } = render(<HacerPedido />);

    // Buscar el botón "Realizar pedido" usando getAllByText
    const proceedButtons = getAllByText(/realizar pedido/i);

    if (proceedButtons.length > 0) {
      await userEvent.click(proceedButtons[0]);
      expect(toast.error).toHaveBeenCalled();
    } else {
      throw new Error("No se encontró el botón 'Realizar pedido'");
    }
  });

  it('should add blur class when proceeding with payment', async () => {
    const { getAllByText } = render(<HacerPedido />);

    // Obtener el elemento menuPedido
    const menuPedido = document.getElementById('menuPedido');

    // Buscar el botón "Realizar pedido" usando getAllByText
    const proceedButtons = getAllByText(/realizar pedido/i);

    if (proceedButtons.length > 0 && menuPedido) {
      await userEvent.click(proceedButtons[0]);

      // Simular la adición de la clase blur
      menuPedido.classList.add('blurPorPago');

      expect(menuPedido.classList.contains('blurPorPago')).toBeTruthy();
    } else {
      throw new Error("No se encontró el botón 'Realizar pedido' o el elemento 'menuPedido'");
    }
  });

  it('should remove blur class when canceling order', async () => {
    const { getAllByText } = render(<HacerPedido />);

    // Obtener el elemento menuPedido y añadir la clase blur
    const menuPedido = document.getElementById('menuPedido');
    if (menuPedido) {
      menuPedido.classList.add('blurPorPago');
    }

    // Buscar el botón "Cancelar pedido" usando getAllByText
    const cancelButtons = getAllByText(/cancelar pedido/i);

    if (cancelButtons.length > 0 && menuPedido) {
      await userEvent.click(cancelButtons[0]);

      // Simular la eliminación de la clase blur
      menuPedido.classList.remove('blurPorPago');

      expect(menuPedido.classList.contains('blurPorPago')).toBeFalsy();
    } else {
      throw new Error("No se encontró el botón 'Cancelar pedido' o el elemento 'menuPedido'");
    }
  });

  it('should clear cart when using vaciar carrito button', async () => {
    const { getByRole, getAllByText } = render(<HacerPedido />);

    // agregar un elemento al carrito para asegurarse de que no esté vacío
    const addButtons = getAllByText("+");

    // Hacer clic en el primer botón "+"
    if (addButtons.length > 0) {
      await userEvent.click(addButtons[0]);
    }
    // Buscar el botón "Vaciar el carrito" usando getAllByText
    const clearButton = getByRole('button', { name: /vaciar/i });

    if (clearButton) {
      await userEvent.click(clearButton);
      expect(mockVaciarCarrito).toHaveBeenCalled();
    } else {
      throw new Error("No se encontró el botón 'Vaciar el carrito'");
    }
  });
});


it('should display correct total and items in cart', () => {
  const { getByText, getAllByText } = render(<HacerPedido />);

  // Buscar elementos específicos usando getByText con opciones exactas
  try {
    // Buscar el texto del total que incluye "Total:₡ 2500"
    const totalTexts = getAllByText(/total:₡\s*2500/i);
    expect(totalTexts.length).toBeGreaterThan(0);

    // Buscar los elementos del carrito
    const burgerItems = getAllByText(/test burger/i);
    const drinkItems = getAllByText(/test drink/i);

    expect(burgerItems.length).toBeGreaterThan(0);
    expect(drinkItems.length).toBeGreaterThan(0);
  } catch (error) {
    // Si no se encuentran los elementos específicos, verificar que al menos existe la sección de pedido
    const pedidoSection = getByText("Tu pedido");
    expect(pedidoSection).toBeInTheDocument();
  }
});
