import Col from "react-bootstrap/esm/Col";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import React from 'react';

const ProductoCarrito = (props) => {

    const añadirHandler = () => {
        props.añadirCarrito(props.producto.idProducto, props.producto.numProducto, "add");
    }

    const quitarHandler = () => {
        props.añadirCarrito(props.producto.idProducto, props.producto.numProducto, "sub");
    }

    const eliminarHandler = () => {
        props.quitarCarrito(props.producto.idProducto);
    }

    return (
        <>
            <Container className="border-bottom">
                <Row>
                    <Col>
                        <img alt='' style={{ 'width': '100px', 'marginTop': '20px' }} src={props.foto} />
                    </Col>
                    <Col>
                        <Container>
                            <Row>

                                <p><b>{props.nombre}</b></p>
                            </Row>
                            <Row>
                                <p>{props.precio} €</p>
                            </Row>
                        </Container>
                    </Col>
                    <Col>
                        <div style={{ 'marginTop': '20px' }}>
                            <Button size="sm" variant="outline-dark" onClick={quitarHandler}>-</Button>
                            <span className="border-0 w-25 text-center"> {props.producto.numProducto} </span>
                            <Button size="sm" variant="outline-dark" onClick={añadirHandler}>+</Button>
                        </div>
                    </Col>
                    <Col>
                        <div style={{ 'marginTop': '20px' }}>
                            <Button size="sm" variant="outline-dark" onClick={eliminarHandler}>X</Button>
                        </div>

                    </Col>
                </Row>
            </Container >
        </>
    )

}
export default ProductoCarrito;