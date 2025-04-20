import { render } from "@testing-library/react";
import CarruselBebidas from "../CarruselBebidas";
import bebidas from "../../data/bebidas";
import { vi } from "vitest";

// Mock matchMedia
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // Deprecated
      removeListener: vi.fn(), // Deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

// Mock dependencies
vi.mock("../hooks/useManageSlickSlides", () => ({
  default: vi.fn(),
}));
vi.mock("react-slick", () => ({
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));
vi.mock("../utils/settingsSlider", () => ({}));
vi.mock("../styles/CarruselMenu.module.css", () => ({}));
vi.mock("./Slide", () => ({
  default: ({ h4, p, img, alt }: { h4: string; p: string; img: string; alt: string }) => (
    <div>
      <h4>{h4}</h4>
      <p>{p}</p>
      <img src={img} alt={alt} />
    </div>
  ),
}));

describe("CarruselBebidas", () => {
  it("renders without crashing", () => {
    const { container } = render(<CarruselBebidas />);
    expect(container).toBeInTheDocument();
  });

  it("renders the correct number of slides", () => {
    const { getAllByRole } = render(<CarruselBebidas />);
    const images = getAllByRole("img");
    expect(images.length).toBe(bebidas.length);
  });

  it("renders slide content correctly", () => {
    const { getByText, getByAltText } = render(<CarruselBebidas />);
    bebidas.forEach((slide) => {
      expect(getByText(slide.h4)).toBeInTheDocument();
      expect(getByText(slide.p)).toBeInTheDocument();
      expect(getByAltText(slide.alt)).toBeInTheDocument();
    });
  });
});