import { render, screen, fireEvent } from '@testing-library/react';
import FilterBar from '../../components/organisms/FilterBar';
import { mockFactions } from '../mocks/products.mock';

describe('FilterBar', () => {
  // Renderizado correcto: un botón por cada facción recibida
  it('renderiza un botón por cada facción', () => {
    render(<FilterBar factions={mockFactions} selected="Todas" onSelect={() => {}} />);

    expect(screen.getAllByRole('button').length).toBe(mockFactions.length);
  });

  // Props: la facción seleccionada queda marcada con aria-pressed
  it('marca como presionado solo el botón de la facción seleccionada', () => {
    render(<FilterBar factions={mockFactions} selected="Chaos" onSelect={() => {}} />);

    expect(screen.getByRole('button', { name: 'Chaos' }).getAttribute('aria-pressed')).toBe('true');
    expect(screen.getByRole('button', { name: 'Orks' }).getAttribute('aria-pressed')).toBe('false');
  });

  // Eventos: al hacer clic se avisa al padre con la facción elegida
  it('llama a onSelect con la facción clickeada', () => {
    const onSelect = jasmine.createSpy('onSelect');
    render(<FilterBar factions={mockFactions} selected="Todas" onSelect={onSelect} />);

    fireEvent.click(screen.getByRole('button', { name: 'Orks' }));

    expect(onSelect).toHaveBeenCalledWith('Orks');
  });
});
