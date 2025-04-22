## PENDIENTE

- [ ] Optimizar imagenes.
- [ ] Crear readme.
- [ ] Desplegar en Vercel.
- [ ] Agregar responsividad.

## Para testing con vitest y react-testing-library:

- setup.ts:

  ```
  import "@testing-library/jest-dom";
  import { vi } from "vitest";

  Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
  })),
  });
  ```

- vite.config.js:

  ```
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import { configDefaults } from 'vitest/config';

  // https://vite.dev/config/
  export default defineConfig({
    plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/components/test/setup.ts',
      exclude: [...configDefaults.exclude, 'e2e/*']
    }
  });

  ```

- dependencias DEV:

  ```
  "@testing-library/jest-dom": "^6.6.3",
  "@testing-library/react": "^16.3.0",
  "@types/jest": "^29.5.14",
  "@types/testing-library__react": "^10.2.0",
  "globals": "^15.15.0",
  "jsdom": "^26.1.0",
  "vitest": "^3.1.1"
  ```

- scripts:
  ```
    "test": "vitest",
    "test:ui": "vitest --ui" // para ver los resultados en el navegador
  ```
