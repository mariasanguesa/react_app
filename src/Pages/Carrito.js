import Col from "react-bootstrap/esm/Col";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

const Carrito = () => {


    return (
        <>
            <br></br>
            <br></br>
            <br></br>

            <Container className="gap-3">
                <Row className="justify-content-md-center  mx-auto" >
                    <Col md={7}>
                        <div className="border-bottom">
                            <p>Mi carrito</p>
                        </div>
                        <div >
                            <Container className="border-bottom">
                                <Row>
                                    <Col>
                                        <p>Foto</p>
                                    </Col>
                                    <Col>
                                        <Container>
                                            <Row>
                                                <p><b>Nombre del producto</b></p>
                                            </Row>
                                            <Row>
                                                <p>Precio</p>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col>
                                        <Button size="sm" variant="outline-dark">-</Button>
                                        <input className="border-0 w-25 text-center"></input>
                                        <Button size="sm" variant="outline-dark">+</Button>
                                    </Col>
                                    <Col>
                                        <Button size="sm" variant="outline-dark">X</Button>

                                    </Col>
                                </Row>
                            </Container >

                        </div>

                    </Col>
                    <Col md={3}>
                        <div className="border-bottom">
                            <p >Resumen del pedido</p>
                        </div>
                        <div className="border-bottom">
                            <Container>
                                <Row>
                                    <p>Total del pedido</p>
                                </Row>
                                <Row>
                                    <p>Gastos de envío</p>
                                </Row>
                            </Container>
                        </div>
                        <div className="border-bottom">
                            <p>Total a pagar</p>
                        </div>
                        <br></br>
                        <div className="text-center align-items-center justify-content-center">
                            <Button variant="dark">Realizar pedido</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Carrito;