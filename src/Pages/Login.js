import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Login = () => {
    return (
        <>
            <br></br>
            <Container>

                <Row className="justify-content-md-center">
                    <Col>
                        <div className="Auth-form-container">
                            <form className="Auth-form">
                                <div className="Auth-form-content">
                                    <h3 className="Auth-form-title">Inicia sesión</h3>
                                    <div className="form-group mt-3">
                                        <label>Email address</label>
                                        <input
                                            type="email"
                                            className="form-control mt-1"
                                            placeholder="Enter email"
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            className="form-control mt-1"
                                            placeholder="Enter password"
                                        />
                                    </div>
                                    <div className="d-grid gap-2 mt-3">
                                        <button type="submit" className="btn btn-primary">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Col>
                    <Col>
                        <p>Aquí se puede añadir una imagen y un link a registrarse</p>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Login;