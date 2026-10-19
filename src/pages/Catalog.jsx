import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getProducts } from '../data/products';
import Text from '../components/atoms/Text';
import SearchBar from '../components/molecules/SearchBar';
import FilterBar from '../components/organisms/FilterBar';
import ProductGrid from '../components/organisms/ProductGrid';
import { useCart } from '../context/CartContext';

const FACTIONS = ['Todas', 'Imperium', 'Chaos', 'Orks', 'Aeldari', "T'au"];

function Catalog() {
    const products = getProducts();
    const [faction, setFaction] = useState('Todas');
    const [query, setQuery] = useState('');
    const { addToCart, totalItems } = useCart();

    const normalizedQuery = query.trim().toLowerCase();

    const visibleProducts = products.filter((p) => {
    const matchesFaction = faction === 'Todas' || p.faction === faction;
    const matchesQuery = p.name.toLowerCase().includes(normalizedQuery);
    return matchesFaction && matchesQuery;
    });

    return (
    <Container className="my-5">
        <Text variant="h1" className="mb-4">Catálogo de armas</Text>
        <Link to="/cart" className="btn btn-primary mb-4">
        Ver carrito ({totalItems})
        </Link>
        <SearchBar value={query} onChange={setQuery} />
        <FilterBar factions={FACTIONS} selected={faction} onSelect={setFaction} />
        <ProductGrid
        products={visibleProducts}
        onAdd={addToCart}
        emptyMessage="No se encontraron armas con esos filtros."
        />
    </Container>
    );
}

export default Catalog;