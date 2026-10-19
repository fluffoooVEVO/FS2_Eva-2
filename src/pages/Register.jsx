import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Text from '../components/atoms/Text';
import RegisterForm from '../components/organisms/RegisterForm';

function Register() {
    return (
    <Container className="my-5">
        <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={5}>
            <Card className="shadow-sm">
            <Card.Body className="p-4">
                <Text variant="h1" className="h3 mb-4 text-center">Crear cuenta</Text>
                <RegisterForm />
                <Text variant="p" className="text-center mt-3 mb-0">
                ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
                </Text>
            </Card.Body>
            </Card>
        </Col>
        </Row>
    </Container>
    );
}

export default Register;