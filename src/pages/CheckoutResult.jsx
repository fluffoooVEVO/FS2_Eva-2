import { Container, Row, Col, Alert, ListGroup } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';
import { formatPrice } from '../utils/formatPrice';

function CheckoutResult({ status }) {
    const { state } = useLocation();
    const order = state?.order;
    const success = status === 'success';

    if (!order) {
    return (
        <Container className="my-5">
        <Text variant="h1" className="h3 mb-3">No hay una compra para mostrar</Text>
        <Button as={Link} to="/products" variant="primary">Ir al catálogo</Button>
        </Container>
    );
    }

    return (
    <Container className="my-5">
        <Row className="justify-content-center">
        <Col xs={12} md={10} lg={7}>
            <Alert variant={success ? 'success' : 'danger'}>
            <Text variant="h1" className="h4">
                {success ? '¡Compra realizada con éxito!' : 'No se pudo realizar el pago'}
            </Text>
            <Text variant="p" className="mb-0">
                {success
                ? `Orden N° ${order.id}. Enviaremos el detalle a ${order.customer.email}.`
                : 'Tu carrito se mantuvo intacto. Puedes intentarlo nuevamente.'}
            </Text>
            </Alert>

            <Text variant="h2" className="h5">Resumen</Text>
            <ListGroup className="mb-3">
            {order.items.map((item) => (
                <ListGroup.Item key={item.id} className="d-flex justify-content-between">
                <span>{item.name} × {item.quantity}</span>
                <span>{formatPrice(item.price * item.quantity)}</span>
                </ListGroup.Item>
            ))}
            <ListGroup.Item className="d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>{formatPrice(order.total)}</span>
            </ListGroup.Item>
            </ListGroup>
            <Text variant="p" className="text-muted">
            Envío a: {order.customer.address}, {order.customer.commune}
            </Text>

            <div className="d-flex flex-wrap gap-2">
            {success ? (
                <Button as={Link} to="/products" variant="primary">Seguir comprando</Button>
            ) : (
                <>
                <Button as={Link} to="/checkout" variant="danger">Reintentar pago</Button>
                <Button as={Link} to="/cart" variant="outline-secondary">Volver al carrito</Button>
                </>
            )}
            </div>
        </Col>
        </Row>
    </Container>
    );
}

export default CheckoutResult;