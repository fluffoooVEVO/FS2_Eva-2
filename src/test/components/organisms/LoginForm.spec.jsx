import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '../../../components/organisms/LoginForm';

describe('LoginForm', () => {
    let onLoginSpy;

    beforeEach(() => {
    onLoginSpy = jasmine.createSpy('onLogin');
    render(<LoginForm onLogin={onLoginSpy} />);
    });

    const fillAndSubmit = (email, password) => {
    fireEvent.change(screen.getByLabelText('Correo electrónico'), { target: { value: email } });
    fireEvent.change(screen.getByLabelText('Contraseña'), { target: { value: password } });
    fireEvent.click(screen.getByRole('button', { name: 'Ingresar' }));
    };

    it('muestra error con un email inválido y no envía el formulario', async () => {
    fillAndSubmit('correo-malo', 'secreto123');

    expect(await screen.findByText('Ingresa un correo válido')).toBeTruthy();
    expect(screen.getByLabelText('Correo electrónico')).toHaveAttribute('aria-invalid', 'true');
    expect(onLoginSpy).not.toHaveBeenCalled();
    });

    it('muestra errores de campos obligatorios si se envía vacío', async () => {
    fireEvent.click(screen.getByRole('button', { name: 'Ingresar' }));

    expect(await screen.findByText('El correo es obligatorio')).toBeTruthy();
    expect(screen.getByText('La contraseña es obligatoria')).toBeTruthy();
    });

    it('exige una contraseña de al menos 6 caracteres', async () => {
    fillAndSubmit('juan@mail.cl', '123');

    expect(
        await screen.findByText('La contraseña debe tener al menos 6 caracteres')
    ).toBeTruthy();
    });

    it('llama a onLogin con los datos cuando el formulario es válido', async () => {
    fillAndSubmit('juan@mail.cl', 'secreto123');

    expect(await screen.findByText('Sesión iniciada (simulada).')).toBeTruthy();
    expect(onLoginSpy).toHaveBeenCalledWith({ email: 'juan@mail.cl', password: 'secreto123' });
    expect(screen.getByRole('alert')).toHaveTextContent('Sesión iniciada');
    });
});