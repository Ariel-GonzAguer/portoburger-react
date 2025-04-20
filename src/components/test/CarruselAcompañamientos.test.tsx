import { render, screen } from "@testing-library/react";
import CarruselAcompañamientos from "../CarruselAcompañamientos";
import acompañamientos from "../../data/acompañamientos";
import { vi } from "vitest";

// Mock dependencies
vi.mock("../hooks/useManageSlickSlides", () => ({
  default: vi.fn(),
}));

vi.mock("react-slick", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mock-slider">{children}</div>
  ),
}));

vi.mock("../utils/settingsSlider", () => ({
  __esModule: true,
  default: {},
}));

vi.mock("../components/Slide", () => ({
  __esModule: true,
  default: ({ h4, p, img, alt }: any) => (
    <div data-testid="mock-slide">
      <h4>{h4}</h4>
      <p>{p}</p>
      <img src={img} alt={alt} />
    </div>
  ),
}));

describe("CarruselAcompañamientos", () => {
  it("renders a slider with the correct number of slides", () => {
    render(<CarruselAcompañamientos />);

    // Check if the slider is rendered
    const slider = screen.getByTestId("mock-slider");
    expect(slider).toBeInTheDocument();

    // Check if the correct number of slides are rendered
    const slides = screen.getAllByTestId("mock-slide");
    expect(slides).toHaveLength(acompañamientos.length);
  });

  it("renders slide content correctly", () => {
    render(<CarruselAcompañamientos />);

    acompañamientos.forEach((slide) => {
      expect(screen.getByText((_, element) => {
        const hasText = (node: Element) => node.textContent === slide.h4;
        const nodeHasText = hasText(element!);
        const childrenDontHaveText = Array.from(element!.children).every(
          (child) => !hasText(child)
        );
        return nodeHasText && childrenDontHaveText;
      })).toBeInTheDocument();

      expect(screen.getByText((_, element) => {
        const hasText = (node: Element) => node.textContent === slide.p;
        const nodeHasText = hasText(element!);
        const childrenDontHaveText = Array.from(element!.children).every(
          (child) => !hasText(child)
        );
        return nodeHasText && childrenDontHaveText;
      })).toBeInTheDocument();

      expect(screen.getByAltText(slide.alt)).toHaveAttribute("src", slide.img);
    });
  });
});