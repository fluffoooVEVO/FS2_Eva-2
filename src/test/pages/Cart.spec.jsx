import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CartProvider from '../../context/CartProvider';
import Cart from '../../pages/Cart';

describe('Cart', () => {
    beforeEach(() => {
        localStorage.clear();
    });
    it('muestra un mensaje cuando el carrito esta vacio', () => {
        render(
            <MemoryRouter>
                <CartProvider>
                    <Cart />
                </CartProvider>
            </MemoryRouter>
        );
        expect(
            screen.getByText('Tu carrito está vacío.')
        ).toBeTruthy();
        expect(
            screen.getByRole('button', { name: 'Volver al catálogo' })
        ).toHaveAttribute('href', '/products');
    });
    it('elimina un producto del carrito', () => {
        const productoPrueba = {
            id: 1,
            name: 'Bolter',
            price: 45000,
            stock: 5,
            quantity: 1,
            image: 'bolter.jpg'
        };
        localStorage.setItem(
            'wh40k-cart',
            JSON.stringify([productoPrueba])
        );
        render(
            <MemoryRouter>
                <CartProvider>
                    <Cart />
                </CartProvider>
            </MemoryRouter>
        );
        expect(screen.getByText('Bolter')).toBeTruthy();
        fireEvent.click(
            screen.getByRole('button', { name: 'Eliminar' })
        );
        expect(
            screen.getByText('Tu carrito está vacío.')
        ).toBeTruthy();
        expect(screen.queryByText('Bolter')).toBeNull();
    });
    it('calcula correctamente el total del carrito', () => {
        const productosPrueba = [
            {
                id: 1,
                name: 'Bolter',
                price: 45000,
                stock: 5,
                quantity: 2,
                image: 'bolter.jpg'
            },
            {
                id: 2,
                name: 'Espada',
                price: 12000,
                stock: 5,
                quantity: 1,
                image: 'espada.jpg'
            }
        ];
        localStorage.setItem(
            'wh40k-cart',
            JSON.stringify(productosPrueba)
        );
        render(
            <MemoryRouter>
                <CartProvider>
                    <Cart />
                </CartProvider>
            </MemoryRouter>
        );
        expect(screen.getByText('Bolter')).toBeTruthy();
        expect(screen.getByText('Espada')).toBeTruthy();
        expect(
            screen.getByText('Total: $102.000')
        ).toBeTruthy();
    });
});
