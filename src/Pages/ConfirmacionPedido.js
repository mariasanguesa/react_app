import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const ConfirmacionPedido = () => {

    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [direccion, setDireccion] = useState('');
    const [poblacion, setPoblacion] = useState('');

    const submitHandler = () => {

        setNombre('');
        setDireccion('');
    }

    return (
        <>
            <Container>
                <Col>
                    <h2>Rellena tus datos para la confirmación del pedido</h2>
                    <div className="Auth-form-container ">
                        <form className="Auth-form">
                            <div className="Auth-form-content">
                                <h3 className="Auth-form-title">Formulario de envío</h3>
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
                                        placeholder="Introducir direccion"
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Población</label>
                                    <input
                                        onChange={(event) => { setPoblacion(event.target.value) }}
                                        value={poblacion}
                                        type="input"
                                        className="form-control mt-1"
                                        placeholder="Introducir poblacion"
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