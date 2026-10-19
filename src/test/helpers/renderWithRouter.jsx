// Ayuda para las pruebas: renderiza un componente dentro de un Router.
// Necesario para cualquier componente que use <Link> o rutas (ej. ProductCard).

import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

export function renderWithRouter(ui, { route = '/' } = {}) {
  return render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>);
}
