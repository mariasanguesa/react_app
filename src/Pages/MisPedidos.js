import Col from "react-bootstrap/esm/Col";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductosPedido from "../Components/ProductosPedido";
import { useParams } from "react-router-dom";
import React from 'react';

const MisPedidos = (props) => {

    const parametros = useParams();

    let contenido = <></>;

    if (props.loginData.idToken) {
        if (props.loginData.email === parametros.id) {
            contenido = <Container className="gap-3">
                <Row className="justify-content-md-center  " >
                    <Col md={7}>
                        <div className="border-bottom">
                            <h6>Mis pedidos realizados</h6>
                        </div>
                        <div >
                            <ProductosPedido productosTienda={props.productosTienda} loginData={props.loginData} quitarPedido={props.quitarPedido} />
                        </div>
                    </Col>
                </Row>
            </Container>;
        } else {
            contenido = "El parámetro dado en la url no se corresponde con el usuario logueado";
        }


    }
    else {
        contenido = "Para ver tus pedidos hace falta hacer login";
    }

    return (
        <>
            <div className="text-center align-items-center justify-content-center mt-5 mb-5">
                <h4>Mis pedidos</h4>
                <p>Este es tu listado de pedidos. Pincha en cada uno para ver su ficha completa.</p>
            </div>
            <div className="text-center align-items-center justify-content-center">
                {contenido}

            </div>

        </>
    )
}

export default MisPedidos;