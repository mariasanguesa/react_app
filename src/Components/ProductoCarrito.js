import Col from "react-bootstrap/esm/Col";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const ProductoCarrito = (props) => {

    const añadirHandler = () => {
        props.añadirCarrito(props.producto.idProducto,props.producto.numProducto,"add");
    }

    const quitarHandler = () => {
        props.añadirCarrito(props.producto.idProducto,props.producto.numProducto,"sub");
    }

    const eliminarHandler = () => {
        props.quitarCarrito(props.producto.idProducto);
    }

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

                                <p><b>{props.producto.idProducto}</b></p>
                            </Row>
                            <Row>
                                <p>Precio</p>
                            </Row>
                        </Container>
                    </Col>
                    <Col>
                        <Button size="sm" variant="outline-dark" onClick={quitarHandler}>-</Button>
                        <span className="border-0 w-25 text-center"> {props.producto.numProducto} </span>
                        <Button size="sm" variant="outline-dark" onClick={añadirHandler}>+</Button>
                    </Col>
                    <Col>
                        <Button size="sm" variant="outline-dark" onClick={eliminarHandler}>X</Button>

                    </Col>
                </Row>
            </Container >
        </>
    )

}
export default ProductoCarrito;