import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import DBImageContext from '../store/DBImageContext';
import { useEffect, useState, useContext } from 'react';
import axios from "axios";

const Agradecimiento = () => {

    const [imageDb, setImageDb] = useState([]);

    const imageContext = useContext(DBImageContext).url;

    useEffect(() => {
        axios.get(imageContext)
            .then((response) => {
                setImageDb(response.data);
            })
    }, []);

    return (
        <>
            <div className="text-center align-items-center justify-content-center mt-5">
                <div>
                    <h4>¡Gracias por realizar tu pedido!</h4>
                    <h6>En breve recibirás tu pedido. </h6>
                </div>
                <img alt='' style={{ 'width': '400px' }} src={imageDb.agradecimiento} />
                <div>
                    <h6>Mientras tanto puedes echar un vistazo a las novedades de nuestra tienda:</h6>
                    <Button variant="outline-dark" as={Link} to="/tienda">Realizar nuevo pedido</Button>
                </div>
            </div>
        </>
    )
}

export default Agradecimiento;