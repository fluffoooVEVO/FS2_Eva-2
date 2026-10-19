import { screen } from '@testing-library/react';
import ProductGrid from '../../../components/organisms/ProductGrid';
import { renderWithRouter } from '../../helpers/renderWithRouter';
import { mockProducts } from '../../mocks/products.mock';

describe('ProductGrid', () => {
  it('renderiza una tarjeta por cada producto recibido', () => {
    renderWithRouter(<ProductGrid products={mockProducts} onAdd={() => {}} />);

    expect(screen.getAllByRole('button', { name: 'Ver detalle' }).length).toBe(mockProducts.length);
    expect(screen.getByText('Chainaxe de Prueba')).toBeTruthy();
  });

  it('muestra un mensaje cuando la lista de productos está vacía', () => {
    renderWithRouter(<ProductGrid products={[]} onAdd={() => {}} />);

    expect(screen.getByText('No hay armas para esta facción.')).toBeTruthy();
    expect(screen.queryByRole('button', { name: 'Ver detalle' })).toBeNull();
  });
});
