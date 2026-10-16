import { Container, Row, Col, Card } from 'react-bootstrap';
import Text from '../components/atoms/Text';
import ContactForm from '../components/organisms/ContactForm';

function Contact() {
    return (
    <Container className="my-5">
        <Row className="justify-content-center">
        <Col xs={12} md={10} lg={6}>
            <Card className="shadow-sm">
            <Card.Body className="p-4">
                <Text variant="h1" className="h3 mb-2 text-center">Contacto</Text>
                <Text variant="p" className="text-muted text-center mb-4">
                ¿Dudas sobre un arma o tu pedido? Escríbenos.
                </Text>
                <ContactForm />
            </Card.Body>
            </Card>
        </Col>
        </Row>
    </Container>
    );
}

export default Contact;