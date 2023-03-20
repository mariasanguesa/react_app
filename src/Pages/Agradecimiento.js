import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Agradecimiento = () => {
    return (
        <>
            <h2>Gracias!</h2>
            <div className="text-center align-items-center justify-content-center">
                <Button variant="outline-dark"><Link style={{ textDecoration: 'none', color: 'black', margin: '10px' }} to="/tienda">Realizar nuevo pedido</Link></Button>
            </div>
        </>
    )
}

export default Agradecimiento;