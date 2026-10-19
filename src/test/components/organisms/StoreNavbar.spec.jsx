import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CartProvider from '../../../context/CartProvider';
import StoreNavbar from '../../../components/organisms/StoreNavbar';
import { useCart } from '../../../context/CartContext';


function AgregarProductoPrueba() {
    const { addToCart } = useCart();
    const productoPrueba = {
        id: 1,
        name: 'Bolter',
        price: 45000,
        stock: 5
    };
    return (
        <button onClick={() => addToCart(productoPrueba)}>
            Agregar Bolter
        </button>
    );
}

describe('StoreNavbar', () => {
    beforeEach(() => {
        localStorage.clear();
    });
    it('muestra el nombre de la tienda y los enlaces de navegación', () => {
        render(
            <MemoryRouter>
                <CartProvider>
                    <StoreNavbar />
                </CartProvider>
            </MemoryRouter>
        );
        expect(
            screen.getByText('WH40K Emperor Store')
        ).toBeTruthy();
        expect(
            screen.getByText('Inicio').closest('a')
        ).toHaveAttribute('href', '/');
        expect(
            screen.getByText('Catálogo').closest('a')
        ).toHaveAttribute('href', '/products');
        expect(
            screen.getByText('Contacto').closest('a')
        ).toHaveAttribute('href', '/contact');
    });
    it('actualiza el contador al agregar productos al carrito', () => {
        render(
            <MemoryRouter>
                <CartProvider>
                    <StoreNavbar />
                    <AgregarProductoPrueba />
                </CartProvider>
            </MemoryRouter>
        );
        expect(
            screen.getByText('Carrito (0)')
        ).toBeTruthy();
        fireEvent.click(
            screen.getByRole('button', { name: 'Agregar Bolter' })
        );
        expect(
            screen.getByText('Carrito (1)')
        ).toBeTruthy();
        fireEvent.click(
            screen.getByRole('button', { name: 'Agregar Bolter' })
        );
        expect(
            screen.getByText('Carrito (2)')
        ).toBeTruthy();
    });
    it('permite abrir y cerrar el menu de navegacion', () => {
        render(
            <MemoryRouter>
                <CartProvider>
                    <StoreNavbar />
                </CartProvider>
            </MemoryRouter>
        );
        const botonMenu = screen.getByRole('button', {
            name: 'Toggle navigation'
        });
        expect(botonMenu).toHaveClass('collapsed');
        fireEvent.click(botonMenu);
        expect(botonMenu).not.toHaveClass('collapsed');
        fireEvent.click(botonMenu);
        expect(botonMenu).toHaveClass('collapsed');
    });
});
