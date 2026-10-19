import { render, screen } from '@testing-library/react';
import CardBody from '../../../components/molecules/CardBody';
import { render } from '@testing-library/react';

describe('CardBody', () => {
  // Props: recibe los datos y los muestra; el precio se formatea como moneda chilena
  it('renderiza título, facción, tipo y formatea el precio en CLP', () => {
    render(<CardBody title="Lascannon" faction="Imperium" type="Pesada" price={120000} />);

    expect(screen.getByText('Lascannon')).toBeTruthy();
    expect(screen.getByText('Imperium')).toBeTruthy();
    expect(screen.getByText('Pesada')).toBeTruthy();
    expect(screen.getByText(/120\.000/)).toBeTruthy();
  });
});
