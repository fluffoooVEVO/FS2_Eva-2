import { useState } from 'react';
import { Container } from 'react-bootstrap';
import products from '../data/products';
import Text from '../components/atoms/Text';
import FilterBar from '../components/organisms/FilterBar';
import ProductGrid from '../components/organisms/ProductGrid';

const FACTIONS = ['Todas', 'Imperium', 'Chaos', 'Orks', 'Aeldari', "T'au"];

function Catalog() {
    const [faction, setFaction] = useState('Todas');

    const visibleProducts =
    faction === 'Todas' ? products : products.filter((p) => p.faction === faction);

    const handleAdd = (product) => {
    // Temporal: se reemplaza por addToCart del CartContext (Persona 1)
    console.log('Agregar al carrito:', product.name);
    };

    return (
    <Container className="my-5">
        <Text variant="h1" className="mb-4">Catálogo de armas</Text>
        <FilterBar factions={FACTIONS} selected={faction} onSelect={setFaction} />
        <ProductGrid products={visibleProducts} onAdd={handleAdd} />
    </Container>
    );
}

export default Catalog;