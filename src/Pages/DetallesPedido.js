import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const DetallesPedido = () => {
    return (
        <>
            <h2>Pagina de confirmacion</h2>
            <h3>Detalles de la compra:</h3>
            <div className="text-center align-items-center justify-content-center">
                <Button variant="outline-dark"><Link style={{ textDecoration: 'none', color: 'black', margin: '10px' }} to="/carrito">Cancelar</Link></Button>
                <Button variant="outline-dark"><Link style={{ textDecoration: 'none', color: 'black', margin: '10px' }} to="/confirmacionPedido">Continuar</Link></Button>
            </div>
        </>
    )
}

export default DetallesPedido;