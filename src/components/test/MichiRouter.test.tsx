import { render } from "@testing-library/react";
import MichiRouter from "../MichiRouter";
import { vi } from "vitest";

vi.mock("@arielgonzaguer/michi-router", () => ({
  RouterProvider: vi.fn(({ routes, layout, children }) => (
    <div data-testid="router-provider">
      <div data-testid="routes">{JSON.stringify(routes)}</div>
      <div data-testid="layout">{layout.name}</div>
      {children}
    </div>
  )),
}));

vi.mock("../pages/index", () => () => <div>Index Page</div>);
vi.mock("../pages/ingredientes", () => () => <div>Ingredientes Page</div>);
vi.mock("../pages/preguntasFrecuentes", () => () => <div>Preguntas Frecuentes Page</div>);
vi.mock("../pages/pago-ficticio", () => () => <div>Pago Ficticio Page</div>);
vi.mock("../NotFound404", () => ({ default: () => <div>Not Found 404</div> }));
vi.mock("../layouts/BaseLayout", () => function BaseLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
});

describe("Componente MichiRouter", () => {
  it("renderiza RouterProvider con las rutas y el layout correctos", () => {
    const { getByTestId } = render(<MichiRouter />);

    const routerProvider = getByTestId("router-provider");
    const routes = getByTestId("routes");
    const layout = getByTestId("layout");

    expect(routerProvider).toBeInTheDocument();
    expect(JSON.parse(routes.textContent || "")).toEqual([
      { path: "/", component: expect.any(Object) },
      { path: "/ingredientes", component: expect.any(Object) },
      { path: "/preguntas-frecuentes", component: expect.any(Object) },
      { path: "/pago-ficticio", component: expect.any(Object) },
    ]);
    expect(layout.textContent).toBe("BaseLayout");
  });

  it("renderiza NotFound404 como hijo de RouterProvider", () => {
    const { getByText } = render(<MichiRouter />);
    const notFound404 = getByText("Not Found 404");
    expect(notFound404).toBeInTheDocument();
    
  });
});