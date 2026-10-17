import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Alert } from 'react-bootstrap';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';
import { EMAIL_PATTERN } from '../../utils/validation';

function ContactForm({ onSend = () => {} }) {
    const [sent, setSent] = useState(false);
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
    onSend(data);
    setSent(true);
    reset();
    };

    return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <FormField
        id="contact-name"
        label="Nombre"
        error={errors.name}
        registration={register('name', { required: 'El nombre es obligatorio' })}
        />
        <FormField
        id="contact-email"
        label="Correo electrónico"
        type="email"
        error={errors.email}
        registration={register('email', {
            required: 'El correo es obligatorio',
            pattern: { value: EMAIL_PATTERN, message: 'Ingresa un correo válido' },
        })}
        />
        <FormField
        id="contact-message"
        label="Mensaje"
        as="textarea"
        rows={4}
        error={errors.message}
        registration={register('message', {
            required: 'El mensaje es obligatorio',
            minLength: { value: 10, message: 'El mensaje debe tener al menos 10 caracteres' },
            maxLength: { value: 500, message: 'El mensaje no puede superar 500 caracteres' },
        })}
        />
        <Button type="submit" variant="primary" className="w-100">
        Enviar mensaje
        </Button>
        {sent && (
        <Alert variant="success" className="mt-3">
            Mensaje enviado. Te responderemos pronto (simulado).
        </Alert>
        )}
    </Form>
    );
}

export default ContactForm;