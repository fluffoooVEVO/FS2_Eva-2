import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function StoreFooter() {
    return (
        <footer className="bg-dark text-light py-4 mt-auto">
            <Container>
                <Row>
                    <Col xs={12} md={6} className="mb-3">
                        <h5>WH40K Emperor Store</h5>
                        <p>
                            Tienda de armas y equipamiento
                            del universo Warhammer 40K.
                        </p>
                    </Col>

                    <Col xs={12} md={6} className="mb-3">
                        <h5>Enlaces</h5>

                        <div className="d-flex flex-column gap-2">
                            <Link to="/" className="text-light">
                                Inicio
                            </Link>

                            <Link to="/products" className="text-light">
                                Catálogo
                            </Link>

                            <Link to="/cart" className="text-light">
                                Carrito
                            </Link>

                            <Link to="/contact" className="text-light">
                                Contacto
                            </Link>
                        </div>
                    </Col>
                </Row>

                <hr />

                <p className="text-center mb-0">
                    © 2026 WH40K Emperor Store.
                    Proyecto académico - Duoc UC.
                </p>
            </Container>
        </footer>
    );
}

export default StoreFooter;