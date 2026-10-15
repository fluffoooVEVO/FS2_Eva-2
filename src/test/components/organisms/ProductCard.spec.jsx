import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductCard from '../../../components/organisms/ProductCard';

describe('ProductCard', () => {
    const mockProduct = {
    id: 1,
    name: 'Bolter',
    faction: 'Imperium',
    type: 'A distancia',
    price: 45000,
    stock: 10,
    description: 'Descripción de prueba',
    image: 'bolter.jpg',
    };

    let onAddSpy;

    beforeEach(() => {
    onAddSpy = jasmine.createSpy('onAdd');
    });

    const renderCard = (product = mockProduct) =>
    render(
        <MemoryRouter>
        <ProductCard product={product} onAdd={onAddSpy} />
        </MemoryRouter>
    );

    it('muestra nombre, facción y precio recibidos por props', () => {
    renderCard();
    expect(screen.getByText('Bolter')).toBeTruthy();
    expect(screen.getByText('Imperium')).toBeTruthy();
    expect(screen.getByText('$45.000')).toBeTruthy();
    });

    it('llama a onAdd con el producto al hacer clic en Agregar', () => {
    renderCard();
    fireEvent.click(screen.getByRole('button', { name: 'Agregar' }));
    expect(onAddSpy).toHaveBeenCalledTimes(1);
    expect(onAddSpy).toHaveBeenCalledWith(mockProduct);
    });

    it('muestra Agotado y deshabilita el botón cuando el stock es 0', () => {
    renderCard({ ...mockProduct, stock: 0 });
    const button = screen.getByRole('button', { name: 'Agotado' });
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(onAddSpy).not.toHaveBeenCalled();
    });

    it('el enlace Ver detalle apunta a la ruta del producto', () => {
    renderCard();
    const link = screen.getByText('Ver detalle').closest('a');
    expect(link.getAttribute('href')).toBe('/products/1');
    });
});