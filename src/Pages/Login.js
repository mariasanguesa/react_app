import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState, useContext } from 'react';
import axios from "axios";
import DBImageContext from '../store/DBImageContext';
import Button from 'react-bootstrap/Button';

const Login = (props) => {

    const [loginDb, setLoginDb] = useState([]);

    const imageContext = useContext(DBImageContext).url;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        axios.get(imageContext)
            .then((response) => {
                setLoginDb(response.data);
            })
    }, []);

    const submitHandler = (event) => {
        // Para que no recarge la pagina
        event.preventDefault();
        const authData = {
            email: email,
            password: password,
            // Genera el token que queremos
            returnSecureToken: true
        }

        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAz2len4LT2BmdNFZEQqzUF1j3hB-xtUsw', authData)
            .then((response) => {
                props.actualizarLogin(true, response.data);
            })
            .catch((error) => {
                alert('El usuario o contraseña no son correctos.');
            })

            setEmail('');
            setPassword('');
    }

    const logoutHandler = () => {

        props.actualizarLogin(false, {});
    }

    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <Container className="gap-3">

                <Row className="justify-content-md-center gap-3 mx-auto" >
                    <Col className="border-end" md={4} >
                        <div className="Auth-form-container ">
                            <form onSubmit={submitHandler} className="Auth-form">
                                <div className="Auth-form-content">
                                    <h3 className="Auth-form-title">Inicia sesión</h3>
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
                                            Inciar sesión
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Col>
                    <Col>
                        <Button onClick={logoutHandler} variant="warning" >Logout</Button>
                    </Col>
                    <Col md={4}>
                        <img alt='' style={{ 'width': '500px' }} src={loginDb.login} />
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Login;