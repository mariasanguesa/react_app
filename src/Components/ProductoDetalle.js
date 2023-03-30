import Col from "react-bootstrap/esm/Col";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React from 'react';

const ProductoDetalle = (props) => {

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
                </Row>
            </Container >
        </>
    )

}
export default ProductoDetalle;