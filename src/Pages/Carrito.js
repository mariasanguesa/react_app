import Col from "react-bootstrap/esm/Col";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ProductosCarrito from "../Components/ProductosCarrito";
import { useState, useEffect } from 'react';

const Carrito = (props) => {


    let contenido = <></>;

    if (props.loginData.idToken)  {
        contenido = <Container className="gap-3">
            <Row className="justify-content-md-center  mx-auto" >
                <Col md={7}>
                    <div className="border-bottom">
                        <p>Mi carrito</p>
                    </div>
                    <div >

                        <ProductosCarrito loginData={props.loginData} />
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
        </Container>;

    }
    else {
        contenido = "Para acceder al carrito hace falta hacer login";

    }

    return (
        <>
            <br></br>
            <br></br>
            <br></br>

            {contenido}

        </>
    )
}

export default Carrito;