import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function StoreNavbar() {
    const { totalItems } = useCart();

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    WH40K Emperor Store
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="menu-tienda" />

                <Navbar.Collapse id="menu-tienda">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">
                            Inicio
                        </Nav.Link>

                        <Nav.Link as={Link} to="/products">
                            Catálogo
                        </Nav.Link>

                        <Nav.Link as={Link} to="/cart">
                            Carrito ({totalItems})
                        </Nav.Link>

                        <Nav.Link as={Link} to="/login">
                            Iniciar sesión
                        </Nav.Link>

                        <Nav.Link as={Link} to="/register">
                            Registrarse
                        </Nav.Link>

                        <Nav.Link as={Link} to="/contact">
                            Contacto
                        </Nav.Link>

                        <Nav.Link as={Link} to="/ofertas">
                            Ofertas
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default StoreNavbar;