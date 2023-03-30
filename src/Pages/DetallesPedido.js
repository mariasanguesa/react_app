import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Col from "react-bootstrap/esm/Col";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TotalPedido from "../Components/TotalPedido";
import ProductosDetalle from "../Components/ProductosDetalle";
import React from 'react';

const DetallesPedido = (props) => {

    let contenido = "";

    if (props.loginData.idToken) {
        contenido = <Container className="gap-3">
            <Row className="justify-content-md-center  mx-auto" >
                <Col md={7}>
                    <div className="border-bottom">
                        <p><b>Mi pedido</b></p>
                    </div>
                    <div >
                        <ProductosDetalle loginData={props.loginData} productos={props.productos} productosTienda={props.productosTienda} añadirCarrito={props.añadirCarrito} quitarCarrito={props.quitarCarrito} />
                    </div>
                </Col>
                <Col md={3}>
                    <div className="border-bottom">
                        <p ><b>Resumen del pedido</b></p>
                    </div>
                    <TotalPedido loginData={props.loginData} productos={props.productos} productosTienda={props.productosTienda} />
                </Col>
            </Row>
        </Container>;

    }
    else {
        contenido = "No hay contenido para mostrar";
    }

    return (
        <>
            <div className="text-center align-items-center justify-content-center mt-5 mb-5">
                <h4>Página de confirmación del pedido</h4>
                <p>Aquí están los detalles del pedido que estás a punto de realizar, para seguir con la compra pulse continuar.</p>
            </div>
            <div className="text-center align-items-center justify-content-center">
                {contenido}

            </div>
            <div className="text-center align-items-center justify-content-center mt-4">
                <Button as={Link} variant="outline-dark" to="/carrito">Cancelar</Button>
                <Button as={Link} variant="outline-dark" to="/confirmacionPedido">Continuar</Button>
            </div>
        </>
    )
}

export default DetallesPedido;