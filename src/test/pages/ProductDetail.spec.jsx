import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from '../../pages/ProductDetail';
import CartProvider from '../../context/CartProvider';
import products from '../../data/products';

describe('ProductDetail (ruta dinámica)', () => {
    beforeEach(() => {
    localStorage.clear();
    });

    const renderAt = (path) =>
    render(
        <MemoryRouter initialEntries={[path]}>
        <CartProvider>
            <Routes>
            <Route path="/products/:id" element={<ProductDetail />} />
            </Routes>
        </CartProvider>
        </MemoryRouter>
    );

    it('muestra el producto que corresponde al id de la URL', () => {
    const product = products[0];
    renderAt(`/products/${product.id}`);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(product.name);
    expect(screen.getByText(product.description)).toBeTruthy();
    });

    it('muestra "Producto no encontrado" si el id no existe', () => {
    renderAt('/products/999');
    expect(screen.getByText('Producto no encontrado')).toBeTruthy();
    });

    it('rechaza un id con caracteres extra en la URL', () => {
    renderAt('/products/1abc');
    expect(screen.getByText('Producto no encontrado')).toBeTruthy();
    });

    it('deshabilita el botón cuando el producto no tiene stock', () => {
    const agotado = products.find((p) => p.stock === 0);
    renderAt(`/products/${agotado.id}`);

    expect(screen.getByRole('button', { name: 'Agotado' })).toBeDisabled();
    });
});