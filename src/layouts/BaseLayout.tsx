import { ReactNode } from 'react';
// componentes
import Navegacion from "../components/Navegacion"

export default function BaseLayout({ children }: { children: ReactNode }) {

  return (
    <section>
      <Navegacion />

      {children}

    </section>
  )
}