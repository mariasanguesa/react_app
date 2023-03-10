import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Person, Bag} from 'react-bootstrap-icons';

function Header() {
    return (
        <>
            <div variant="d-flex">
                <Navbar style={{ 'height': '70px' }}>
                    <Container >
                        <Navbar.Brand href="/"><b>BARRAS GO</b></Navbar.Brand>
                        <Nav>
                            <Nav.Link href="/">INICIO</Nav.Link>
                            <Nav.Link href="/tienda">TIENDA</Nav.Link>
                            <Nav.Link href="/acerca">ACERCA DE</Nav.Link>
                            <Nav.Link><Person/></Nav.Link>
                            <Nav.Link><Bag/></Nav.Link>
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