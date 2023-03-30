import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { PersonFill, Person, BagFill, Bag } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import React from 'react';
import {useState} from 'react';

function Header() {
    const [activeInicio, setActiveInicio] = useState(false);
    const [activeTienda, setActiveTienda] = useState(false);
    const [activeLogin, setActiveLogin] = useState(false);
    const [activeBag, setActiveBag] = useState(false);

    // Cuando se pulsa en uno de los links o iconos, el resto se pone a false. 
    // Para utilizar las clases condicionales y saber cuál resaltar.
    const inicioHandler = () => {
        setActiveInicio(true);
        setActiveTienda(false);
        setActiveLogin(false);
        setActiveBag(false);
    }
    const tiendaHandler = () => {
        setActiveTienda(true);
        setActiveInicio(false);
        setActiveLogin(false);
        setActiveBag(false);
    }

    const loginHandler = () => {
        setActiveLogin(true);
        setActiveInicio(false);        
        setActiveTienda(false);
        setActiveBag(false);
    }

    const bagHandler = () => {
        setActiveBag(true);
        setActiveLogin(false);
        setActiveInicio(false);        
        setActiveTienda(false);
    }

    return (
        <>
            <div variant="d-flex">
                <Navbar style={{ 'height': '70px' }}>
                    <Container >
                        <Navbar.Brand><b>BARRAS GO</b></Navbar.Brand>
                        <Nav>
                            <Link to="/" style={{ textDecoration: 'none', 'color': `${activeInicio ? 'pink':'black'}`, margin:'10px' }} onClick={inicioHandler}><Nav>INICIO</Nav></Link>
                            <Link to="/tienda" style={{ textDecoration: 'none', 'color': `${activeTienda ? 'pink':'black'}`, margin:'10px' }} onClick={tiendaHandler} >TIENDA</Link>
                            <Link to="/login" style={{ textDecoration: 'none', 'color': 'black', margin:'10px' }}  onClick={loginHandler}>{activeLogin ? <PersonFill/>:<Person/>}</Link>
                            <Link class="shopping-cart" to="/carrito" style={{ textDecoration: 'none', 'color': 'black', margin:'10px' }}  onClick={bagHandler}>{activeBag ? <BagFill/>:<Bag/>}</Link>
                            
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