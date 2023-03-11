import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Person, Bag } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <div variant="d-flex">
                <Navbar style={{ 'height': '70px' }}>
                    <Container >
                        <Navbar.Brand><b>BARRAS GO</b></Navbar.Brand>
                        <Nav>
                        <Nav.Link><Link to="/" style={{ textDecoration: 'none', 'color':'black' }}><Nav>INICIO</Nav></Link></Nav.Link>
                            <Nav.Link><Link to="/tienda" style={{ textDecoration: 'none' , 'color':'black'}}>TIENDA</Link></Nav.Link>
                            <Nav.Link><Link to="/login" style={{ textDecoration: 'none', 'color':'black' }}><Person /></Link></Nav.Link>
                            <Nav.Link><Link to="/carrito" style={{ textDecoration: 'none', 'color':'black' }}><Bag /></Link></Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Navbar bg='dark' variant="dark justify-content-center align-items-center" style={{ 'height': '40px' }}>
                    <p style={{ 'color': 'white' }}>Envios gratis con pedidos superiores a 30 euros</p>
                </Navbar>
            </div>
        </>
    )
}
export default Header;