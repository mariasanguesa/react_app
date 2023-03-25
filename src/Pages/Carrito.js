import Col from "react-bootstrap/esm/Col";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ProductosCarrito from "../Components/ProductosCarrito";
import { Link } from 'react-router-dom';
import TotalPedido from "../Components/TotalPedido";

const Carrito = (props) => {

    let contenido = <></>;

    if (props.loginData.idToken) {
        contenido = <Container className="gap-3">
            <Row className="justify-content-md-center  mx-auto" >
                <Col md={7}>
                    <div className="border-bottom">
                        <p><b>Mi carrito</b></p>
                    </div>
                    <div >
                        <ProductosCarrito productos={props.productos} productosTienda={props.productosTienda} añadirCarrito={props.añadirCarrito} quitarCarrito={props.quitarCarrito} />
                    </div>
                </Col>
                <Col md={3}>
                    <div className="border-bottom">
                        <p ><b>Resumen del pedido</b></p>
                    </div>
                    <TotalPedido productos={props.productos} productosTienda={props.productosTienda} />

                    <div className="text-center align-items-center justify-content-center">
                        <Button variant="outline-dark" as={Link} to="/detallesPedido">Realizar pedido</Button>
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
            <div className="mt-5">
                {contenido}
            </div>


        </>
    )
}

export default Carrito;