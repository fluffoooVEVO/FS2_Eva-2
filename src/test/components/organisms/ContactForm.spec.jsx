import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../../../components/organisms/ContactForm';

describe('ContactForm', () => {
    let onSendSpy;

    beforeEach(() => {
    onSendSpy = jasmine.createSpy('onSend');
    render(<ContactForm onSend={onSendSpy} />);
    });

    it('muestra los 3 errores de campos obligatorios si se envía vacío', async () => {
    fireEvent.click(screen.getByRole('button', { name: 'Enviar mensaje' }));

    expect(await screen.findByText('El mensaje es obligatorio')).toBeTruthy();
    expect(screen.getAllByRole('alert').length).toBe(3);
    expect(onSendSpy).not.toHaveBeenCalled();
    });

    it('envía los datos y limpia el formulario', async () => {
    const data = {
        name: 'Javier',
        email: 'javier@mail.cl',
        message: 'Consulta sobre el Bolter',
    };

    fireEvent.change(screen.getByLabelText('Nombre'), { target: { value: data.name } });
    fireEvent.change(screen.getByLabelText('Correo electrónico'), { target: { value: data.email } });
    fireEvent.change(screen.getByLabelText('Mensaje'), { target: { value: data.message } });
    fireEvent.click(screen.getByRole('button', { name: 'Enviar mensaje' }));

    expect(await screen.findByText(/Mensaje enviado/)).toBeTruthy();
    expect(onSendSpy).toHaveBeenCalledWith(data);
    expect(screen.getByLabelText('Nombre')).toHaveValue('');
    expect(screen.getByLabelText('Mensaje')).toHaveValue('');
    });
});