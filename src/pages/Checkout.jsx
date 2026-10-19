import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';
import CheckoutForm from '../components/organisms/CheckoutForm';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatPrice';

function Checkout() {
    const { cart, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();

    if (cart.length === 0) {
    return (
        <Container className="my-5">
        <Text variant="h1" className="h3 mb-3">Tu carrito está vacío</Text>
        <Button as={Link} to="/products" variant="primary">Ir al catálogo</Button>
        </Container>
    );
    }

    const handleConfirm = (customer) => {
    const order = { id: Date.now(), customer, items: cart, total: totalPrice };

    if (customer.simulateError) {
        navigate('/checkout/error', { state: { order } });
        return;
    }

    clearCart();
    navigate('/checkout/exito', { state: { order } });
    };

    return (
    <Container className="my-5">
        <Text variant="h1" className="mb-4">Checkout</Text>
        <Row className="g-4">
        <Col xs={12} lg={7}>
            <Card className="shadow-sm">
            <Card.Body className="p-4">
                <Text variant="h2" className="h5 mb-3">Datos de envío</Text>
                <CheckoutForm onConfirm={handleConfirm} />
            </Card.Body>
            </Card>
        </Col>
        <Col xs={12} lg={5}>
            <Card className="shadow-sm">
            <Card.Body>
                <Text variant="h2" className="h5 mb-3">Resumen del pedido</Text>
                <ListGroup variant="flush">
                {cart.map((item) => (
                    <ListGroup.Item key={item.id} className="d-flex justify-content-between">
                    <span>{item.name} × {item.quantity}</span>
                    <span>{formatPrice(item.price * item.quantity)}</span>
                    </ListGroup.Item>
                ))}
                <ListGroup.Item className="d-flex justify-content-between fw-bold">
                    <span>Total</span>
                    <span>{formatPrice(totalPrice)}</span>
                </ListGroup.Item>
                </ListGroup>
            </Card.Body>
            </Card>
        </Col>
        </Row>
    </Container>
    );
}

export default Checkout;