
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <Container className="my-5">
            <Row className="align-items-center g-4 bg-dark text-light rounded p-4 p-md-5">
                <Col xs={12} md={7}>
                    <h1 className="text-warning fw-bold">
                        Bienvenido a WH40K Emperor Store
                    </h1>
                    <p className="lead">
                        Explora nuestra tienda de armas y
                        equipamiento del universo Warhammer 40K.
                    </p>
                    <p>
                        Encuentra productos de distintas facciones
                        y descubre sus características en nuestro catálogo.
                    </p>
                    <Button as={Link} to="/products" variant="dark">
                        Ver catálogo
                    </Button>
                    <Button
                        as={Link}
                        to="/contact"
                        variant="outline-dark"
                        className="ms-2"
                    >
                        Contacto
                    </Button>
                </Col>
                <Col xs={12} md={5}>
                    <div className="bg-dark text-light p-4 rounded">
                        <h3>Explora las facciones</h3>
                        <p>
                            Imperium, Chaos, Orks, Aeldari y T'au.
                        </p>
                        <p className="mb-0">
                            Revisa nuestro catálogo y encuentra
                            el equipamiento que buscas.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;