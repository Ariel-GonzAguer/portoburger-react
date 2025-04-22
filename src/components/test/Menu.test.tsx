import { render, screen } from "@testing-library/react";
import Menu from "../Menu";

describe("Componente Menu", () => {
  render(<Menu />);
  it("renderiza la sección de Menú con el encabezado correcto", () => {
    const menuHeading = screen.getByRole("heading", { level: 2, name: /menú/i });
    expect(menuHeading).toBeInTheDocument();
  });

  it("renderiza la sección de Hamburguesas con el encabezado correcto", () => {
    render(<Menu />);
    const hamburguesasHeading = screen.getByRole("heading", { level: 3, name: /hamburguesas/i });
    expect(hamburguesasHeading).toBeInTheDocument();
  });

  it("renderiza la sección de Acompañamientos con el encabezado correcto", () => {
    render(<Menu />);
    const acompañamientosHeading = screen.getByRole("heading", { level: 3, name: /acompañamientos/i });
    expect(acompañamientosHeading).toBeInTheDocument();
  });

  it("renderiza la sección de Bebidas con el encabezado correcto", () => {
    render(<Menu />);
    const bebidasHeading = screen.getByRole("heading", { level: 3, name: /bebidas/i });
    expect(bebidasHeading).toBeInTheDocument();
  });

  it("renderiza la sección de Postres con el encabezado correcto", () => {
    render(<Menu />);
    const postresHeading = screen.getByRole("heading", { level: 3, name: /postres/i });
    expect(postresHeading).toBeInTheDocument();
  });
});