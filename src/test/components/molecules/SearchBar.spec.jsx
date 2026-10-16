import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../../../components/molecules/SearchBar';

describe('SearchBar', () => {
    it('muestra el valor recibido por props', () => {
    render(<SearchBar value="bolter" onChange={() => {}} />);

    expect(screen.getByLabelText('Buscar arma')).toHaveValue('bolter');
    });

    it('llama a onChange con el texto escrito', () => {
    const onChangeSpy = jasmine.createSpy('onChange');
    render(<SearchBar value="" onChange={onChangeSpy} />);

    fireEvent.change(screen.getByLabelText('Buscar arma'), { target: { value: 'sword' } });

    expect(onChangeSpy).toHaveBeenCalledWith('sword');
    });
});