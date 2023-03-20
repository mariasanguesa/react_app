import Col from "react-bootstrap/esm/Col";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Accordion from 'react-bootstrap/Accordion';

const ProductoPedido = (props) => {


    return (
        <>
            <Accordion.Item eventKey="pedido0">
                <Accordion.Header>Pedido número 1</Accordion.Header>
                <Accordion.Body>
                    <Container>
                        <Row>
                            <Col>
                                <p>Foto</p>
                            </Col>
                            <Col>
                                <Container>
                                    <Row>

                                        <p><b>Nombre</b></p>
                                    </Row>
                                    <Row>
                                        <p>Precio</p>
                                    </Row>
                                </Container>
                            </Col>
                            <Col>
                                <Button size="sm" variant="outline-dark" >Eliminar</Button>
                            </Col>
                        </Row>
                    </Container >
                    <Container >
                        <ProgressBar animated now={45} />
                        <p style={{ textAlign: "center" }}><i>El pedido está en camino</i></p>
                    </Container>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="pedido1">
                <Accordion.Header>Pedido número 2</Accordion.Header>
                <Accordion.Body>
                    <Container>
                        <Row>
                            <Col>
                                <p>Foto</p>
                            </Col>
                            <Col>
                                <Container>
                                    <Row>

                                        <p><b>Nombre</b></p>
                                    </Row>
                                    <Row>
                                        <p>Precio</p>
                                    </Row>
                                </Container>
                            </Col>
                            <Col>
                                <Button size="sm" variant="outline-dark" >Eliminar</Button>
                            </Col>
                        </Row>
                    </Container >
                    <Container >
                        <ProgressBar animated now={45} />
                        <p style={{ textAlign: "center" }}><i>El pedido está en camino</i></p>
                    </Container>
                </Accordion.Body>
            </Accordion.Item>
        </>
    )

}
export default ProductoPedido;