// MOCK: lista de productos falsa.
// Sirve para probar los componentes sin depender de los datos reales (src/data/products.js):
// si el equipo cambia precios o nombres reales, estas pruebas no se rompen.

export const mockProducts = [
  {
    id: 101,
    name: 'Bolter de Prueba',
    faction: 'Imperium',
    type: 'A distancia',
    price: 45000,
    stock: 10,
    description: 'Producto falso para pruebas.',
    image: 'https://placehold.co/400x300?text=Bolter',
  },
  {
    id: 102,
    name: 'Meltagun de Prueba',
    faction: 'Imperium',
    type: 'Especial',
    price: 78000,
    stock: 0, // agotado: sirve para probar el renderizado condicional
    description: 'Producto falso sin stock.',
    image: 'https://placehold.co/400x300?text=Meltagun',
  },
  {
    id: 103,
    name: 'Chainaxe de Prueba',
    faction: 'Chaos',
    type: 'Cuerpo a cuerpo',
    price: 42000,
    stock: 8,
    description: 'Producto falso del Caos.',
    image: 'https://placehold.co/400x300?text=Chainaxe',
  },
];

export const mockFactions = ['Todas', 'Imperium', 'Chaos', 'Orks'];
