// MOCK: carrito falso.
// Imita lo que entregará el CartContext (agregar, quitar, cambiar cantidad, total) pero
// con "espías" de Jasmine (jasmine.createSpy): no hacen nada real, solo registran si
// fueron llamados y con qué argumentos. Así se prueba un componente sin el carrito real.
//
// OJO: los nombres (addToCart, removeFromCart, updateQuantity, total) deben coincidir con
// los del CartContext real que haga quien desarrolle el carrito. Si cambian, se ajustan aquí.

import { mockProducts } from './products.mock';

export const mockCartItems = [
  { ...mockProducts[0], quantity: 2 },
  { ...mockProducts[2], quantity: 1 },
];

export function createCartMock(items = mockCartItems) {
  return {
    items,
    addToCart: jasmine.createSpy('addToCart'),
    removeFromCart: jasmine.createSpy('removeFromCart'),
    updateQuantity: jasmine.createSpy('updateQuantity'),
    clearCart: jasmine.createSpy('clearCart'),
    totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
    total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  };
}
