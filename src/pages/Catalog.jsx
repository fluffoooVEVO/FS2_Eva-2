import { useState } from 'react';
import { Container } from 'react-bootstrap';
import products from '../data/products';
import Text from '../components/atoms/Text';
import FilterBar from '../components/organisms/FilterBar';
import ProductGrid from '../components/organisms/ProductGrid';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const FACTIONS = ['Todas', 'Imperium', 'Chaos', 'Orks', 'Aeldari', "T'au"];

function Catalog() {
    const [faction, setFaction] = useState('Todas');

    const { addToCart, totalItems } = useCart();

    const visibleProducts =
    faction === 'Todas' ? products : products.filter((p) => p.faction === faction);

    const handleAdd = (product) => {
        addToCart(product);
    };

    return (
    <Container className="my-5">
        <Text variant="h1" className="mb-4">Catálogo de armas</Text>
        <Link to="/cart" className="btn btn-primary mb-4">
            Ver carrito ({totalItems})
        </Link>
        <FilterBar factions={FACTIONS} selected={faction} onSelect={setFaction} />
        <ProductGrid products={visibleProducts} onAdd={handleAdd} />
    </Container>
    );
}

export default Catalog;