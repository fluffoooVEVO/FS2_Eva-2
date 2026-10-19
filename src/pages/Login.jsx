import { Container, Row, Col, Card } from 'react-bootstrap';
import Text from '../components/atoms/Text';
import LoginForm from '../components/organisms/LoginForm';

function Login() {
    return (
    <Container className="my-5">
        <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={5}>
            <Card className="shadow-sm">
            <Card.Body className="p-4">
                <Text variant="h1" className="h3 mb-4 text-center">Iniciar sesión</Text>
                <LoginForm />
            </Card.Body>
            </Card>
        </Col>
        </Row>
    </Container>
    );
}

export default Login;