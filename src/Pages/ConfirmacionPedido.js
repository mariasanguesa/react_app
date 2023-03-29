import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import DBCartContext from '../store/DBCartContext';
import { useEffect, useState, useContext } from 'react';

const ConfirmacionPedido = (props) => {

    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [direccion, setDireccion] = useState('');
    const [poblacion, setPoblacion] = useState('');

    const [urlCart, seturlCart] = useState([]);
    const urlCartContext = useContext(DBCartContext).url;

    useEffect(() => {
        axios.get(urlCartContext)
            .then((response) => {
                seturlCart(response.data);
            })
    }, []);

    const submitHandler = () => {

        const pedido = {
            nombre: nombre,
            apellidos: apellidos,
            direccion: direccion,
            poblacion: poblacion,
            email: props.loginData.email,
            productos: props.productos[0].comprados
        }

        axios.post('https://react-app-1c2eb-default-rtdb.europe-west1.firebasedatabase.app/pedidos.json?auth=' + props.loginData.idToken, pedido)
            .then((response) => {
                props.establecerProductos();
            }).catch((event) => {
                alert('No se ha podido añadir el pedido.');
            })

        // Una vez se añade al pedido se borra del carrito
        for (let id in urlCart) {
            if (urlCart[id].email === props.loginData.email) {
            axios.delete('https://react-app-1c2eb-default-rtdb.europe-west1.firebasedatabase.app/carrito/' + id + '/comprados//.json?auth=' + props.loginData.idToken)
                .then((response) => {

                })
                .catch((error) => {
                    alert('No se ha podido actualizar el producto');
                })
            }
        }
    }

    return (
        <>
            <Container className="justify-content-md-center">
                <Col>
                    <div className="text-center align-items-center justify-content-center mt-5 mb-5">
                        <h4>Página de confirmación del pedido</h4>
                        <p>Rellena este formulario con tus datos para poder continuar con el envío y confirmar el pedido.</p>
                    </div>
                    <div className="Auth-form-container ">
                        <form className="Auth-form">
                            <div className="Auth-form-content">
                                <h5 className="Auth-form-title">Formulario de envío</h5>
                                <div className="form-group mt-3">
                                    <label>Nombre</label>
                                    <input
                                        onChange={(event) => { setNombre(event.target.value) }}
                                        value={nombre}
                                        type="input"
                                        className="form-control mt-1"
                                        placeholder="Introducir nombre"
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Apellidos</label>
                                    <input
                                        onChange={(event) => { setApellidos(event.target.value) }}
                                        value={apellidos}
                                        type="input"
                                        className="form-control mt-1"
                                        placeholder="Introducir apellidos"
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Direccion</label>
                                    <input
                                        onChange={(event) => { setDireccion(event.target.value) }}
                                        value={direccion}
                                        type="input"
                                        className="form-control mt-1"
                                        placeholder="Introducir dirección"
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Población</label>
                                    <input
                                        onChange={(event) => { setPoblacion(event.target.value) }}
                                        value={poblacion}
                                        type="input"
                                        className="form-control mt-1"
                                        placeholder="Introducir población"
                                    />
                                </div>
                                <div className="d-grid gap-2 mt-3">
                                    <Button as={Link} onClick={submitHandler} to="/agradecimiento" variant="outline-dark" >Confirmar</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </Col>
            </Container>

        </>
    )
}

export default ConfirmacionPedido;