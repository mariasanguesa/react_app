import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const DetallesPedido = () => {
    return (
        <>
            <h2>Pagina de confirmacion</h2>
            <h3>Detalles de la compra:</h3>
            <div className="text-center align-items-center justify-content-center">
                <Button as={Link} variant="outline-dark" to="/carrito">Cancelar</Button>
                <Button as={Link} variant="outline-dark" to="/confirmacionPedido">Continuar</Button>
            </div>
        </>
    )
}

export default DetallesPedido;