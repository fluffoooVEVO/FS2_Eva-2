import { useForm } from 'react-hook-form';
import { Form, Alert } from 'react-bootstrap';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function RegisterForm({ onRegister = () => {} }) {
    const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitSuccessful },
    } = useForm();

    const onSubmit = ({ name, email, password }) => {
    onRegister({ name, email, password });
    };

    return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <FormField
        id="register-name"
        label="Nombre"
        error={errors.name}
        registration={register('name', {
            required: 'El nombre es obligatorio',
            minLength: { value: 2, message: 'El nombre debe tener al menos 2 caracteres' },
        })}
        />
        <FormField
        id="register-email"
        label="Correo electrónico"
        type="email"
        error={errors.email}
        registration={register('email', {
            required: 'El correo es obligatorio',
            pattern: { value: EMAIL_PATTERN, message: 'Ingresa un correo válido' },
        })}
        />
        <FormField
        id="register-password"
        label="Contraseña"
        type="password"
        error={errors.password}
        registration={register('password', {
            required: 'La contraseña es obligatoria',
            minLength: { value: 6, message: 'La contraseña debe tener al menos 6 caracteres' },
        })}
        />
        <FormField
        id="register-confirm"
        label="Confirmar contraseña"
        type="password"
        error={errors.confirmPassword}
        registration={register('confirmPassword', {
            required: 'Confirma tu contraseña',
            validate: (value) => value === getValues('password') || 'Las contraseñas no coinciden',
        })}
        />
        <Button type="submit" variant="primary" className="w-100">
        Crear cuenta
        </Button>
        {isSubmitSuccessful && (
        <Alert variant="success" className="mt-3">
            Cuenta creada (simulada).
        </Alert>
        )}
    </Form>
    );
}

export default RegisterForm;