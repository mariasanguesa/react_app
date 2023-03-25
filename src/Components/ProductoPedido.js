import Col from "react-bootstrap/esm/Col";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


const ProductoPedido = (props) => {


    return (
        <>
            
                    <Container className="border-bottom mt-2">
                        <Row>
                            <Col xs={4}>
                            <img alt='' style={{ 'width': '100px', 'marginTop': '20px' }} src={props.producto.foto} />
                            </Col>
                            <Col>
                                <Container>
                                    <Row>

                                        <p><b>{props.producto.nombre}</b></p>
                                    </Row>
                                    <Row>
                                        <p>{props.producto.numProducto} x {props.producto.precio} €</p>
                                        <p>Coste: {Number(props.producto.numProducto)*Number(props.producto.precio)} €</p>
                                    </Row>
                                </Container>
                            </Col>
                            
                        </Row>
                    </Container>
                
        </>
    )

}
export default ProductoPedido;