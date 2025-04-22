import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { RouterProvider } from "@arielgonzaguer/michi-router";

import Navegacion from "../Navegacion";

// Declaramos el mock para navigate
const navigateMock = vi.fn();

// Mockeamos el módulo completo
vi.mock("@arielgonzaguer/michi-router", () => {
  return {
    useNavigate: () => navigateMock,
    RouterProvider: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="router-provider">{children}</div>
    ),
    Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
      <a href={to} data-testid={`link-to-${to}`}>
        {children}
      </a>
    ),
  };
});

// Mock para window.location
Object.defineProperty(window, 'location', {
  value: {
    pathname: '/',
    hash: '',
  },
  writable: true,
});

describe("Componente Navegacion", () => {
  beforeEach(() => {
    // Limpiar todos los mocks antes de cada prueba
    vi.clearAllMocks();
    vi.restoreAllMocks();
  });

  it("renderiza los enlaces de navegación correctamente", () => {
    render(
      <RouterProvider routes={[{ path: "/", component: <Navegacion /> }]}>
        <Navegacion />
      </RouterProvider>
    );

    expect(screen.getByText("Hacé tu pedido")).toBeInTheDocument();
    expect(screen.getByText("Ingredientes")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Menú")).toBeInTheDocument();
    expect(screen.getByText("Preguntas Frecuentes")).toBeInTheDocument();
  });

  it("navega a la ruta correcta cuando se hace clic en los enlaces", () => {
    // Simulamos que estamos en una ruta diferente
    window.location.pathname = '/otra-ruta';
    
    render(
      <RouterProvider routes={[{ path: "/", component: <Navegacion /> }]}>
        <Navegacion />
      </RouterProvider>
    );

    // Hacé tu pedido (navega a / y hace scroll a #hacer-pedido)
    const enlacePedido = screen.getByText("Hacé tu pedido");
    fireEvent.click(enlacePedido);
    expect(navigateMock).toHaveBeenCalledWith("/");
    
    // Limpiamos el mock entre llamadas
    navigateMock.mockClear();
    
    // Simulamos que ahora estamos en la ruta principal
    window.location.pathname = '/';
    
    // Menú (ya estamos en /, solo hace scroll a #menu)
    const enlaceMenu = screen.getByText("Menú");
    fireEvent.click(enlaceMenu);
    // No debería llamar a navigate porque ya estamos en /
    expect(navigateMock).not.toHaveBeenCalled();
  });

  it("hace scroll al hash correcto cuando se hace clic en enlaces con hash", () => {
    // Configuramos los timers falsos antes de todo
    vi.useFakeTimers();
    
    // Mock para document.querySelector y scrollIntoView
    const scrollIntoViewMock = vi.fn();
    const querySelectorMock = vi.spyOn(document, 'querySelector').mockImplementation((selector) => {
      if (selector === "#hacer-pedido") {
        return {
          scrollIntoView: scrollIntoViewMock,
        } as unknown as Element;
      }
      return null;
    });

    // Simulamos que estamos en la ruta principal
    window.location.pathname = '/';
    
    render(
      <RouterProvider routes={[{ path: "/", component: <Navegacion /> }]}>
        <Navegacion />
      </RouterProvider>
    );

    // Hacé tu pedido (ya estamos en /, solo hace scroll a #hacer-pedido)
    const enlacePedido = screen.getByText("Hacé tu pedido");
    fireEvent.click(enlacePedido);
    
    // Avanzamos el tiempo para que se ejecute el setTimeout
    vi.runAllTimers(); // Ejecuta todos los timers pendientes
    
    // Verificamos que se llamó a querySelector con el hash correcto
    expect(querySelectorMock).toHaveBeenCalledWith("#hacer-pedido");
    // Verificamos que se llamó a scrollIntoView
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: "smooth" });
    
    // Restauramos los timers reales
    vi.useRealTimers();
  });
});
