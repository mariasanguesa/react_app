import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ConfirmacionPedido = () => {
    return (
        <>
            <h2>Formulario de envío</h2>
            <div className="text-center align-items-center justify-content-center">
                <Button variant="outline-dark"><Link style={{ textDecoration: 'none', color: 'black', margin: '10px' }} to="/agradecimiento">Realizar pedido</Link></Button>
            </div>
        </>
    )
}

export default ConfirmacionPedido;