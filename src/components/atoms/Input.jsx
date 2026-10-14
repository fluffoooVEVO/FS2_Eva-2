import { Form } from 'react-bootstrap';

function Input({ id, type = 'text', isInvalid = false, ...props }) {
    return <Form.Control id={id} type={type} isInvalid={isInvalid} {...props} />;
}

export default Input;