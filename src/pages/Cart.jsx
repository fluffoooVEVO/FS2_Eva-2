import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatPrice';

function Cart() {
    const { cart, removeFromCart, changeQuantity, clearCart, totalPrice } = useCart();

    return (
        <Container className="my-5">
            <h1>Carrito de compras</h1>

            {cart.length === 0 ? (
                <div>
                    <p>Tu carrito está vacío.</p>
                    <Button as={Link} to="/products">
                        Volver al catálogo
                    </Button>
                </div>
            ) : (
                <div>
                    {cart.map((product) => (
                        <Card className="mb-3" key={product.id}>
                            <Card.Body>
                                <h5>{product.name}</h5>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="img-fluid rounded mb-3"
                                    style={{ maxWidth: '150px' }}
                                />
                                <p>Precio: {formatPrice(product.price)}</p>
                                <p>Cantidad: {product.quantity}</p>
                                <p>Subtotal: {formatPrice(product.price * product.quantity)}</p>

                                <div className="d-flex gap-2">
                                    <Button
                                        variant="secondary"
                                        onClick={() => changeQuantity(product.id, -1)}
                                        disabled={product.quantity <= 1}
                                    >
                                        -
                                    </Button>

                                    <Button
                                        variant="secondary"
                                        onClick={() => changeQuantity(product.id, 1)}
                                        disabled={product.quantity >= product.stock}
                                    >
                                        +
                                    </Button>

                                    <Button
                                        variant="danger"
                                        onClick={() => removeFromCart(product.id)}
                                    >
                                        Eliminar
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}

                    <h4>Total: {formatPrice(totalPrice)}</h4>

                    <Button variant="danger" onClick={clearCart}>
                        Vaciar carrito
                    </Button>

                    <Button as={Link} to="/products" className="ms-2">
                        Seguir comprando
                    </Button>
                </div>
            )}
        </Container>
    );
}

export default Cart;
