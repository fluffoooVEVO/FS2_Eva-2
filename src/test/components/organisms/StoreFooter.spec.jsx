import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import StoreFooter from '../../../components/organisms/StoreFooter';

describe('StoreFooter', () => {
    it('muestra la informacion de la tienda', () => {
        render(
            <MemoryRouter>
                <StoreFooter />
            </MemoryRouter>
        );
        expect(
            screen.getByRole('heading', {
                name: 'WH40K Emperor Store'
            })
        ).toBeTruthy();
        expect(
            screen.getByText(/Tienda de armas y equipamiento/)
        ).toBeTruthy();
    });
    it('muestra los enlaces de navegacion correctamente', () => {
        render(
            <MemoryRouter>
                <StoreFooter />
            </MemoryRouter>
        );
        expect(
            screen.getByRole('link', { name: 'Inicio' })
        ).toHaveAttribute('href', '/');
        expect(
            screen.getByRole('link', { name: 'Catálogo' })
        ).toHaveAttribute('href', '/products');
        expect(
            screen.getByRole('link', { name: 'Carrito' })
        ).toHaveAttribute('href', '/cart');
        expect(
            screen.getByRole('link', { name: 'Contacto' })
        ).toHaveAttribute('href', '/contact');
    });
    it('permite navegar al catalogo desde el Footer', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <StoreFooter />
                <Routes>
                    <Route
                        path="/"
                        element={<p>Inicio de prueba</p>}
                    />
                    <Route
                        path="/products"
                        element={<p>Catalogo abierto</p>}
                    />
                </Routes>
            </MemoryRouter>
        );
        fireEvent.click(
            screen.getByRole('link', { name: 'Catálogo' })
        );
        expect(
            screen.getByText('Catalogo abierto')
        ).toBeTruthy();
    });
});
