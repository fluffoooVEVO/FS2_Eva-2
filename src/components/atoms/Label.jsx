import { Form } from 'react-bootstrap';

function Label({ children, htmlFor, ...props }) {
    return (
    <Form.Label htmlFor={htmlFor} {...props}>
        {children}
    </Form.Label>
    );
}

export default Label;