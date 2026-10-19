import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';

describe('Home', () => {
    it('muestra correctamente la pagina de inicio', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        expect(
            screen.getByRole('heading', {
                name: 'Bienvenido a WH40K Emperor Store'
            })
        ).toBeTruthy();
        expect(
            screen.getByRole('button', { name: 'Ver catálogo' })
        ).toBeTruthy();
    });
    it('permite navegar al catalogo desde Home', async () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/products"
                        element={<p>Catalogo abierto</p>}
                    />
                </Routes>
            </MemoryRouter>
        );
        fireEvent.click(
            screen.getByRole('button', { name: 'Ver catálogo' })
        );
        expect(
            await screen.findByText('Catalogo abierto')
        ).toBeTruthy();
    });
    it('permite navegar a Contacto desde Home', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/contact"
                        element={<p>Formulario de contacto abierto</p>}
                    />
                </Routes>
            </MemoryRouter>
        );
        fireEvent.click(
            screen.getByRole('button', { name: 'Contacto' })
        );
        expect(
            screen.getByText('Formulario de contacto abierto')
        ).toBeTruthy();
    });
});
