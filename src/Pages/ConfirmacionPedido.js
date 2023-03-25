import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

const ConfirmacionPedido = (props) => {

    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [direccion, setDireccion] = useState('');
    const [poblacion, setPoblacion] = useState('');

    //console.log(props.loginData.idToken);

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

            }).catch((event) => {
                alert('No se ha podido añadir el pedido.');
            })
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