
import { render, screen, fireEvent } from '@testing-library/react';
import CartProvider from '../../context/CartProvider';
import { useCart } from '../../context/CartContext';

const productoPrueba = {
    id: 1,
    name: 'Bolter',
    price: 45000,
    stock: 5
};

function CarritoPrueba() {
    const { cart, addToCart, changeQuantity } = useCart();
    return (
        <div>
            <button onClick={() => addToCart(productoPrueba)}>
                Agregar
            </button>
            <button onClick={() => changeQuantity(productoPrueba.id, 1)}>
                Aumentar
            </button>
            <p>Cantidad: {cart[0]?.quantity ?? 0}</p>
            <p>Productos: {cart.length}</p>
            {cart.map((producto) => (
                <p key={producto.id}>{producto.name}</p>
            ))}
        </div>
    );
}

describe('CartProvider', () => {
    beforeEach(() => {
        localStorage.clear();
    });
    it('agrega un producto al carrito', () => {
        render(
            <CartProvider>
                <CarritoPrueba />
            </CartProvider>
        );
        expect(screen.getByText('Productos: 0')).toBeTruthy();
        fireEvent.click(
            screen.getByRole('button', { name: 'Agregar' })
        );
        expect(screen.getByText('Productos: 1')).toBeTruthy();
        expect(screen.getByText('Bolter')).toBeTruthy();
    });    
    it('no permite superar el stock disponible', () => {
        render(
            <CartProvider>
                <CarritoPrueba />
            </CartProvider>
        );
        fireEvent.click(
            screen.getByRole('button', { name: 'Agregar' })
        );
        const botonAumentar = screen.getByRole('button', {
            name: 'Aumentar'
        });
        for (let i = 0; i < 6; i++) {
            fireEvent.click(botonAumentar);
        }
        expect(screen.getByText('Cantidad: 5')).toBeTruthy();
    });
    it('guarda y recupera el carrito desde localStorage', () => {
        const { unmount } = render(
            <CartProvider>
                <CarritoPrueba />
            </CartProvider>
        );
        fireEvent.click(
            screen.getByRole('button', { name: 'Agregar' })
        );
        const carritoGuardado = JSON.parse(
            localStorage.getItem('wh40k-cart')
        );
        expect(carritoGuardado.length).toBe(1);
        expect(carritoGuardado[0].name).toBe('Bolter');
        unmount();
        render(
            <CartProvider>
                <CarritoPrueba />
            </CartProvider>
        );
        expect(screen.getByText('Productos: 1')).toBeTruthy();
        expect(screen.getByText('Bolter')).toBeTruthy();
        });
});
