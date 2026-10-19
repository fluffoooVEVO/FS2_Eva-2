import { Form } from 'react-bootstrap';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

function FormField({ id, label, type = 'text', error, registration, ...props }) {
    const errorId = `${id}-error`;

    return (
    <Form.Group className="mb-3">
        <Label htmlFor={id}>{label}</Label>
        <Input
        id={id}
        type={type}
        isInvalid={!!error}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        {...registration}
        {...props}
        />
        {error && (
        <Form.Control.Feedback type="invalid" id={errorId} role="alert">
            {error.message}
        </Form.Control.Feedback>
        )}
    </Form.Group>
    );
}

export default FormField;