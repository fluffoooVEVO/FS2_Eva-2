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

    const getCardTitles = () => screen.queryAllByRole('heading', { level: 5 });

    const search = (text) =>
    fireEvent.change(screen.getByLabelText('Buscar arma'), { target: { value: text } });

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

    it('combina la búsqueda por nombre con el filtro de facción', () => {
    renderCatalog();
    const bySearch = products.filter((p) => p.name.toLowerCase().includes('sword'));
    const bySearchAndChaos = bySearch.filter((p) => p.faction === 'Chaos');

    search('sword');
    expect(getCardTitles().length).toBe(bySearch.length);

    fireEvent.click(screen.getByRole('button', { name: 'Chaos' }));
    expect(getCardTitles().length).toBe(bySearchAndChaos.length);
    expect(screen.getByText('No se encontraron armas con esos filtros.')).toBeTruthy();
    });

    it('la búsqueda no distingue mayúsculas', () => {
    renderCatalog();

    search('BOLT');

    const titles = getCardTitles();
    expect(titles.length).toBe(1);
    expect(titles[0]).toHaveTextContent('Bolter');
    });
});