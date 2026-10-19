import products, {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    resetProducts,
} from '../../data/products';

describe('CRUD de productos (products.js)', () => {
    beforeEach(() => {
    localStorage.clear();
    });

    it('getProducts devuelve los productos iniciales si no hay datos guardados', () => {
    expect(getProducts().length).toBe(products.length);
    });

    it('getProducts usa los datos iniciales si lo guardado está dañado', () => {
    localStorage.setItem('wh40k-products', '{esto no es JSON');
    expect(getProducts().length).toBe(products.length);
    });

    it('getProductById devuelve el producto o null', () => {
    expect(getProductById(1).name).toBe('Bolter');
    expect(getProductById('1').name).toBe('Bolter');
    expect(getProductById(999)).toBeNull();
    });

    it('createProduct agrega un producto con un id nuevo y lo guarda', () => {
    const expectedId = Math.max(...products.map((p) => p.id)) + 1;

    const created = createProduct({ name: 'Bolt Pistol', faction: 'Imperium', price: 30000, stock: 5 });

    expect(created.id).toBe(expectedId);
    expect(getProducts().length).toBe(products.length + 1);
    expect(getProductById(created.id).name).toBe('Bolt Pistol');
    });

    it('updateProduct modifica los campos indicados sin cambiar el id', () => {
    const updated = updateProduct(1, { price: 50000, id: 99 });

    expect(updated.price).toBe(50000);
    expect(updated.id).toBe(1);
    expect(updated.name).toBe('Bolter');
    expect(getProductById(1).price).toBe(50000);
    expect(updateProduct(999, { price: 1 })).toBeNull();
    });

    it('deleteProduct elimina el producto y devuelve false si no existe', () => {
    expect(deleteProduct(1)).toBeTrue();
    expect(getProductById(1)).toBeNull();
    expect(getProducts().length).toBe(products.length - 1);
    expect(deleteProduct(1)).toBeFalse();
    });

    it('resetProducts vuelve a los datos iniciales sin modificar la lista original', () => {
    deleteProduct(1);
    resetProducts();

    expect(getProducts().length).toBe(products.length);
    expect(products.length).toBe(12);
    });
});