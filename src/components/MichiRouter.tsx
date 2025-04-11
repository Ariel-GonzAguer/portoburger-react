// enrutado
import { RouterProvider } from "@arielgonzaguer/michi-router";
import Index from "../pages/index";
import Ingredientes from "../pages/ingredientes";
import PreguntasFrecuentes from "../pages/preguntasFrecuentes";
import NotFoud404 from "./NotFound404";

const rutas = [
  { path: "/", component: <Index /> },
  { path: "/ingredientes", component: <Ingredientes /> },
  { path: "/preguntas-frecuentes", component: <PreguntasFrecuentes /> },
];

export default function MichiRouter() {
  return (
    <RouterProvider routes={rutas}>
      <NotFoud404 />
    </RouterProvider>
  );
}
