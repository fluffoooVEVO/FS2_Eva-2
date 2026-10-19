import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import Text from '../atoms/Text';

function ProductGrid({ products, onAdd, emptyMessage = 'No hay armas para esta facción.' }) {
    if (products.length === 0) {
    return <Text variant="p" className="text-muted">{emptyMessage}</Text>;
    }

    return (
    <Row className="g-4">
        {products.map((product) => (
        <Col key={product.id} xs={12} md={6} lg={4} xl={3}>
            <ProductCard product={product} onAdd={onAdd} />
        </Col>
        ))}
    </Row>
    );

}

export default ProductGrid;