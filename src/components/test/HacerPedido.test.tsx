import { render, screen, fireEvent } from "@testing-library/react";
import HacerPedido from "../HacerPedido";
import useStorePorto from "../../state/useStorePorto";
import { vi, Mock, describe, it, beforeEach, expect } from "vitest";
import { toast } from "sonner";
import { useNavigate } from "@arielgonzaguer/michi-router";

// Mock dependencies
vi.mock("../state/useStorePorto", () => ({
  default: vi.fn(() => ({
    carrito: [],
    total: 0,
    agregarACarrito: vi.fn(),
    eliminarDeCarrito: vi.fn(),
    vaciarCarrito: vi.fn(),
  })),
}));

vi.mock("@arielgonzaguer/michi-router", () => ({
  useNavigate: vi.fn(() => vi.fn()),
}));

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

describe("HacerPedido Component", () => {
  const mockNavigate = vi.fn();
  const mockStore = {
    carrito: [] as { id: string; nombre: string; cantidad: number }[],
    total: 0,
    agregarACarrito: vi.fn(),
    eliminarDeCarrito: vi.fn(),
    vaciarCarrito: vi.fn(),
  };

  beforeEach(() => {
    (useStorePorto as unknown as Mock).mockReturnValue(mockStore);
    (useNavigate as Mock).mockReturnValue(mockNavigate);
    vi.clearAllMocks();
  });
  it("renders the component correctly", () => {
    render(<HacerPedido />);
    expect(screen.getByText("¡Hacé tu pedido!")).toBeInTheDocument();
    expect(screen.getByText("Elegí tu hamburguesa")).toBeInTheDocument();
    expect(screen.getByText("Elegí tus acompañamientos")).toBeInTheDocument();
    expect(screen.getByText("Elegí tus bebidas")).toBeInTheDocument();
    expect(screen.getByText("Elegí tus postres")).toBeInTheDocument();
  });

  it("shows a message when the cart is empty", () => {
    render(<HacerPedido />);
    expect(screen.getByText("No hay productos en el carrito")).toBeInTheDocument();
  });

  it("calls agregarACarrito when adding a product", () => {
    render(<HacerPedido />);
    const addButton = screen.getAllByText("+")[0];
    fireEvent.click(addButton);
    expect(mockStore.agregarACarrito).toHaveBeenCalled();
  });

  it("calls eliminarDeCarrito when removing a product", () => {
    render(<HacerPedido />);
    const removeButton = screen.getAllByText("-")[0];
    fireEvent.click(removeButton);
    expect(mockStore.eliminarDeCarrito).toHaveBeenCalled();
  });

  it("shows an error toast when proceeding with payment and the cart is empty", () => {
    render(<HacerPedido />);
    const proceedButton = screen.getByText("Realizar pedido");
    fireEvent.click(proceedButton);
    expect(toast.error).toHaveBeenCalledWith("No hay productos en el carrito", {
      description: "Agregá productos al carrito para proceder con el pago",
      duration: 5000,
    });
  });

  it("navigates to payment page when proceeding with payment and the cart is not empty", () => {
    mockStore.carrito = [{ id: "1", nombre: "Hamburguesa", cantidad: 1 }];
    render(<HacerPedido />);
    const proceedButton = screen.getByText("Realizar pedido");
    fireEvent.click(proceedButton);
    expect(toast.success).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith("/pago-ficticio");
  });

  it("calls vaciarCarrito when clicking the 'Vaciar el carrito' button", () => {
    mockStore.carrito = [{ id: "1", nombre: "Hamburguesa", cantidad: 1 }];
    render(<HacerPedido />);
    const emptyCartButton = screen.getByText("Vaciar el carrito");
    fireEvent.click(emptyCartButton);
    expect(mockStore.vaciarCarrito).toHaveBeenCalled();
  });
});