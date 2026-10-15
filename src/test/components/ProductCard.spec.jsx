// ============================================================================
// PRUEBA DE EJEMPLO (copiar y adaptar para los demás componentes)
// Componente probado: ProductCard
//
// Estructura de toda prueba con Jasmine:
//   describe('Componente', () => { ... })   -> agrupa las pruebas de un componente
//   it('hace tal cosa', () => { ... })      -> una prueba individual
//   expect(valor).toBe(esperado)            -> la verificación (matcher)
//
// Patrón de cada prueba: ARRANGE (preparar) -> ACT (actuar) -> ASSERT (verificar)
// ============================================================================

import { screen, fireEvent } from '@testing-library/react';
import ProductCard from '../../components/organisms/ProductCard';
import { renderWithRouter } from '../helpers/renderWithRouter';
import { mockProducts } from '../mocks/products.mock';

describe('ProductCard', () => {
  const productoConStock = mockProducts[0]; // stock: 10
  const productoAgotado = mockProducts[1];  // stock: 0

  // 1) PRUEBA DE RENDERIZADO Y PROPS: el componente muestra los datos que recibe
  it('muestra nombre, facción, tipo y precio formateado del producto recibido por props', () => {
    // ARRANGE + ACT: se renderiza el componente pasándole un producto falso (mock)
    renderWithRouter(<ProductCard product={productoConStock} />);

    // ASSERT: los datos de las props aparecen en el DOM
    expect(screen.getByText('Bolter de Prueba')).toBeTruthy();
    expect(screen.getByText('Imperium')).toBeTruthy();
    expect(screen.getByText('A distancia')).toBeTruthy();
    expect(screen.getByText(/45\.000/)).toBeTruthy(); // $45.000 en pesos chilenos
  });

  // 2) PRUEBA DE RENDERIZADO CONDICIONAL: cambia lo que se ve según el stock
  it('muestra el botón "Agregar" habilitado cuando hay stock', () => {
    renderWithRouter(<ProductCard product={productoConStock} />);

    const boton = screen.getByRole('button', { name: 'Agregar' });
    expect(boton.disabled).toBe(false);
  });

  it('muestra el botón "Agotado" deshabilitado cuando el stock es 0', () => {
    renderWithRouter(<ProductCard product={productoAgotado} />);

    const boton = screen.getByRole('button', { name: 'Agotado' });
    expect(boton.disabled).toBe(true);
    expect(screen.queryByRole('button', { name: 'Agregar' })).toBeNull();
  });

  // Navegación: el enlace "Ver detalle" apunta a la ruta del producto.
  // (react-bootstrap renderiza <Button as={Link}> como <a role="button">)
  it('enlaza "Ver detalle" a la página del producto', () => {
    renderWithRouter(<ProductCard product={productoConStock} />);

    const enlace = screen.getByRole('button', { name: 'Ver detalle' });
    expect(enlace.getAttribute('href')).toBe('/products/101');
  });

  // 3) PRUEBA DE EVENTOS: simula el clic del usuario y verifica la reacción.
  //    Se usa un ESPÍA de Jasmine (mock de función) para saber si se llamó onAdd.
  it('llama a onAdd con el producto cuando se hace clic en "Agregar"', () => {
    const onAdd = jasmine.createSpy('onAdd');
    renderWithRouter(<ProductCard product={productoConStock} onAdd={onAdd} />);

    fireEvent.click(screen.getByRole('button', { name: 'Agregar' }));

    expect(onAdd).toHaveBeenCalledTimes(1);
    expect(onAdd).toHaveBeenCalledWith(productoConStock);
  });
});
