import { render, screen, fireEvent } from '@testing-library/react';
import RegisterForm from '../../../components/organisms/RegisterForm';

describe('RegisterForm', () => {
    let onRegisterSpy;

    beforeEach(() => {
    onRegisterSpy = jasmine.createSpy('onRegister');
    render(<RegisterForm onRegister={onRegisterSpy} />);
    });

    const fillForm = ({ name, email, password, confirm }) => {
    fireEvent.change(screen.getByLabelText('Nombre'), { target: { value: name } });
    fireEvent.change(screen.getByLabelText('Correo electrónico'), { target: { value: email } });
    fireEvent.change(screen.getByLabelText('Contraseña'), { target: { value: password } });
    fireEvent.change(screen.getByLabelText('Confirmar contraseña'), { target: { value: confirm } });
    fireEvent.click(screen.getByRole('button', { name: 'Crear cuenta' }));
    };

    it('muestra error si las contraseñas no coinciden', async () => {
    fillForm({ name: 'Juan', email: 'juan@mail.cl', password: 'secreto123', confirm: 'otra123' });

    expect(await screen.findByText('Las contraseñas no coinciden')).toBeTruthy();
    expect(onRegisterSpy).not.toHaveBeenCalled();
    });

    it('muestra los 4 errores de campos obligatorios si se envía vacío', async () => {
    fireEvent.click(screen.getByRole('button', { name: 'Crear cuenta' }));

    expect(await screen.findByText('El nombre es obligatorio')).toBeTruthy();
    expect(screen.getAllByRole('alert').length).toBe(4);
    });

    it('envía nombre, email y contraseña sin la confirmación', async () => {
    fillForm({ name: 'Juan', email: 'juan@mail.cl', password: 'secreto123', confirm: 'secreto123' });

    expect(await screen.findByText('Cuenta creada (simulada).')).toBeTruthy();
    expect(onRegisterSpy).toHaveBeenCalledWith({
        name: 'Juan',
        email: 'juan@mail.cl',
        password: 'secreto123',
    });
    });
});