import Col from "react-bootstrap/esm/Col";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const ProductoPedido = (props) => {


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
        </>
    )

}
export default ProductoPedido;