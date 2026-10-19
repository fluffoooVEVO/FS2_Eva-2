import { useForm } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';
import { EMAIL_PATTERN } from '../../utils/validation';

function CheckoutForm({ onConfirm = () => {} }) {
    const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm({ defaultValues: { shipping: 'estandar', simulateError: false } });

    return (
    <Form noValidate onSubmit={handleSubmit(onConfirm)}>
        <FormField
        id="checkout-name"
        label="Nombre completo"
        error={errors.fullName}
        registration={register('fullName', { required: 'El nombre es obligatorio' })}
        />
        <FormField
        id="checkout-email"
        label="Correo electrónico"
        type="email"
        error={errors.email}
        registration={register('email', {
            required: 'El correo es obligatorio',
            pattern: { value: EMAIL_PATTERN, message: 'Ingresa un correo válido' },
        })}
        />
        <FormField
        id="checkout-address"
        label="Dirección de envío"
        error={errors.address}
        registration={register('address', { required: 'La dirección es obligatoria' })}
        />
        <FormField
        id="checkout-commune"
        label="Comuna"
        error={errors.commune}
        registration={register('commune', { required: 'La comuna es obligatoria' })}
        />
        <FormField
        id="checkout-shipping"
        label="Opción de entrega"
        as="select"
        className="form-select"
        error={errors.shipping}
        registration={register('shipping', { required: 'Elige una opción de entrega' })}
        >
        <option value="estandar">Envío estándar (3 a 5 días)</option>
        <option value="express">Envío express (24 horas)</option>
        <option value="retiro">Retiro en tienda</option>
        </FormField>
        <Form.Check
        id="checkout-simulate-error"
        type="checkbox"
        className="mb-3"
        label="Simular pago rechazado (solo para la demo)"
        {...register('simulateError')}
        />
        <Button type="submit" variant="success" className="w-100">
        Confirmar compra
        </Button>
    </Form>
    );
}

export default CheckoutForm;