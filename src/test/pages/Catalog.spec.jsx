import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Catalog from '../../pages/Catalog';
import CartProvider from '../../context/CartProvider';
import products from '../../data/products';

describe('Catalog (integración)', () => {
    beforeEach(() => {
    localStorage.clear();
    });

    const renderCatalog = () =>
    render(
        <MemoryRouter>
        <CartProvider>
            <Catalog />
        </CartProvider>
        </MemoryRouter>
    );

    const getCardTitles = () => screen.getAllByRole('heading', { level: 5 });

    it('muestra todas las armas al inicio', () => {
    renderCatalog();
    expect(getCardTitles().length).toBe(products.length);
    });

    it('al filtrar por Orks muestra solo armas de esa facción', () => {
    renderCatalog();
    const expected = products.filter((p) => p.faction === 'Orks');

    fireEvent.click(screen.getByRole('button', { name: 'Orks' }));

    const titles = getCardTitles();
    expect(titles.length).toBe(expected.length);
    expect(titles[0]).toHaveTextContent(expected[0].name);
    expect(screen.queryByText('Bolter')).toBeNull();
    });
});