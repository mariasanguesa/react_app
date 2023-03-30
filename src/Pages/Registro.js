import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const Registro = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navega = useNavigate();

    const submitHandler = (event) => {
        // Para que no recarge la pagina
        event.preventDefault();
        const authData = {
            email: email,
            password: password,
            // Genera el token que queremos
            returnSecureToken: true
        }
        const emailDb = { email: email };

        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAz2len4LT2BmdNFZEQqzUF1j3hB-xtUsw', authData)
            .then((response) => {
                props.actualizarLogin(true, response.data);
                axios.post('https://react-app-1c2eb-default-rtdb.europe-west1.firebasedatabase.app/carrito/.json?auth=' + response.data.idToken, emailDb)
                    .then((response) => {
                    }).catch((event) => {
                        alert('Error');
                    })
                navega("/login");
            })
            .catch((error) => {
                alert('Error en el registro f');
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
                        <form onSubmit={submitHandler} className="Auth-form">
                            <div className="Auth-form-content">
                                <h3 className="Auth-form-title">Regístrate</h3>
                                <div className="form-group mt-3">
                                    <label>Email</label>
                                    <input
                                        onChange={(event) => { setEmail(event.target.value) }}
                                        value={email}
                                        type="email"
                                        className="form-control mt-1"
                                        placeholder="Introducir email"
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Contraseña</label>
                                    <input
                                        onChange={(event) => { setPassword(event.target.value) }}
                                        value={password}
                                        type="password"
                                        className="form-control mt-1"
                                        placeholder="Introducir contraseña"
                                    />
                                </div>
                                <div className="d-grid gap-2 mt-3">
                                    <button type="submit" className="btn btn-outline-dark">
                                        Registrarse
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </Col>
            </Container>
        </>
    )
}

export default Registro;