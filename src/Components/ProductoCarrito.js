import Col from "react-bootstrap/esm/Col";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const ProductoCarrito = () => {
    return (
        <>
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
                        <input className="border-0 w-25 text-center" value="0"></input>
                        <Button size="sm" variant="outline-dark">+</Button>
                    </Col>
                    <Col>
                        <Button size="sm" variant="outline-dark">X</Button>

                    </Col>
                </Row>
            </Container >
        </>
    )

}
export default ProductoCarrito;