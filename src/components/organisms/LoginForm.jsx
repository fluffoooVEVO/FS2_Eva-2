import { useForm } from 'react-hook-form';
import { Form, Alert } from 'react-bootstrap';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';
import { EMAIL_PATTERN } from '../../utils/validation';

function LoginForm({ onLogin = () => {} }) {
    const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    } = useForm();

    const onSubmit = (data) => {
    onLogin(data);
    };

    return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <FormField
        id="login-email"
        label="Correo electrónico"
        type="email"
        error={errors.email}
        registration={register('email', {
            required: 'El correo es obligatorio',
            pattern: { value: EMAIL_PATTERN, message: 'Ingresa un correo válido' },
        })}
        />
        <FormField
        id="login-password"
        label="Contraseña"
        type="password"
        error={errors.password}
        registration={register('password', {
            required: 'La contraseña es obligatoria',
            minLength: { value: 6, message: 'La contraseña debe tener al menos 6 caracteres' },
        })}
        />
        <Button type="submit" variant="primary" className="w-100">
        Ingresar
        </Button>
        {isSubmitSuccessful && (
        <Alert variant="success" className="mt-3">
            Sesión iniciada (simulada).
        </Alert>
        )}
    </Form>
    );
}

export default LoginForm;