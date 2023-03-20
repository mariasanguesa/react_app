import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Agradecimiento = () => {
    return (
        <>
            <h2>Gracias!</h2>
            <div className="text-center align-items-center justify-content-center">
                <Button variant="outline-dark" as={Link} to="/tienda">Realizar nuevo pedido</Button>
            </div>
        </>
    )
}

export default Agradecimiento;