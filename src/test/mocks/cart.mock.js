import { mockProducts } from './products.mock';

export const mockCartItems = [
  { ...mockProducts[0], quantity: 2 },
  { ...mockProducts[2], quantity: 1 },
];

export function createCartMock(cart = mockCartItems) {
  return {
    cart,
    addToCart: jasmine.createSpy('addToCart'),
    removeFromCart: jasmine.createSpy('removeFromCart'),
    changeQuantity: jasmine.createSpy('changeQuantity'),
    clearCart: jasmine.createSpy('clearCart'),
    totalItems: cart.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
  };
}