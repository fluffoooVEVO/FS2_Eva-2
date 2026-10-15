import { render, screen, fireEvent } from '@testing-library/react';
import FilterBar from '../../../components/organisms/FilterBar';

describe('FilterBar', () => {
    const factions = ['Todas', 'Imperium', 'Orks'];
    let onSelectSpy;

    beforeEach(() => {
    onSelectSpy = jasmine.createSpy('onSelect');
    });

    it('renderiza un botón por facción y marca la seleccionada', () => {
    render(<FilterBar factions={factions} selected="Orks" onSelect={onSelectSpy} />);

    expect(screen.getAllByRole('button').length).toBe(3);

    const orks = screen.getByRole('button', { name: 'Orks' });
    expect(orks).toHaveAttribute('aria-pressed', 'true');
    expect(orks).toHaveClass('btn-primary');

    const imperium = screen.getByRole('button', { name: 'Imperium' });
    expect(imperium).toHaveClass('btn-outline-primary');
    });

    it('llama a onSelect con la facción al hacer clic', () => {
    render(<FilterBar factions={factions} selected="Todas" onSelect={onSelectSpy} />);

    fireEvent.click(screen.getByRole('button', { name: 'Imperium' }));

    expect(onSelectSpy).toHaveBeenCalledWith('Imperium');
    });
});