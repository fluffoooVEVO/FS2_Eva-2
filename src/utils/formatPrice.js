export function formatPrice(value) {
    return value.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
}