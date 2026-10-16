import { Container, Row, Col } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products';
import Image from '../components/atoms/Image';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';
import { useCart } from '../context/CartContext';

function ProductDetail() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
    return (
        <Container className="my-5">
        <Text variant="h1" className="mb-3">Producto no encontrado</Text>
        <Button as={Link} to="/products" variant="secondary">
            Volver al catálogo
        </Button>
        </Container>
    );
    }

    const agotado = product.stock === 0;
    const formattedPrice = product.price.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
    });

    return (
    <Container className="my-5">
        <Row className="g-4">
        <Col xs={12} md={6}>
            <Image
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow-sm w-100"
            loading="eager"
            />
        </Col>
        <Col xs={12} md={6}>
            <Text variant="h1" className="mb-2">{product.name}</Text>
            <div className="d-flex align-items-center gap-2 mb-3">
            <Text variant="span" className="badge bg-secondary">{product.faction}</Text>
            <Text variant="span" className="text-muted">{product.type}</Text>
            </div>
            <Text variant="p">{product.description}</Text>
            <Text variant="p" className="fs-3 fw-bold">{formattedPrice}</Text>
            <Text variant="p" className={agotado ? 'text-danger' : 'text-success'}>
            {agotado ? 'Sin stock' : `Stock disponible: ${product.stock}`}
            </Text>
            <div className="d-flex flex-wrap gap-2">
            <Button variant="primary" disabled={agotado} onClick={() => addToCart(product)}>
                {agotado ? 'Agotado' : 'Agregar al carrito'}
            </Button>
            <Button as={Link} to="/products" variant="outline-secondary">
                Volver al catálogo
            </Button>
            </div>
        </Col>
        </Row>
    </Container>
    );
}

export default ProductDetail;