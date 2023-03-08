import Nav from 'react-bootstrap/Nav';
import './Header.css';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
        <Nav>
            <Nav>
                <Link className='inicio' to='/'>Inicio</Link> | {"    "}
            </Nav>
            <Nav>
                <Link className='tienda' to='/tienda'>Tienda</Link> | {"        "}
            </Nav>
            <Nav>
                <Link className='acerca' to='/acerca'>Acerca de </Link> | {"        "}
            </Nav>
        </Nav>

    </div>
    )
}
export default Header;