import { formatPrice } from '../../utils/formatPrice';
import { EMAIL_PATTERN } from '../../utils/validation';

describe('formatPrice', () => {
    it('formatea números como pesos chilenos con punto de miles', () => {
    expect(formatPrice(45000)).toBe('$45.000');
    expect(formatPrice(120000)).toBe('$120.000');
    });

    it('formatea el cero sin decimales', () => {
    expect(formatPrice(0)).toBe('$0');
    });
});

describe('EMAIL_PATTERN', () => {
    it('acepta emails con formato válido', () => {
    ['juan@mail.cl', 'ana.perez@duoc.cl'].forEach((email) => {
        expect(EMAIL_PATTERN.test(email)).withContext(email).toBeTrue();
    });
    });

    it('rechaza emails con formato inválido', () => {
    ['juan@mail', 'juan mail.cl', 'juan@@mail.cl', ' juan@mail.cl'].forEach((email) => {
        expect(EMAIL_PATTERN.test(email)).withContext(email).toBeFalse();
    });
    });
});