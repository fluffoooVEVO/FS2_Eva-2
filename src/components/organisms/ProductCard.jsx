import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import CardBody from '../molecules/CardBody';

function ProductCard({ product, onAdd = () => {} }) {
    const agotado = product.stock === 0;

    return (
    <Card className="h-100 shadow-sm">
        <Image src={product.image} alt={product.name} className="card-img-top" />
        <Card.Body className="d-flex flex-column">
        <CardBody
            title={product.name}
            faction={product.faction}
            type={product.type}
            price={product.price}
            previousPrice={product.previousPrice}
        />
        <div className="mt-auto pt-3 d-flex gap-2">
            <Button as={Link} to={`/products/${product.id}`} variant="outline-secondary" size="sm">
            Ver detalle
            </Button>
            <Button variant="primary" size="sm" disabled={agotado} onClick={() => onAdd(product)}>
            {agotado ? 'Agotado' : 'Agregar'}
            </Button>
        </div>
        </Card.Body>
    </Card>
    );
}

export default ProductCard;