import { Container } from 'react-bootstrap';
import Text from '../components/atoms/Text';
import ProductGrid from '../components/organisms/ProductGrid';
import { getProducts } from '../data/products';
import { useCart } from '../context/CartContext';

function Offers() {
    const { addToCart } = useCart();
    const offers = getProducts().filter((p) => p.previousPrice > p.price);

    return (
    <Container className="my-5">
        <Text variant="h1" className="mb-2">Ofertas</Text>
        <Text variant="p" className="text-muted mb-4">
        Armas con precio rebajado por tiempo limitado.
        </Text>
        <ProductGrid
        products={offers}
        onAdd={addToCart}
        emptyMessage="No hay ofertas disponibles por ahora."
        />
    </Container>
    );
}

export default Offers;