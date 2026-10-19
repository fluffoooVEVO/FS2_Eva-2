const initialProducts = [
    {
    id: 1,
    name: 'Bolter',
    faction: 'Imperium',
    type: 'A distancia',
    price: 45000,
    stock: 10,
    description: 'Arma estándar de los Marines Espaciales. Dispara proyectiles autopropulsados de gran calibre.',
    image: 'https://placehold.co/400x300?text=Bolter',
    },
    {
    id: 2,
    name: 'Lascannon',
    faction: 'Imperium',
    type: 'Pesada',
    price: 120000,
    stock: 3,
    description: 'Cañón láser de alta potencia diseñado para perforar blindaje de vehículos.',
    image: 'https://placehold.co/400x300?text=Lascannon',
    },
    {
    id: 3,
    name: 'Plasma Gun',
    faction: 'Imperium',
    type: 'Especial',
    price: 85000,
    stock: 5,
    description: 'Dispara plasma sobrecalentado. Muy potente, pero con riesgo de sobrecarga.',
    image: 'https://placehold.co/400x300?text=Plasma+Gun',
    },
    {
    id: 4,
    name: 'Meltagun',
    faction: 'Imperium',
    type: 'Especial',
    price: 78000,
    stock: 0,
    description: 'Arma térmica de corto alcance capaz de fundir blindaje pesado.',
    image: 'https://placehold.co/400x300?text=Meltagun',
    },
    {
    id: 5,
    name: 'Chainsword',
    faction: 'Imperium',
    type: 'Cuerpo a cuerpo',
    price: 38000,
    stock: 12,
    description: 'Espada con dientes motorizados que giran a gran velocidad.',
    image: 'https://placehold.co/400x300?text=Chainsword',
    },
    {
    id: 6,
    name: 'Power Sword',
    faction: 'Imperium',
    type: 'Cuerpo a cuerpo',
    price: 95000,
    stock: 4,
    description: 'Hoja envuelta en un campo de energía que corta casi cualquier material.',
    image: 'https://placehold.co/400x300?text=Power+Sword',
    },
    {
    id: 7,
    name: 'Lasgun',
    faction: 'Imperium',
    type: 'A distancia',
    price: 18000,
    stock: 25,
    description: 'Rifle láser confiable y fácil de mantener, usado por la Guardia Imperial.',
    image: 'https://placehold.co/400x300?text=Lasgun',
    },
    {
    id: 8,
    name: 'Chainaxe',
    faction: 'Chaos',
    type: 'Cuerpo a cuerpo',
    price: 42000,
    stock: 8,
    description: 'Hacha motorizada de diseño brutal, preferida por los guerreros del Caos.',
    image: 'https://placehold.co/400x300?text=Chainaxe',
    },
    {
    id: 9,
    name: 'Reaper Autocannon',
    faction: 'Chaos',
    type: 'Pesada',
    price: 110000,
    stock: 2,
    description: 'Autocañón de doble cañón con gran cadencia de fuego.',
    image: 'https://placehold.co/400x300?text=Reaper+Autocannon',
    },
    {
    id: 10,
    name: 'Big Shoota',
    faction: 'Orks',
    type: 'Pesada',
    price: 35000,
    stock: 15,
    description: 'Ametralladora ruidosa y poco precisa, pero con muchísimas balas.',
    image: 'https://placehold.co/400x300?text=Big+Shoota',
    },
    {
    id: 11,
    name: 'Shuriken Catapult',
    faction: 'Aeldari',
    type: 'A distancia',
    price: 68000,
    stock: 6,
    description: 'Dispara discos monomoleculares afilados mediante aceleración gravitacional.',
    image: 'https://placehold.co/400x300?text=Shuriken+Catapult',
    },
    {
    id: 12,
    name: 'Pulse Rifle',
    faction: "T'au",
    type: 'A distancia',
    price: 72000,
    stock: 9,
    description: 'Rifle de pulsos de plasma con gran alcance y precisión.',
    image: 'https://placehold.co/400x300?text=Pulse+Rifle',
    },
];

// ---------- Persistencia simulada (CRUD) ----------
const STORAGE_KEY = 'wh40k-products';

function loadProducts() {
    try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [...initialProducts];
    } catch {
    return [...initialProducts];
    }
}

function saveProducts(list) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

// READ: todos los productos
export function getProducts() {
    return loadProducts();
}

// READ: un producto por id (null si no existe)
export function getProductById(id) {
    return loadProducts().find((p) => p.id === Number(id)) ?? null;
}

// CREATE: agrega un producto con el siguiente id disponible
export function createProduct(data) {
    const list = loadProducts();
    const nextId = Math.max(0, ...list.map((p) => p.id)) + 1;
    const product = { ...data, id: nextId };
    saveProducts([...list, product]);
    return product;
}

// UPDATE: modifica un producto existente (null si no existe)
export function updateProduct(id, changes) {
    const list = loadProducts();
    const index = list.findIndex((p) => p.id === Number(id));
    if (index === -1) return null;
    const updated = { ...list[index], ...changes, id: list[index].id };
    const next = [...list];
    next[index] = updated;
    saveProducts(next);
    return updated;
}

// DELETE: elimina un producto (false si no existía)
export function deleteProduct(id) {
    const list = loadProducts();
    const next = list.filter((p) => p.id !== Number(id));
    if (next.length === list.length) return false;
    saveProducts(next);
    return true;
}

// Vuelve a los datos iniciales (útil para pruebas y demo)
export function resetProducts() {
    localStorage.removeItem(STORAGE_KEY);
}

export default initialProducts;