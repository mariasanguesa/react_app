import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect,useState, useContext } from 'react';
import axios from "axios";
import DBImageContext from '../store/DBImageContext';

const Login = () => {

    const [loginDb, setLoginDb] = useState([]);

    const imageContext = useContext(DBImageContext).url;

    useEffect(() => {
        axios.get(imageContext)
            .then((response) => {
                setLoginDb(response.data);
            })
    }, []);

    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <Container className="gap-3">

                <Row className="justify-content-md-center gap-3 mx-auto" >
                    <Col className="border-end" md={4} >
                        <div className="Auth-form-container ">
                            <form className="Auth-form">
                                <div className="Auth-form-content">
                                    <h3 className="Auth-form-title">Inicia sesión</h3>
                                    <div className="form-group mt-3">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            className="form-control mt-1"
                                            placeholder="Introducir email"
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label>Contraseña</label>
                                        <input
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
                    <Col md={4}>
                        <img alt='' style={{ 'width': '500px' }} src={loginDb.login} />
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Login;