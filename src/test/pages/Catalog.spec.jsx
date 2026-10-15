import { screen, fireEvent } from '@testing-library/react';
import Catalog from '../../pages/Catalog';
import products from '../../data/products';
import { renderWithRouter } from '../helpers/renderWithRouter';

describe('Catalog (página)', () => {
  // Estado inicial: el estado "faction" parte en "Todas", así que se ven todos los productos
  it('muestra todos los productos al iniciar', () => {
    renderWithRouter(<Catalog />);

    expect(screen.getAllByRole('button', { name: 'Ver detalle' }).length).toBe(products.length);
  });

  // Gestión de estado + evento: al elegir una facción cambia el estado y se filtra la lista
  it('filtra los productos al seleccionar una facción', () => {
    renderWithRouter(<Catalog />);
    const esperados = products.filter((p) => p.faction === 'Chaos');

    fireEvent.click(screen.getByRole('button', { name: 'Chaos' }));

    expect(screen.getAllByRole('button', { name: 'Ver detalle' }).length).toBe(esperados.length);
    expect(screen.getByText(esperados[0].name)).toBeTruthy();
    expect(screen.queryByText('Bolter')).toBeNull(); // un producto de otra facción desaparece
  });
});
